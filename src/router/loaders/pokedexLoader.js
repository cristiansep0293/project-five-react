import { getAllPokemons } from "../../service/getAllPokemons";
import { getAllPokemonsByType } from "../../service/getAllPokemonsByType";

export const pokedexLoader = async ({ request }) => {
  const url = new URL(request.url);
  const pokemonName = url.searchParams.get("pokemonName") ?? "";
  const pokemonType = url.searchParams.get("pokemonType") ?? "";
  let listPokemons = await getAllPokemons();

  if (pokemonName && pokemonType) {
    listPokemons = await getAllPokemonsByType(pokemonType);
    listPokemons = listPokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(pokemonName.toLowerCase())
    );
  } else if (!pokemonName && !pokemonType) {
    listPokemons = await getAllPokemons();
  } else if (pokemonName) {
    listPokemons = await getAllPokemons();
    listPokemons = listPokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(pokemonName.toLowerCase())
    );
  } else if (pokemonType) {
    listPokemons = await getAllPokemonsByType(pokemonType);
  }

  return { listPokemons, pokemonName, pokemonType };
};
