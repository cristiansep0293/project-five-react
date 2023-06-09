import { axiosInstance } from "../api/axiosInstance";

export const getAllTypes = async () => {
  try {
    const result = await axiosInstance.get("type/");
    return result.data.results.map((type) => ({
      id: type.url.split("/").at(-2),
      name: type.name,
    }));
  } catch (error) {
    console.error(error);
  }
};
