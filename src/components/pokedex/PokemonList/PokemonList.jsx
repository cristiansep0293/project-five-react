import PropTypes from "prop-types";
import { useState } from "react";
import { usePagination } from "../../../hooks/usePagination";
import Pagination from "../Pagination/Pagination";
import PokemonCard from "../../../components/pokedex/PokemonCard/PokemonCard";
import "./PokemonList.css";

const PokemonList = ({ pokemonList }) => {
  const [quantityPagination, setQuantityPagination] = useState(25);
  const [currentPage, totalPages, listPokemonSlice, changePageTo] =
    usePagination(pokemonList, quantityPagination);

  const onShowAmount = (amount) => {
    setQuantityPagination(amount);
  };

  return (
    <section>
      <Pagination
        totalPages={totalPages}
        onChangePage={changePageTo}
        onBackPage={() => changePageTo(currentPage - 1)}
        onNextPage={() => changePageTo(currentPage + 1)}
        quantityPagination={quantityPagination}
        onShowAmount={onShowAmount}
        currentPage={currentPage}
      />
      <ul className="list-pokemons">
        {listPokemonSlice.map((pokemon) => (
          <li key={pokemon.url}>
            <PokemonCard pokemonId={pokemon.url.split("/").at(-2)} />
          </li>
        ))}
      </ul>
      <Pagination
        totalPages={totalPages}
        onChangePage={changePageTo}
        onBackPage={() => changePageTo(currentPage - 1)}
        onNextPage={() => changePageTo(currentPage + 1)}
      />
    </section>
  );
};

PokemonList.propTypes = {
  pokemonList: PropTypes.array.isRequired,
};

export default PokemonList;
