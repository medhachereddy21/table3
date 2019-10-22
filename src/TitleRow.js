import React, { Component } from "react";
import { Table, TransitionablePortal } from "semantic-ui-react";
import TitleTable from "./TitleTable";

class TitleRow extends Component {
  render() {
    const item = this.props.item;

    return (
      <Table.Row>
        <Table.Cell>{item.userId}</Table.Cell>
        <Table.Cell>{item.id}</Table.Cell>
        <Table.Cell>{item.title}</Table.Cell>
        <Table.Cell>{item.completed}</Table.Cell>

        {/* <Table.Cell>{item.body}</Table.Cell> */}
      </Table.Row>
    );
  }
}

export default TitleRow;
