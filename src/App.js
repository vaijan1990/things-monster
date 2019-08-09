import React , {Component} from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';
class App extends Component {
  constructor() {
    super();

    this.state = {
      things: [],
      searchField: '',
      title : ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
componentDidMount() {
  // calls when react renders first time
  //   <CardList things={things} />  can be used to filter
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json(

  ))
  .then(users =>
    this.setState({things: users}));
}
handleChange = event => {
  this.setState({
  searchField: event.target.value, title: event.target.value})
}


  render() {
    const { things, searchField, title  } = this.state;
    const filterThings = things.filter(thing =>
    thing.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        <h1>{title} </h1>

        <SearchBox handleChange={this.handleChange}/>

        <CardList things={filterThings} />


      </div>
    );
  }
}

export default App;
