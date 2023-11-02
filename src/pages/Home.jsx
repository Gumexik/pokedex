import PokemonList from "../components/PokemonList";
import usePokemons from "../hooks/usePokemons";

const Home = () => {
	const {
		pokemons,
		hasMorePokemon,
		fetchNextPage,
		pokemonTypes,
		setSelectedType,
		setPokemons,
	} = usePokemons();

	const handleSelectType = (type) => {
		if (type) {
			setSelectedType(type);
		} else {
			setPokemons([]);
			setSelectedType(null);
		}
	};
	return (
		<>
			<header className='text-center text-2xl text-red-400 my-2'>
				PokeDex
			</header>
			<div className='grid grid-cols-3 md:grid-cols-5 gap-2 my-4'>
				{pokemonTypes.map((type) => {
					return (
						<button
							onClick={() => handleSelectType(type)}
							key={type.name}
							className={`${type.color} text-center py-2 rounded-md border border-black/70 capitalize font-bold hover:opacity-80 transition-opacity duration-300 ease-in-out`}
						>
							{type.name}
						</button>
					);
				})}
				<button
					onClick={() => handleSelectType(null)}
					className='bg-blue-400 px-4 py-2 rounded-md border border-black/70 capitalize font-bold col-span-3 md:col-span-2 hover:opacity-80 transition-opacity duration-300 ease-in-out'
				>
					All
				</button>
			</div>
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
