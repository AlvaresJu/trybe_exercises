import React, { Component } from "react";

class ParaFixarJSX extends Component {
  render() {
    const textJSX = 'Hello, JSX!';
    return (
      <section>
        <h1>Para Fixar - JSX</h1>
        <h2>{textJSX}</h2>
      </section>
    );
  }
}

export default ParaFixarJSX;
