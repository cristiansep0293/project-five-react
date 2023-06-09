import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/common/Layout/Layout";
import ProtectedRoute from "../components/common/ProtectedRoute/ProtectedRoute";
import Home from "../views/Home/Home";
import Pokedex from "../views/Pokedex/Pokedex";
import { pokedexLoader } from "./loaders/pokedexLoader";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Pokedex",
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "",
        element: <Pokedex />,
        loader: pokedexLoader,
      },
      {
        path: ":pokemonId",
        element: <p>PokemonId</p>,
      },
    ],
  },
]);
