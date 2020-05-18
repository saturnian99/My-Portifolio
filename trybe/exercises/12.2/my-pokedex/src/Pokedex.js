import React from 'react';

class Pokedex extends React.Component {
  render() {
    const { name, type, averageWeight: { value, measurementUnit }, image } = this.props.pokemon;
    return (
      <div className="Pokemon">
        <p>
          {name}
          <br/>
          {type}
          <br/>
          Average weight: {value + measurementUnit}
        </p>
        <img src={image} alt="Animated GIF of a pokemon." />
      </div>
    );
  };
};

export default Pokedex;