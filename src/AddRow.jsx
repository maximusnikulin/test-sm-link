import React, { Component } from 'react';
import { DRINKS } from './App.js';
import {v4} from 'node-uuid';

class AddRow extends Component {
    resetFields = () => {
        this.refs.name.value = '';
        this.refs.drink.value = 1;
        this.refs.coupled.checked = false;
    }
    handleAdd = () => {
        var name = this.refs.name.value,
            drink = this.refs.drink.value,
            coupled = this.refs.coupled.checked, 
            id = v4();
        if (name) {
            this.props.addRow(id, { id, name, drink, coupled }, this.resetFields);
        }    
        
    }
    render(){
        return(
            <tr>
                <td><input type="text" ref = "name"/></td>
                <td>
                    <select type="select" ref = "drink">
                        {
                            DRINKS.map((o, i) => <option key = {i} value = {i + 1}>{o}</option>)
                        }
                    </select>
                </td>
                <td><input type="checkbox" ref = "coupled"/></td>
                <td><button onClick = {this.handleAdd}>Добавить</button></td>                
            </tr>) 
    }
    
}

export default AddRow;