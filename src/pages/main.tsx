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
	const [searchTerm, setSearchTerm] = useState('');
	const [startSearch, setStartSearch] = useState(false);
	//API Calls
	const getAllPokemon = async () => {
		if (startSearch) {
			//perform search by name
		}
		else {
			const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=16&offset='+skip);
			return response.data;
		}
	};

	const getPokemonImage = async (id: number) => {
		const response = await axios.get(`https://pokeapi.co/api/v2/pokemon-form/${id}`);
		return response.data.sprites.front_default;
	};


	useEffect(() => {
		if (searchTerm.length > 3) {
			setStartSearch( true )
		}
	},[searchTerm])
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
				<div className="flex justify-start mt-1 relative rounded-none shadow-sm">
					<div>
						<input
							type={"search"}
							id="search_name"
							className="pl-1 form-input rounded-none border-gray-300 font-light block focus:ring-red-400 focus:border-red-400 w-full pr-10 sm:text-sm sm:leading-5"
							placeholder="Search"
							value={searchTerm}
							onChange={(e) => {
								setSearchTerm(e.target.value);
							}}
						/>
						<div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
							<svg width={20} height={20} viewBox="0 0 512 512">
								<path
									d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
									fill="none"
									stroke="#b4b4b4"
									strokeMiterlimit={10}
									strokeWidth="32px"
								/>
								<path
									fill="none"
									stroke="#b4b4b4"
									strokeLinecap="round"
									strokeMiterlimit={10}
									strokeWidth="32px"
									d="M338.29 338.29L448 448"
								/>
							</svg>
						</div>
					</div>
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