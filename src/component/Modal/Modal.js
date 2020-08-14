import React from 'react'
import { AwesomeButton } from "react-awesome-button"
import './Modal.css'
import "react-awesome-button/dist/styles.css"

function Modal(props) {
    const modalClassName = props.showModal > 0 ? "modal" : "modalOff"

    return (
    <div className={modalClassName}>
        {
            props.showModal === 1 ?
                <div className="modal1-wrapper-box">
                    <div className="button-close" onClick={() => props.deleteHandler()}>+</div>
                    
                        <label for="id">ID</label>
                        <input name="id" id="id" type="number" onChange={e => props.setId(e.target.value)}/>
                        <AwesomeButton  type="secondary" size="small" onPress={() => props.httpDeleteHandler()}>
                            Delete
                        </AwesomeButton>
 
                  
                </div>
            :
            <div></div>
        }
        {
            props.showModal === 2 ?
            
                <div className="modal2-wrapper-box">
                    <div className="button-close" onClick={() => props.updateHandler()}>+</div>
                  
                        <label for="id">ID</label>
                        <input name="id" id="id" type="number" onChange={e => props.setId(e.target.value)}/>
                        <label for="firstName">First name</label>
                        <input name="firstName" id="firstName" onChange={e => props.setFirstName(e.target.value)}/>
                        <label for="lastName">Last name</label>
                        <input name="lastName" id="lastName"  onChange={e => props.setLastName(e.target.value)}/>
                        <label for="semester">Semester</label>
                        <input name="semester" id="semseter" type="number" onChange={e => props.setSemester(e.target.value)}/>
                        <label for="faculty">Faculty</label>
                        <input name="faculty" id="faculty" onChange={e => props.setFaculty(e.target.value)}/>
                        <label for="email">Email</label>
                        <input name="email" id="email"  onChange={e => props.setEmail(e.target.value)}/>
                        <AwesomeButton  type="secondary" size="small" onPress={() => props.httpPutHandler()}>
                            Update
                        </AwesomeButton>
                     
                </div>
            :
            <div></div>
        }
        {
            props.showModal === 3 ?
            
                <div className="modal3-wrapper-box">
                    <div className="button-close" onClick={() => props.createHandler()}>+</div>
                    
                        <label for="firstName">First name</label>
                        <input name="firstName" id="firstName" onChange={e => props.setFirstName(e.target.value)}/>
                        <label for="lastName">Last name</label>
                        <input name="lastName" id="lastName"  onChange={e => props.setLastName(e.target.value)}/>
                        <label for="semester">Semester</label>
                        <input name="semester" id="semseter" type="number" onChange={e => props.setSemester(e.target.value)}/>
                        <label for="faculty">Faculty</label>
                        <input name="faculty" id="faculty" onChange={e => props.setFaculty(e.target.value)}/>
                        <label for="email">Email</label>
                        <input name="email" id="email"  onChange={e => props.setEmail(e.target.value)}/>
                        <AwesomeButton  type="secondary" size="small" onPress={() => props.httpPostHandler()}>
                            Add 
                        </AwesomeButton>
                     
                </div>
            :
            <div></div>
        }   
    </div>
  );
}

export default Modal