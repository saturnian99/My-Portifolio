import React from 'react';

class NextButton extends React.Component {
  render() {
    return (
      <button onClick={this.props.clickHandler}>Próximo pokémon</button>
    );
  };
};

export default NextButton;
