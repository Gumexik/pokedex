import { useEffect, useState } from "react";
import {
	POKEMON_API_POKEMON_URL,
	POKEMON_IMAGES_BASE_URL,
	POKEMON_TYPES,
} from "../constants";
import { httpClient } from "../api/httpClient";

const usePokemons = () => {
	const [pokemons, setPokemons] = useState([]);
	const [nextUrl, setNextUrl] = useState(POKEMON_API_POKEMON_URL);
	const [selectedType, setSelectedType] = useState(null);

	useEffect(() => {
		if (selectedType) {
			fetchPokemonByType();
		} else fetchPokemon();
	}, [selectedType]);

	const fetchPokemonByType = async () => {
		if (selectedType) {
			const result = await httpClient.get(selectedType.url);
			if (result?.data?.pokemon) {
				const listPokemon = result.data.pokemon.map((p) =>
					indexedPokemonToListPokemon(p.pokemon)
				);
				setPokemons(listPokemon);
				setNextUrl(POKEMON_API_POKEMON_URL);
			}
		}
	};

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
		pokemonTypes: POKEMON_TYPES,
		selectedType,
		setSelectedType,
		setPokemons,
	};
};

export default usePokemons;
