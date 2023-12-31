import { Link, useParams } from "react-router-dom";
import usePokemon from "../hooks/usePokemon";
import PokemonAvatar from "../components/PokemonAvatar";
import PokemonBasicStats from "../components/PokemonBasicStats";
import PokemonStats from "../components/PokemonStats";

const PokemonDetail = () => {
	let { pokemonName } = useParams();

	const { pokemon, isLoading } = usePokemon({ pokemonName });
	console.log(pokemon);

	return (
		<div>
			{isLoading ? (
				<p className='text-center font-xl'>Loading...</p>
			) : pokemon ? (
				<>
					<PokemonAvatar pokemon={pokemon} />
					<div className='grid grid-cols-3 mt-2 gap-4'>
						<PokemonBasicStats pokemon={pokemon} />
					</div>
					<div className='mt-2'>
						<PokemonStats pokemon={pokemon} />
					</div>
					<div className='flex items-center justify-center'>
						<Link
							to='/'
							className='px-4 py-2 rounded-md bg-blue-400 hover:bg-blue-600 hover:text-white transition-colors duration-200 ease-in-out'
						>
							Back to pokemon list
						</Link>
					</div>
				</>
			) : (
				<p>Pokemon not found</p>
			)}
		</div>
	);
};

export default PokemonDetail;
