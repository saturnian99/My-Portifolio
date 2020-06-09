import React from 'react';
import './App.css';
import pokemons from "./data";
import Pokedex from './Pokedex';

function App() {
  return (
    <section className="pokemon-list">
      <Pokedex pokemons={pokemons} />
    </section>
  );
}

export default App;
