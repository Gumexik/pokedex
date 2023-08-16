import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import PokemonDetail from "./pages/PokemonDetail";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "pokemon/:pokemonName",
		element: <PokemonDetail />,
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
