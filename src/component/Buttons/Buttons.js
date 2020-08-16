import React from 'react'
import { AwesomeButton } from "react-awesome-button"
import './Buttons.css'
import "react-awesome-button/dist/styles.css"


function Buttons(props) {
  return (
    <div className="buttons">
        <div>
          <AwesomeButton type="primary" size="large" onPress={() => props.createHandler()}>
              Add Student
          </AwesomeButton>
        </div>
        <div>
          <AwesomeButton type="primary" size="large" onPress={() => props.deleteHandler()}>
              Delete Student
          </AwesomeButton>
        </div>
        <div>
          <AwesomeButton type="primary" size="large" onPress={() => props.updateHandler()}>
              Update Student
          </AwesomeButton>
        </div>
    </div>
  );
}

export default Buttons