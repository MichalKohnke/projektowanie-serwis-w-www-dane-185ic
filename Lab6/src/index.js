import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';


class Parent extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
		date: new Date(),
		name: "Srubki",
		quantity: 100,
		price: 20
		};
  }
componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }
  
    render() {
        return (
            <div>
				<h2>Aktualny czas: {this.state.date.toLocaleTimeString()}.</h2>
				<h3 className="propsik">State:</h3>
				<br></br><br></br><br></br>
                <Child name={this.state} />
				<StringList strings={strings} />
            </div>
        );
    }
}

const Child = (props) => {
	return (
	<ul className="propsik">
        <li>{props.name.name}</li>
		<li>{props.name.quantity}</li>
		<li>{props.name.price}</li>
	</ul>
        );
}
function ListItem(props) {
  return <li>{props.value}</li>;
}
function StringList(props) {
  const strings = props.strings;
  const listItems = strings.map((string) =>
    <ListItem key={string.toString()} value={string} />
  );
  return (
    <ol className="olek">
      {listItems}
    </ol>
  );
}
const strings = ["bmw", "ford", "honda", "opel", "kia"];
export default Parent;
ReactDOM.render(
  <React.StrictMode>
	<Parent />

  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
