import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const PokemonCard = ({ pokemon }) => {
	return (
		<Link to={`pokemon/${pokemon.name}`}>
			<div className='bg-red-400 h-64 rounded-md flex flex-col items-center justify-center hover:bg-red-500 transition-colors duration-300 ease-in-out select-none cursor-pointer'>
				<p className='font-bold py-4 capitalize'>{pokemon.name}</p>
				<img
					src={pokemon.image}
					alt='pokemon'
					width={140}
					className='object-contain'
				/>
			</div>
		</Link>
	);
};

export default PokemonCard;
