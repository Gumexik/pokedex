import PokemonList from "../components/PokemonList";
import usePokemons from "../hooks/usePokemons";

const Home = () => {
	const { pokemons, hasMorePokemon, fetchNextPage } = usePokemons();
	return (
		<>
			<header className='text-center text-2xl text-red-400 my-2'>
				PokeDex
			</header>
			<PokemonList pokemons={pokemons}></PokemonList>
			{hasMorePokemon ? (
				<div className='flex justify-center'>
					<button
						onClick={fetchNextPage}
						className='px-4 py-2 border rounded-md bg-blue-500 hover:bg-blue-600 text-white my-2 transition-colors duration-300 ease-in-out'
					>
						Load More Pokemon
					</button>
				</div>
			) : null}
		</>
	);
};

export default Home;
