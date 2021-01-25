import React, { Component } from 'react'

class IdealWeight extends Component {

  render() {
	// modyfikacja
	let height = this.props.data.height; // ściągnięcie wartości height
	let weightformula = Math.round((height - 100)*0.9); // wyliczanie wagi idealnej

	// przygotowanie wyświetlenia wartości
    return (
      <div className="output">
		<h3>{weightformula}kg</h3>
      </div>
    );
  }
}

export default IdealWeight
