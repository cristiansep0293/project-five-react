import Proptypes from "prop-types";
import { useEffect, useState } from "react";
import { Form } from "react-router-dom";
import { getAllTypes } from "../../../service/getAllTypes";
import "./FilterForm.css";

const FilterForm = ({ pokemonNameInitial, pokemonTypeInitial }) => {
  const [typesList, setTypesList] = useState([]);
  const [namePokemonFilter, setNamePokemonFilter] =
    useState(pokemonNameInitial);
  const [typeSelectedFiler, setTypeSelectedFiler] =
    useState(pokemonTypeInitial);

  const onChangeNamePokemonFilter = (e) => {
    const newValue = e.target.value;
    setNamePokemonFilter(newValue);
  };

  const onChangeTypeSelectedFilter = (e) => {
    const newValue = e.target.value;
    setTypeSelectedFiler(newValue);
  };

  useEffect(() => {
    const loadTypes = async () => {
      const dataTypes = await getAllTypes();
      setTypesList(dataTypes);
    };
    loadTypes();
  }, []);

  useEffect(() => {
    setNamePokemonFilter(pokemonNameInitial);
    setTypeSelectedFiler(pokemonTypeInitial);
  }, [pokemonNameInitial, pokemonTypeInitial]);

  return (
    <Form className="form">
      <div className="inputs-container">
        <input
          className="inputs-container__input-text"
          type="text"
          placeholder="Search a pokemon"
          name="pokemonName"
          value={namePokemonFilter}
          onChange={onChangeNamePokemonFilter}
        />
        <select
          className="inputs-container__input-select"
          name="pokemonType"
          value={typeSelectedFiler}
          onChange={onChangeTypeSelectedFilter}
        >
          <option value={""}>All the pokemons</option>
          {typesList.map((type) => (
            <option key={type.id} value={type.id}>
              {type.name}
            </option>
          ))}
        </select>
        <button className="form-button">Search</button>
      </div>
    </Form>
  );
};

FilterForm.propTypes = {
  pokemonNameInitial: Proptypes.string,
  pokemonTypeInitial: Proptypes.string,
};

export default FilterForm;
