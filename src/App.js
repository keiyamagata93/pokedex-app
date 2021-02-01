import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Form from './Form';
import PokeDetails from './PokeDetails';

const App = () => {
  const [pokemon, setPokemon] = useState('pikachu');
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonType, setPokemonType] = useState('');

  const getPokemon = async () => {
    const toArray = [];
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const res = await axios.get(url);
      toArray.push(res.data);
      setPokemonType(res.data.types[0].type.name);
      setPokemonData(toArray);
    } catch (e) {
      console.log(e);
    }
  };
  console.log(pokemonData);

  return (
    <div className="app">
      <h1>Pokedex</h1>
      <p className="uitleg">Search your pokemon by name</p>
      <Form pokemon={pokemon} setPokemon={setPokemon} getPokemon={getPokemon} />
      <PokeDetails pokemonData={pokemonData} pokemonType={pokemonType} />
    </div>
  );
};

export default App;
