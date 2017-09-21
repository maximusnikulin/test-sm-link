import React, { Component } from 'react';
import AddRow from './AddRow';
import TableRow from './TableRow';


let Table = ({
    persons,
    changeRow, 
    removeRow,
    addRow
}) => {    
    let getRows = () => {                
        return persons.map((p, i) => <TableRow  key = {p.id} 
                                                {...p} 
                                                id = {p.id} 
                                                changeRow = {changeRow} 
                                                removeRow = {removeRow}/>)  
    }
    return (
        <table>
            <thead>
                <tr>
                    <th>Имя</th>
                    <th>Напиток</th>
                    <th>Пара</th>
                    <th>Возраст</th>
                    <th colSpan = {2}/>
                </tr>
            </thead>                
            <tbody>
                {getRows()}
            </tbody> 
            <tfoot>
                <AddRow addRow = {addRow}/>                
            </tfoot>    
        </table>
    );
}

export default Table;