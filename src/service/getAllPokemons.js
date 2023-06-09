import { axiosInstance } from "../api/axiosInstance";

export const getAllPokemons = async () => {
  try {
    const result = await axiosInstance.get("/pokemon", {
      params: { limit: 10000 },
    });
    return result.data.results;
  } catch (error) {
    console.error(error);
  }
};
