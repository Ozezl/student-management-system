import React from 'react'
import { AwesomeButton } from "react-awesome-button"
import './Buttons.css'
import styles from "react-awesome-button/src/styles/themes/theme-red"

function Buttons(props) {
  return (
    <div className="buttons">
        <AwesomeButton  cssModule={styles} type="primary" size="large" onPress={() => props.createHandler()}>
            Add Student
        </AwesomeButton>

        <AwesomeButton  cssModule={styles} type="primary" size="large" onPress={() => props.deleteHandler()}>
            Delete Student
        </AwesomeButton>

        <AwesomeButton  cssModule={styles} type="primary" size="large" onPress={() => props.updateHandler()}>
            Update Student
        </AwesomeButton>
    </div>
  );
}

export default Buttons