import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render() {
    return (
      <section className="pokemon-list">
        {this.props.pokemons.map(pokemon =>
          <Pokemon key={pokemon.name} pokemon={pokemon} />
        )}
      </section>
    );
  };
};

export default Pokedex;