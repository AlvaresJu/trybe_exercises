import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      clickTimes: 0,
    };
  }

  handleClick() {
    this.setState((prevState) => ({
      clickTimes: prevState.clickTimes + 1,
    }), () => {
      const { clickTimes } = this.state;
      if (this.changeBtnColor(clickTimes) === 'btn-green') console.log('green');
      else console.log('grey');
    });
  }

  changeBtnColor(number) {
    if (number % 2 === 0) return 'btn-green';
    return '';
  }

  render() {
    const { clickTimes } = this.state;
    const { btnNumber } = this.props;
    return (
      <button
        type="button"
        className={ this.changeBtnColor(clickTimes) }
        onClick={ this.handleClick }
      >
        { `Botão ${btnNumber} | Cliques = ${clickTimes}` }
      </button>
    );
  }
}

Button.propTypes = {
  btnNumber: PropTypes.number.isRequired,
};

export default Button;
