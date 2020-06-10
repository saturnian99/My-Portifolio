import React from 'react';
import Pokemon from './Pokemon';
import NextButton from './NextButton';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    }
  }

  changePokemon = () => {
    const index = this.state.index;
    const pokemons = this.props.pokemons;
    if (index !== (pokemons.length - 1)) {
      this.setState({ index: index + 1, });      
    } else {
      this.setState({ index: 0, })
    }
  }

  render() {
    return (
      <section className="pokemon-viewer">
        <Pokemon pokemon={this.props.pokemons[this.state.index]} />
        <NextButton clickHandler={this.changePokemon} />
      </section>
    );
  };
};

export default Pokedex;