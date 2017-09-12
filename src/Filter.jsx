import React from 'react';
import { DRINKS } from './App.js';

const Filter = ({
    changeFilter,
    current
}) => {
    let handleChangeFilter = (e) => changeFilter(+e.target.value)

    return (
        <select onChange = {handleChangeFilter} value = {current}>
            <option value = "0">Любой</option>
                {
                    DRINKS.map((o, i) => <option key = {i} value = {i + 1}>{o}</option>)
                }
        </select>
    )
}
            


export default Filter;