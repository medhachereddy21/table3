// import React, { Component } from "react";
// import { Table } from "semantic-ui-react";
// import "./App.js";

import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';

// function highlightMatch(item, v) {
//   let f = v;
//   if (v) {
//     f = new RegExp(v, "gi");
//   }
//   return {
//     __html: item.title.replace(
//       f,
//       f ? `<span class="highlight">${"$&"}</span>` : v
//     )
//   };
// }

class TitleTable extends Component {
  render() {
    const data = this.props.data;
    // console.log(`data in TitleTable: ${data}`);
    // console.log(`data in TitleTable instanceof Array? ${data instanceof Array}`);
    // console.log(`data.length = ${this.props.data.length}`);

    const titleList = data.map(item => (
      <Table.Row key={item.id}>
        <Table.Cell>
          <p>{item.postId}</p>
        </Table.Cell>
        <Table.Cell>
          <p>{item.id}</p>
        </Table.Cell>
        <Table.Cell>
          <p>{item.name}</p>
        </Table.Cell>
        <Table.Cell>
          <p>{item.email}</p>
        </Table.Cell>
        <Table.Cell>
          <p>{item.body}</p>
        </Table.Cell>
      </Table.Row>
    ));
    // console.log(`titleList: ${titleList}`);
    // console.log(`titleList instanceof Array? ${titleList instanceof Array}`);
    // console.log(`titleList.length = ${titleList.length}`);

    return (
      <Table celled collapsing>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>post ID</Table.HeaderCell>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Body</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>{titleList}</Table.Body>
      </Table>
    );
  }
}

export default TitleTable;
