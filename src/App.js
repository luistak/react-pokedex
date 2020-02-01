import React, { useEffect, useState } from 'react';

import PokemonList from './components/pokemon-list';

const fetchPokemon = (idOrName) =>
  fetch(`https://pokeapi.co/api/v2/pokemon/${idOrName}`).then(response => response.json())

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchInitialPokemons = async () => {
      const list = new Array(10).fill();

      const pokemonsPromises = list.map((_item, index) => fetchPokemon(index + 1));

      const pokemons = await Promise.all(pokemonsPromises);

      setPokemons(pokemons)
    }

    fetchInitialPokemons();
  }, [])

  return (
    <main className="app">
      <header>
        <h1> Pokedex</h1>
      </header>
      <section>
        <PokemonList pokemons={pokemons}/> 
      </section>
      <footer> Footer </footer>
    </main>
  );
}

export default App;