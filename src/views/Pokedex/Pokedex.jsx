import { useContext } from "react";
import { UserNameContext } from "../../context/UserNameContext";
import PokemonList from "../../components/pokedex/PokemonList/PokemonList";
import nothingPokemons from "../../assets/img/nothing-pokemons.png";
import { useLoaderData } from "react-router-dom";
import FilterForm from "../../components/pokedex/FilterForm/FilterForm";
import "./Pokedex.css";

const Pokedex = () => {
  const { userNameTrainer } = useContext(UserNameContext);
  const { listPokemons, pokemonName, pokemonType } = useLoaderData();

  return (
    <section>
      <p className="text-pokedex">
        <strong className="text-pokedex__color">
          Welcome {userNameTrainer},
        </strong>
        here you can find your pokemón favorite
      </p>
      <FilterForm
        pokemonNameInitial={pokemonName}
        pokemonTypeInitial={pokemonType}
      />
      {!listPokemons.length ? (
        <div className="text-pokedex__nothing-pokemons">
          <p className="text-pokedex__nothing-pokemons__text">
            Without results
          </p>
          <img
            className="text-pokedex__nothing-pokemons__img"
            src={nothingPokemons}
            alt="nothing-pokemons"
          />
        </div>
      ) : (
        <>
          <PokemonList pokemonList={listPokemons} />
        </>
      )}
    </section>
  );
};

export default Pokedex;
