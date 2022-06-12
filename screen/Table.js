import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

export default class ExampleOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Push-Ups', 'Sit-Ups', '2.4km/min', 'Pass/Fail'],
      tableData: [
        ['1', '2', '20', 'Fail'],
        ['2', '3', '25', 'Fail'],
        ['1', '2', '16', 'Fail'],
        ['30', '40', '13', 'Pass']
      ]
    }
  }

  render() {
    const state = this.state;
    return (
      <View style={styles.table}>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          <Rows data={state.tableData} textStyle={styles.text}/>
        </Table>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  table: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 }
});