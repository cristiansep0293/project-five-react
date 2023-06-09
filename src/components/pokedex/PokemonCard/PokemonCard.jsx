import Proptype from "prop-types";
import { useEffect, useState } from "react";
import { getPokemonById } from "../../../service/getPokemonById";
import { Link } from "react-router-dom";
import "./PokemonCard.css";

const targetStats = ["hp", "attack", "defense", "speed"];

const PokemonCard = ({ pokemonId }) => {
  const [pokemon, setPokemon] = useState(null);
  const stats = pokemon?.stats.filter((x) =>
    targetStats.includes(x.name.toLowerCase())
  );
  let types = pokemon?.types[0];
  pokemon?.types.map((type, i) => {
    if (i == 0) return;
    types += "/" + type;
  });

  useEffect(() => {
    const loadDataPokemon = async () => {
      const dataPokemon = await getPokemonById(pokemonId);
      setPokemon(dataPokemon);
    };
    loadDataPokemon();
  }, [pokemonId]);

  return (
    <article className="pokemon-card">
      {!pokemon && <p>Loading...</p>}
      {pokemon && (
        <>
          <div className="pokemon-card__img">
            <img src={pokemon.image} alt={pokemon.name} />
          </div>
          <div>
            <Link to={`/Pokedex/:${pokemonId}`}>
              <h2 className="pokemon-card__title">{pokemon.name}</h2>
            </Link>
            <section className="pokemon-card__types">
              <p>
                <strong>{types}</strong>
              </p>
              <p>Tipo</p>
            </section>
            <hr className="pokemon-card__division" />
            <section className="pokemon-card__stats">
              {stats.length && (
                <>
                  <div>
                    <div>
                      <p className="pokemon-card__stats-item">
                        {stats[0].name.toUpperCase()}
                      </p>
                      <p className="pokemon-card__stats-value">
                        {stats[0].value}
                      </p>
                    </div>
                    <div>
                      <p className="pokemon-card__stats-item">
                        {stats[2].name.toUpperCase()}
                      </p>
                      <p className="pokemon-card__stats-value">
                        {stats[2].value}
                      </p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <p className="pokemon-card__stats-item">
                        {stats[1].name.toUpperCase()}
                      </p>
                      <p className="pokemon-card__stats-value">
                        {stats[1].value}
                      </p>
                    </div>
                    <div>
                      <p className="pokemon-card__stats-item">
                        {stats[3].name.toUpperCase()}
                      </p>
                      <p className="pokemon-card__stats-value">
                        {stats[3].value}
                      </p>
                    </div>
                  </div>
                </>
              )}
              {/* <ul>
                {stats.map((stat) => (
                  <li key={stat.name}>
                    <p className="pokemon-card__stats-item">
                      {stat.name.toUpperCase()}
                    </p>
                    <p className="pokemon-card__stats-value">{stat.value}</p>
                  </li>
                ))}
              </ul> */}
            </section>
          </div>
        </>
      )}
    </article>
  );
};

PokemonCard.propTypes = {
  pokemonId: Proptype.string.isRequired,
};

export default PokemonCard;
