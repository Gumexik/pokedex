/* eslint-disable react/prop-types */
const PokemonBasicStats = ({ pokemon }) => {
	return (
		<>
			<div className='bg-gray-400 h-80 gap-8 rounded-md flex flex-col items-center justify-center text-center shadow shadow-black'>
				<div>
					<p className='font-bold capitalize'>Height</p>
					<p>{pokemon.height}</p>
				</div>
				<div>
					<p className='font-bold capitalize'>Weight</p>
					<p>{pokemon.weight}</p>
				</div>
			</div>
			<div className='bg-gray-400 h-80 gap-8 rounded-md flex flex-col items-center justify-center text-center shadow shadow-black'>
				<div>
					<p className='font-bold capitalize py-4'>Abilities</p>
					{pokemon.abilities.map((ability) => {
						return <p key={ability.ability.name}>{ability.ability.name}</p>;
					})}
				</div>
			</div>
			<div className='bg-gray-400 h-80 gap-8 rounded-md flex flex-col items-center justify-center text-center shadow shadow-black'>
				<div>
					<p className='font-bold capitalize py-4'>Types</p>
					{pokemon.types.map((type) => {
						return <p key={type.type.name}>{type.type.name}</p>;
					})}
				</div>
			</div>
		</>
	);
};

export default PokemonBasicStats;
