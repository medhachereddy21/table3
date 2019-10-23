import React, { Component } from 'react';
import './App.css';
import { Header } from 'semantic-ui-react';
import Search from './Search';
import TitleTable from './TitleTable';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      data: [],
      filteredData: []
    };

    this.updateSearchTerm = this.updateSearchTerm.bind(this);
    this.filterSearchTerm = this.filterSearchTerm.bind(this);
  }

  componentDidMount = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
      .then(responseJSON => {
        responseJSON.map(item => console.log(item));
        this.setState({ data: responseJSON });
        // console.log(`new data: ${this.state.data}`);
      })
      .catch(error => console.error);
  };

  updateSearchTerm = (event, { value }) => {
    this.setState({ searchTerm: { value } });
    console.log(`updated searchTerm: ${value}`);
  };

  filterSearchTerm = event => {
    // filter for searchTerm
    const { searchTerm, data } = this.state;
    // console.log(`searchTerm: ${searchTerm.value}`);

    event.preventDefault();
    const filteredData = data.filter(item =>
      Object.values(item).some(val => val.toString().includes(searchTerm.value))
    );

    this.setState({ filteredData: filteredData });

    console.log('searchTerm val --' + searchTerm.value);
  };

  // TODO: reset search field after submit (reset button?)

  render() {
    const { searchTerm, data } = this.state;
    const displayData = searchTerm ? this.state.filteredData : data; // TODO: Need to handle case where the filter returns no data, and display a message instead of the entire dataset
    // console.log(`displayData instanceof Array? ${displayData instanceof Array}`);
    // console.log(`displayData.length = ${displayData.length}`);

    return (
      <container fluid text className="App">
        <Header as="h1">Title Sort</Header>
        {/* search/input component - fetch and filter data based on input string */}
        <Search
          updateSearchTerm={this.updateSearchTerm}
          filterSearchTerm={this.filterSearchTerm}
          searchTerm={this.searchTerm}
        />
        {/* table component - conditionally render based on results of input filtering */}
        <TitleTable data={displayData} />
      </container>
    );
  }
}

export default App;
