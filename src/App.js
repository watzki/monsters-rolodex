import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component.jsx';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users}))
  }

  render() {
    console.log('[App] Rending ....');
    const {monsters, searchField} = this.state;

    const filteredMonsters = monsters.filter(
        monster => String(monster.name).toUpperCase().includes(searchField.toUpperCase()))

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder='search monster' handleChange={this.handleChange}/>
      
        <CardList monsters={filteredMonsters}>  
        </CardList>
      </div>
    );  
  }
}

export default App;
