import React, { Component } from "react";
import "./App.css";
import { Header } from "semantic-ui-react";
import Search from "./Search";
import TitleTable from "./TitleTable";
import CompletedTable from "./CompletedTable";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      data: [],
      filteredData: [],
      sortedData: []
    };

    this.updateSearchTerm = this.updateSearchTerm.bind(this);
    this.filterSearchTerm = this.filterSearchTerm.bind(this);
    // this.sortedData = this.sortedData.bind(this);
  }

  componentDidMount = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => response.json())
      .then(responseJSON => {
        responseJSON.map(item => console.log(item));
        this.setState({ data: responseJSON });
      })
      .catch(error => console.error);
  };

  //update the search term

  updateSearchTerm = (event, { value }) => {
    this.setState({ searchTerm: { value } });
    console.log(`updated searchTerm: ${value}`);
  };

  filterSearchTerm = event => {
    // filter for searchTerm
    const { searchTerm, data } = this.state;
    event.preventDefault();
    const filteredData = data.filter(item =>
      item.title.includes(searchTerm.value)
    );
    filteredData.forEach(item =>
      console.log(`filteredData item ID ${item.id} : ${item.title}`)
    );
    this.setState({ filteredData: filteredData });

    // const sortData = [].concat(this.state.filteredData)
    // .sort((a, b) => a.titleA > b.titleB)
    // .map((title, i) =>
    //     <div key={i}> {title.id} {title.userId}</div>
    // );
  };

  sortData = event => {
    const { data } = this.state;
    event.preventDefault();

    const sortedData = data.sort(function(a, b) {
      const titleA = a.title.toUpperCase();
      const titleB = b.title.toUpperCase();

      if (titleA < titleB) {
        return -1;
      }
      if (titleB < titleA) {
        return 1;
      }
      return 0;
    });
    console.log(sortedData);
    this.setState({ sortedData });
  };

  render() {
    const { searchTerm, data, sortedData } = this.state;
    const displayData = searchTerm ? this.state.filteredData : data;

    return (
      <container fluid text className="App">
        <Header>
          <h1> Table using React to Search </h1>
        </Header>
        {/* search/input component,  get and filter data based on input  */}
        <Search
          updatedSearchTerm={this.updatedSearchTerm}
          filterSearchTerm={this.filterSearchTerm}
          searchTerm={this.searchTerm}
        />
        {/* table component, render based on results of input filtering */}
        <TitleTable
          data={displayData}
          searchTerm={searchTerm}
          // dateFormat={"MM/dd/YYYY"}
        />
        <sort sortData={this.sortedData} />
        />
      </container>
    );
  }
}

export default App;
