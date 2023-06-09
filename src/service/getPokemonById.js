import { axiosInstance } from "../api/axiosInstance";
import pokemonUnknow from "../assets/img/pokemonUnknow.png";

const getPokemonImg = (sprites) => {
    const firstOption = sprites.other.dream_world.front_default;
    const secondOption = sprites.other['official-artwork'].front_default;
    const thirdOption = sprites.other.home.front_default; 

    if (firstOption) return firstOption;
    if (secondOption) return secondOption;
    if (thirdOption) return thirdOption;
    return pokemonUnknow;
}

export const getPokemonById = async (pokemonId) => {
  try {
    const result = await axiosInstance.get(`pokemon/${pokemonId}`);
    return {
        name: result.data.name[0].toUpperCase() + result.data.name.slice(1),
        types: result.data.types.map(typeInfo => typeInfo.type.name),
        stats: result.data.stats.map(statInfo => ({
            name: statInfo.stat.name, 
            value: statInfo.base_stat
        })),
        image: getPokemonImg(result.data.sprites)
    }
  } catch (error) {
    console.error(error);
  }
};
