import './App.css';
import { Component } from 'react';
import CardList from './components/card-list/card-list';
import SearchBox from './components/search-box/search-box';

class App extends Component {

  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(
        () => {
          return ({ monsters: users })
        },
        () => {
          // console.log('2', this.state)
        }
      ))
  };

  onSearchChange = (event) => {
    const searchString = event.target.value.toLocaleLowerCase();
    console.log(this.state)
    this.setState(
      () => {
        return { searchField: searchString }
      },
      () => {
      }
    )
  };

  render() {

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((user) => {
      return user.name.toLowerCase().includes(searchField)
    });

    return (
      <div className="App">
        <h1 className='app-title'>Kittens</h1>
        <SearchBox
          className='search-box'
          onChangeHandler={onSearchChange}
          placeholder='search kittens' />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  };

}

export default App;
