import axios from 'axios';

export const getAllPokemon = async () => {
  const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=16');
  return response.data.results;
};

export const getPokemonDetails = async ( id: number) => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  return response.data;
};

const getPokemonImage = async (id: number) => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon-form/${id}`);
  return response.data.sprites.front_default;
};