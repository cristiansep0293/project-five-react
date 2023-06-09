import { axiosInstance } from "../api/axiosInstance";

export const getAllPokemonsByType = async (idType) => {
  try {
    const result = await axiosInstance.get(`type/${idType}`);
    return result.data.pokemon.map((pokemonData) => pokemonData.pokemon);
  } catch (error) {
    console.error(error);
  }
};
