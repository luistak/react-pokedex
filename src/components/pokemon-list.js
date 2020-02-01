import React from 'react';

const PokemonList = ({ pokemons }) => (
  <div>
    <h1> Lista de pokemons</h1>
    { pokemons.length > 0 ? pokemons.map(pokemon => <div key={pokemon.name}> {pokemon.name }</div>) : (
      <div> Oops não há nenhum pokemon com esse nome </div>
    )}
  </div>
)

export default PokemonList;