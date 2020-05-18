import React from 'react';
import './App.css';
import pokemons from "./data";
import Pokedex from './Pokedex';

function App() {
  return (
    <div className="App">
      {pokemons.map(pokemon => <Pokedex pokemon={pokemon} />)}
    </div>
  );
}

export default App;
