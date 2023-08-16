import { useEffect, useState } from "react";
import { POKEMON_API_POKEMON_URL } from "../constants";
import { httpClient } from "../api/httpClient";

const usePokemon = ({ pokemonName }) => {
	const [pokemon, setPokemon] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		if (pokemonName) {
			fetchPokemon();
		}
	}, [pokemonName]);

	const fetchPokemon = async () => {
		if (pokemonName) {
			setIsLoading(true);
			const url = `${POKEMON_API_POKEMON_URL}/${pokemonName}`;
			const result = await httpClient.get(url);
			if (result?.data) {
				setPokemon(result.data);
			}
			setIsLoading(false);
		}
	};
	return { pokemon, isLoading };
};

export default usePokemon;
