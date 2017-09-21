import React, { Component } from 'react';
import {DRINKS} from './App.js';

class TableRow extends Component {
    state = {
        changing:false, 
        name:this.props.name,
        drink:this.props.drink,
        coupled:this.props.coupled,
        age: this.props.age
    }
    handleChange = () => {               
        if (this.state.changing) {
            var name = this.state.name,
                drink = this.state.drink,
                coupled = this.state.coupled,
                id = this.props.id,
                age = this.state.age; 
            if (name) {
                this.setState({
                    changing:false
                }, () => this.props.changeRow(id, { id, name, drink, age, coupled })) 
            }                
        } else {            
            this.setState({
                changing:true
            })
        }  
    }
    handleRemove = () => {
        this.props.removeRow(this.props.id);
    }
    changeField = (e,name) => {           
        this.setState({
            [name]: name === "coupled" ? e.target.checked : e.target.value 
        })
    }
    render() {
        let { name, drink, coupled, id } = this.props;   
        let { changing } = this.state;        
        return (
            <tr >
                <td><input type="text" value = {this.state.name} onChange = {(e) => this.changeField(e, 'name')} disabled = {!this.state.changing}/></td>
                <td>
                    <select type="select" value = {this.state.drink}  onChange = {(e) => this.changeField(e, 'drink')} disabled = {!this.state.changing}>
                        {
                            DRINKS.map((o, i) => <option key = {i} value = {i + 1}>{o}</option>)
                        }
                    </select>
                </td>
                <td><input type="checkbox" checked = {this.state.coupled} onChange = {(e) => this.changeField(e, 'coupled')}  disabled = {!this.state.changing}/></td>
                <td><input type="number" value = {this.state.age} onChange = {(e) => this.changeField(e, 'age')}  disabled = {!this.state.changing} /></td>
                <td><button onClick = {this.handleChange}>{changing ? 'Применить' : 'Изменить'}</button></td>
                <td><button onClick = {this.handleRemove}>Удалить</button></td>
            </tr> 
        );
    }
}
export default TableRow;