import { useParams } from "react-router-dom";
import usePokemon from "../hooks/usePokemon";
import PokemonAvatar from "../components/PokemonAvatar";

const PokemonDetail = () => {
	let { pokemonName } = useParams();

	const { pokemon, isLoading } = usePokemon({ pokemonName });
	console.log(pokemon);

	return (
		<div>
			{isLoading ? (
				<p className='text-center font-xl'>Loading...</p>
			) : pokemon ? (
				<PokemonAvatar pokemon={pokemon} />
			) : (
				<p>Pokemon not found</p>
			)}
		</div>
	);
};

export default PokemonDetail;
