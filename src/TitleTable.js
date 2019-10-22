import React, { Component } from "react";
import { Table } from "semantic-ui-react";
import "./App.js";

function highlightMatch(item, v) {
  let f = v;
  if (v) {
    f = new RegExp(v, "gi");
  }
  return {
    __html: item.title.replace(
      f,
      f ? `<span class="highlight">${"$&"}</span>` : v
    )
  };
}

class TitleTable extends Component {
  render() {
    const { data, searchTerm } = this.props;
    console.log(searchTerm);

    const titleList = data.map(item => (
      <Table.Row key={item.id}>
        <Table.Cell>
          <p> {item.userId} </p>
        </Table.Cell>
        <Table.Cell>
          <p>{item.id}</p>
        </Table.Cell>
        <Table.Cell>
          <p dangerouslySetInnerHTML={highlightMatch(item, searchTerm.value)} />
          {/* <p>{item.title}</p> */}
        </Table.Cell>
        <Table.Cell>
          <p>{`${item.completed}`}</p>

          {/* <p dangerouslySetInnerHTML={highlightMatch(item, searchTerm.value)} /> */}
        </Table.Cell>
        {/* <Table.Cell>
          <p dangerouslySetInnerHTML={highlightMatch(item, searchTerm.value)} />
        </Table.Cell> */}
      </Table.Row>
    ));

    return (
      <Table class="ui sortable celled table">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>User ID</Table.HeaderCell>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>Title</Table.HeaderCell>
            <Table.HeaderCell>Completed</Table.HeaderCell>
            {/* <Table.HeaderCell>Comment</Table.HeaderCell> */}
          </Table.Row>
        </Table.Header>

        <Table.Body>{titleList}</Table.Body>
      </Table>
    );
  }
}

export default TitleTable;
