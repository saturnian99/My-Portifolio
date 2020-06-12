import React from 'react';

class NextButton extends React.Component {
  render() {
    return (
      <button onClick={this.props.clickHandler}>{this.props.label}</button>
    );
  };
};

export default NextButton;
