import React from "react";

class Pokemon extends React.Component {
  render() {
    const {name, type, averageWeight, image} = this.props.pokemonData;
    const typeSymble = (pokemonType) => {
      switch (pokemonType) {
        case 'Electric':
          return '⚡';
        case 'Fire':
          return '🔥';
        case 'Bug':
          return '🪲';
        case 'Poison':
          return '☠️';
        case 'Psychic':
          return '👁️';
        case 'Normal':
          return '💿';
        case 'Dragon':
          return '🐉';
        default:
          return '';
      }
    }

    return (
      <div className={ `card ${type}` }>
        <div className="pokemon-title">
          <h2>{ name }</h2>
          <span>{ typeSymble(type) }</span>
        </div>
        <img src={ image } alt={ `Pokemon ${name}` }></img>
        <div className="pokemon-info">
          <p>{ `Type: ${type}` }</p>
          <p>{ `Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}` }</p>
        </div>
      </div>
    );
  }
}

export default Pokemon;
