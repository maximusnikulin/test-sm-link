import React, { Component } from 'react';
import Table from './Table.jsx';
import AddRow from './AddRow.jsx';
import Filter from './Filter.jsx';
import PERSONS from './persons.json';
import { prepareData } from './utils';

export const DRINKS = ["WINE", "BEER", "JUICE"]


class App extends Component {
  state = {
    
  }
  getInitialData = () => {
    if ('sm-link-test' in window.localStorage) {
      return JSON.parse(window.localStorage.getItem('sm-link-test'))
    } else {
      return {
        filter:0,
        originalPersons:prepareData(PERSONS)
      }
    }
  }
  setData = () => {
    window.localStorage.setItem('sm-link-test', JSON.stringify(this.state))
  }
  
  componentWillMount() {
    this.setState(this.getInitialData())
  }
  componentDidUpdate() {
    this.setData();
  } 
    
  getFilteredData = () => {
    let {originalPersons} = this.state;
    if (this.state.filter == 0) {
        return Object.keys(originalPersons).map((key) => originalPersons[key]);
    } else { 
        return Object.keys(originalPersons)
                      .filter((key) => originalPersons[key].drink == this.state.filter)
                      .map((key) => originalPersons[key]);           
    }
  }
  changeFilter = (val) => this.setState({filter: val })

  removeRow = (id) => {
    let {originalPersons} = this.state;
    var obj = { ...originalPersons };
    delete obj[id];
    this.setState({
      originalPersons:obj
    })    
  }
  
  changeRow = (id, data) => {
    this.setState({
      originalPersons: {
        ...this.state.originalPersons,
        [id]: data
      }
    })
  }
  addRow = (id, data, cb) => {
    this.setState({
      originalPersons: {
        ...this.state.originalPersons,
        [id]: data
      }
    }, cb)
  }
  getCountPersons = () => {
    let count = 0, 
        key,
        {originalPersons} = this.state;

    for (key in originalPersons) {
        if (originalPersons[key].coupled) {
          count += 2
        } else {
          count += 1
        }
    }
    return count;
  }
  render() {    
    return (
      <div className = "wrapper">
        <div className = 'wrapper__filter'>
            <Filter changeFilter = {this.changeFilter} current = {this.state.filter} />
        </div>
        <div className = 'wrapper__table'>
            <Table persons = {this.getFilteredData()} 
                   changeRow = {this.changeRow} 
                   removeRow = {this.removeRow}
                   addRow = {this.addRow}
                  />                   
         </div>  
         <div className = 'wrapper__counter'>
            Всего записей - {this.getCountPersons()}
         </div> 
      </div>
    );
  }
}

export default App;
