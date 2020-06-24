import React from 'react';
import Pokemon from './Pokemon';
import Button from './Button';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      pokemons: this.props.pokemons,
      type: '',
    }
  }

  changePokemon = () => {
    const index = this.state.index;
    const pokemonLength = this.state.pokemon.length;
    const lastIndex = pokemonLength - 1;

    /* if (pokemonLength === 1)  */

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
    } /* else {
      // if it's still in the same type, continue cycling
      this.changeIndex(pokemons); 
    } */

    this.setState({ pokemons: pokemons, type, });
  }

  createTypeButtons = (type) => {
    return (
      <Button key={type} label={type} clickHandler={() => this.filterByType(type)} />
    );
  }

  fetchTypes = () => {
    let types = [];

    this.props.pokemons.forEach(({ type }) => {
      if (types.includes(type)) return null;
      types.push(type);
    })

    return types;
  }

  render() {
    return (
      <section className="pokemon-viewer">
        <Pokemon pokemon={this.state.pokemons[this.state.index]} />
        <Button label="All" clickHandler={() => this.filterByType("All")} />
        {this.fetchTypes().map(type => this.createTypeButtons(type))}
        <Button label="Next Pokemon" clickHandler={this.changePokemon} />
      </section>
    );
  };
};

export default Pokedex;