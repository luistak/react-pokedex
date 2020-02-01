import React from 'react';

const PokemonList = ({ pokemons }) => (
  <div>
    <h1> Lista de pokemons</h1>
    { pokemons.map(pokemon => <div key={pokemon.name}> {pokemon.name }</div>) }
  </div>
)

export default PokemonList;