import React from 'react'
import Griddle, { plugins, RowDefinition, ColumnDefinition} from 'griddle-react';
import './Table.css'


function Table(props) {
  return (
    <div className="table">
        <Griddle
            data = {props.items}
            plugins = {[plugins.LocalPlugin]}
        >
            <RowDefinition>
                <ColumnDefinition id="id" title="ID" />
                <ColumnDefinition id="firstName" title="First Name" />
                <ColumnDefinition id="lastName" title="Last Name"/>
                <ColumnDefinition id="semester" title="Semester"/>
                <ColumnDefinition id="faculty" title="Faculty"/>
                <ColumnDefinition id="email" title="Email"/>
            </RowDefinition>
        </Griddle>
    </div>
  );
}

export default Table