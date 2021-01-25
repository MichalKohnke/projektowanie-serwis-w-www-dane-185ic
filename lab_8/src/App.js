import React, { Component } from 'react'
import './App.css'
import Range from './Components/Range';
import Output from './Components/Output';
import IdealWeight from './Components/IdealWeight'; //zaimportowanie komponentów

class App extends Component {
  constructor(props){
    super(props); 
    this.state = {
      height: 175,
      weight: 73, 
      bmi: 22.49, 
      bmiClass: 'Waga prawidłowa'
    }
  } //konstruktor

  heightChange = (height) => {
    this.setState({ height: height}, this.setBmi ); 
  } //zmiana wzrostu

  weightChange = (weight) => {
    this.setState({ weight: weight }, this.setBmi ); 
  } //zmiana wagi

  setBmi = () => {
    let bmi = ((this.state.weight / this.state.height / this.state.height) * 10000).toFixed(2); 
    this.setState({ bmi: bmi, bmiClass: this.getBmiClass(bmi) }); 
  } //obliczanie BMI

  getBmiClass = (bmi) => {
    if(bmi < 18.5) return 'Niedowaga'; 
    if(bmi >= 18.5 && bmi <= 24.9) return 'Waga prawidłowa'; 
    if(bmi >= 25 && bmi <= 29.9) return 'Nadwaga'; 
    if(bmi >= 30) return 'Otyłość';  
  } //ustalanie określeń słownych na podstawie wyliczonego BMI, zmienione na polskie

  render() {
    return (
      <div className="App">
        <h1>Kalkulator BMI</h1>
        <form>
          <div>
            <label>Wzrost</label>
            <Range 
              value={this.state.height} 
              onChange={this.heightChange} />
          </div>
          <div>
            <label>Waga</label>
            <Range 
              value={this.state.weight}
              onChange={this.weightChange} />
          </div>
        </form>
        <Output data={this.state}/>
		<form>
			<div>
				<h1>Waga idealna</h1>
				<label>Wzór Broca, wyliczany na podstawie podanego wyżej wzrostu</label>
				<IdealWeight data={this.state}/>
			</div>
		</form>
      </div>
    );
  } // wyświetlenie danych
}

export default App
