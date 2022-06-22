import React from 'react';

class Image extends React.Component {
  render() {
    const {source, alternativeText} = this.props;
    return <img src={source} alt={alternativeText} width='500' />;
  }
}

export default Image;