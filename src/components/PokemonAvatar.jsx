/* eslint-disable react/prop-types */
const PokemonAvatar = ({ pokemon }) => {
	return (
		<div className='bg-red-400 h-52 flex flex-col items-center justify-centerselect-none'>
			<p className='font-bold py-4 capitalize'>{pokemon.name}</p>
			<img
				src={pokemon.sprites.other["official-artwork"].front_default}
				alt='pokemon'
				width={150}
				className='object-contain'
			/>
		</div>
	);
};

export default PokemonAvatar;
