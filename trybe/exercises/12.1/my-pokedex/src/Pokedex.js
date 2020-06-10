import React from 'react';
import Pokemon from './Pokemon';
import NextButton from './NextButton';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      pokemons: this.props.pokemons,
      type: '',
    }
  }

  changeIndex = (pokemons) => {
    const index = this.state.index;
    const lastIndex = pokemons.length - 1;
    if (index < lastIndex) {
      this.setState({ index: index + 1, });
    } else {
      this.setState({ index: 0, })
    }
  }

  filterByType = (type) => {
    let pokemons = this.props.pokemons;

    if (type !== "All") {
      pokemons = pokemons.filter(
        pokemon => pokemon.type === type
      );
    }
    
    if (type !== this.state.type) {
      // change to first pokemon of type when changing types (buttons)
      this.setState(() => ({ index: 0, }))
    } else {
      // if it's still in the same type, continue cycling
      this.changeIndex(pokemons); 
    }

    this.setState({ pokemons: pokemons, type, });
 
  }

  render() {
    return (
      <section className="pokemon-viewer">
        <Pokemon pokemon={this.state.pokemons[this.state.index]} />
        <NextButton clickHandler={() => this.filterByType("All")} />
        <NextButton clickHandler={() => this.filterByType("Fire")} />
        <NextButton clickHandler={() => this.filterByType("Psychic")} />
      </section>
    );
  };
};

export default Pokedex;