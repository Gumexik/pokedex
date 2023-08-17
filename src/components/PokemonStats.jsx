/* eslint-disable react/prop-types */
const PokemonStats = ({ pokemon }) => {
	return (
		<div className='bg-gray-400 rounded-md mx-auto shadow shadow-black w-1/2 mb-4'>
			<table>
				<thead className='border-b border-black'>
					<tr>
						{pokemon.stats.map((stat) => {
							return (
								<th key={stat.stat.name} className='capitalize p-4 text-center'>
									{stat.stat.name}
								</th>
							);
						})}
					</tr>
				</thead>
				<tbody>
					<tr>
						{pokemon.stats.map((stat) => {
							return (
								<td key={stat.base_stat} className='text-center p-4'>
									{stat.base_stat}
								</td>
							);
						})}
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default PokemonStats;
