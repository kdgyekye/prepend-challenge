import React, {Fragment, useState, useEffect} from 'react';
import axios from 'axios';
import pokemonCard from "../components/pokemon-card/pokemonCard";
import PokemonCard from "../components/pokemon-card/pokemonCard";
import ViewPokemon from "../components/view/viewPokemon";
import usePagination from "../hooks/usePagination";
import Pagination from "../components/pagination";

const MainComponent = () => {
	const {skip,setSkip} = usePagination();
	const [total, setTotal] = useState(0);
	//API Calls
	const getAllPokemon = async () => {
		const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=16&offset='+skip);
		return response.data;
	};

	const getPokemonImage = async (id: number) => {
		const response = await axios.get(`https://pokeapi.co/api/v2/pokemon-form/${id}`);
		return response.data.sprites.front_default;
	};


	const [pokemons, setPokemons] = useState<any[]>([]);
	useEffect(() => {
		getAllPokemon().then(( data: any) => {
			setPokemons(data?.results);
			setTotal(data?.count)
		});
		console.log(pokemons);
	}, [total,skip]);

	return (
		<Fragment>
			<div className="flex flex-col items-center space-y-10 bg-gray-100">
				<div className="flex justify-center pt-3">
					<h1 className="text-4xl font-bold text-center">Pokedex</h1>
				</div>
				<div>
					<ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
						{pokemons.map((pokemon) => (
							<PokemonCard
								key={pokemons.indexOf(pokemon)}
								name={pokemon?.name} image={'somewhere'}
								summary={'This is a pokemon'}
								type={'cute'}
								url={pokemon?.url}
							/>
						))}
					</ul>
					<Pagination
						total={total}
						skip={skip}
						setSkip={setSkip}
						limit={16}
					/>
				</div>
			</div>

		</Fragment>
	)
}

export default MainComponent;