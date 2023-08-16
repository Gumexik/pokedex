import { useEffect, useState } from "react";
import { POKEMON_API_POKEMON_URL, POKEMON_IMAGES_BASE_URL } from "../constants";
import { httpClient } from "../api/httpClient";

const usePokemons = () => {
	const [pokemons, setPokemons] = useState([]);
	const [nextUrl, setNextUrl] = useState(POKEMON_API_POKEMON_URL);

	useEffect(() => {
		fetchPokemon();
	}, []);

	const indexedPokemonToListPokemon = (indexedPokemon) => {
		const pokedexNumber = parseInt(
			indexedPokemon.url
				.replace(`${POKEMON_API_POKEMON_URL}/`, "")
				.replace("/", "")
		);

		const listPokemon = {
			name: indexedPokemon.name,
			url: indexedPokemon.url,
			image: `${POKEMON_IMAGES_BASE_URL}/${pokedexNumber}.png`,
			pokedexNumber,
		};

		return listPokemon;
	};

	const fetchPokemon = async () => {
		if (nextUrl) {
			const result = await httpClient.get(nextUrl);

			if (result.data.results) {
				const listPokemons = result.data.results.map((p) =>
					indexedPokemonToListPokemon(p)
				);
				setPokemons([...pokemons, ...listPokemons]);
				setNextUrl(result.data.next);
			}
		}
	};

	return {
		pokemons,
		fetchNextPage: fetchPokemon,
		hasMorePokemon: !!nextUrl,
	};
};

export default usePokemons;
