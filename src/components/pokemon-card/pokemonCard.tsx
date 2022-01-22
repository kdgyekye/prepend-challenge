import React, { Fragment, FC, useState, useEffect } from "react";
import { PokemonPropTypes } from './types'
import ViewPokemon from "../view/viewPokemon";
import axios from "axios";

const PokemonCard: FC<PokemonPropTypes> = ( {name,key, summary,url}) => {
	//API call to get pokemon details
	const getPokemonDetails = async ( id: number) => {
		const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
		return response.data;
	};


	const getID = (url:string) => {
		return url.charAt(url.length - 2);
	};

	const [open, setOpen] = useState(false);
	const [pokemon, setPokemon] = useState<any>({});

	const pokemonId = parseInt(getID(url));

	const species = pokemon?.species?.name;
	const type = pokemon?.types?.map((type:any) => type.type.name);
	const image = pokemon?.sprites?.front_default
	const weight = pokemon?.weight
	const stats = pokemon?.stats?.slice(0,3).map((stat:any) => {
		return {
			name: stat.stat.name,
			value: stat.base_stat
		}
	})
	const moves = pokemon?.moves?.slice(0,5).map((move:any) => move.move.name)

	console.log(type)
	console.log(stats)
	console.log(moves)
	return (
		<Fragment>
			<div
				key={key}
				className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200 cursor-pointer w-52"
				onClick={() => {
					console.log(`Clicked on ${name}`)
					getPokemonDetails(pokemonId).then(res => {
						setPokemon(res);
					});
					setOpen(true);
				}}
			>
				<div className="flex-1 flex flex-col p-8">
					<img className="w-32 h-32 flex-shrink-0 mx-auto rounded-full" src={image} alt="Pokemon" />
					<h3 className="mt-6 text-gray-900 text-sm font-medium">{name}</h3>
					<dl className="mt-1 flex-grow flex flex-col justify-between">
						<dt className="sr-only">Summary</dt>
						<dd className="text-gray-500 text-sm">{summary}</dd>
						<dt className="sr-only">Type</dt>
						<dd className="mt-3">
						<span className="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">
						  {type}
						</span>
						</dd>
					</dl>
				</div>
			</div>
			<ViewPokemon
				species={species}
				type={type}
				weight={weight}
				stats={stats}
				moves={moves}
				image={image}
				show={open}
				setShow={setOpen}
			/>
		</Fragment>
	)
}

export default PokemonCard