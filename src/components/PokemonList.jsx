/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react/prop-types */

import PokemonCard from "../hooks/PokemonCard";

const PokemonList = ({ pokemons }) => {
	return (
		<div className='grid gap-2 grid-cols-3'>
			{pokemons?.length > 0
				? pokemons.map((p) => {
						return <PokemonCard key={p.name} pokemon={p} />;
				  })
				: null}
		</div>
	);
};

export default PokemonList;
