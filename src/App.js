import logo from './logo.svg';
import './App.css';

function App() {
  const cinemas = [
    { nayok: "Joshim", nayika: "sabana" },
    { nayok: "rubel", nayika: "sabnur" },
  ];
  return (
    <div className="App">
      <Person name="Sakib al hasan" profession=" cricketer" age="32"></Person>
      
      {/* another way to make datas dynamic  */}
      {
        cinemas.map(cinema=> <Cinema nayok={cinema.nayok} nayika={cinema.nayika}></Cinema>)
      }
    </div>
  );
}

function Person(props) {
  const person = {
    backgroundColor: 'red',
    border : '3 px solid yellow',
    margin : '20px'
  }
  return (
    <div style={person}>
      <h1> name:{props.name} age:{props.age}</h1>
      <h4>Profession:{props.profession}</h4>
    </div>
  );
}

function Cinema(props) {
  return (
    <div className="person">
      <h1>Nayok:{props.nayok}</h1>
      <h4>Nayika:{props.nayika}</h4>
    </div>
  )
}
export default App;
