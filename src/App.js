import React, { useEffect, useState } from 'react';

import './App.scss';

import PokemonList from './components/pokemon-list';

const fetchPokemon = (idOrName) =>
  fetch(`https://pokeapi.co/api/v2/pokemon/${idOrName}`).then(response => response.json())

function App() {
  const [name, setName] = useState('');
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState(pokemons);

  useEffect(() => {
    const fetchInitialPokemons = async () => {
      const list = new Array(150).fill();

      const pokemonsPromises = list.map((_item, index) => fetchPokemon(index + 1));

      const pokemonsData = await Promise.all(pokemonsPromises);

      setPokemons(pokemonsData)
    }

    fetchInitialPokemons();
  }, [])

  useEffect(() => {
    if (!name.length) {
      setFilteredPokemons(pokemons)
      return;
    }

    setFilteredPokemons(pokemons.filter((pokemon) => pokemon.name.includes(name)))
  }, [pokemons, name]);

  const handleInputChange = (event) => setName(event.target.value);

  const isLoading = !pokemons.length && !name.length;

  return (
    <main className="app">
      <section className="app-container">
        <header className="header">
          <h1 className="header-title"> Pokedex</h1>
          <input
            className="header-filter"
            type="text"
            name="pokemon-name"
            onChange={handleInputChange}
            placeholder="Pesquise um pokemon"
          />
        </header>
        <section className="app-content">
          { isLoading ? (
            <h1> Carregando </h1>
          ) : <PokemonList pokemons={filteredPokemons}/>}
        </section>
        <footer> <a href="https://twitter.com/_luistak" target="_blank" rel="noopener noreferrer">@_luistak</a> </footer>
      </section>
    </main>
  );
}

export default App;