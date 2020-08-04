import React from 'react'
import Griddle, { plugins, RowDefinition, ColumnDefinition} from 'griddle-react';
import {useEffect} from 'react'
import {useState} from 'react'
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import './Body.css'

function Body() {
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [showModal1, setShowModal1] = useState(false)
    const [showModal2, setShowModal2] = useState(false)
    const [showModal3, setShowModal3] = useState(false)
    const [body, setBody] = useState({})
    const [firstName, setFirstName] = useState({})
    const [lastName, setLastName] = useState({})
    const [semester, setSemester] = useState({})
    const [faculty, setFaculty] = useState({})
    const [id, setId] = useState({})
    const [email, setEmail] = useState({})


    useEffect(() => {
        fetch("http://localhost:8080/students")
            .then(res => res.json())
            .then(result => {
                setItems(result)
                setIsLoading(false)
            },
            (e) => {
                console.log(e)
            });
    }, [])

    function deleteHandler() {
        setShowModal1(!showModal1)
    }

    function updateHandler() {
        setShowModal2(!showModal2)
    }

    function createHandler() {
        setShowModal3(!showModal3)
    }

    function httpPostHandler() {
        let body = {
            firstName: firstName,
            lastName: lastName,
            semester: semester,
            faculty: faculty,
            email: email
        }

        setNull();

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        };

        fetch('http://localhost:8080/students', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data));
    }

    function httpDeleteHandler() {
        fetch('http://localhost:8080/students' + '/' + id, {
            method: 'delete'
          })
          .then(response => response.json());

        setNull();
    }

    function setNull() {
        setId('')
        setFirstName('')
        setLastName('')
        setSemester('')
        setFaculty('')
        setEmail('')
    }

    function httpPutHandler() {
        let body = {
            id: id,
            firstName: firstName,
            lastName: lastName,
            semester: semester,
            faculty: faculty,
            email: email
        }

        setNull();

        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        };

        fetch('http://localhost:8080/students' + '/' + id, requestOptions)
        .then(response => response.json())
        .then(data => console.log(data));
    }

  return (
    <div className="body">
        
        {
        isLoading ?
        <div className="body-placeholder">Is loading...</div>
        :
        <div className="body-wrapper">
            <div className="body-wrapper-table">
                <Griddle
                    data={items}
                    plugins={[plugins.LocalPlugin]}
                >
                    <RowDefinition>
                        <ColumnDefinition id="id" title="ID" />
                        <ColumnDefinition id="firstName" title="First Name" />
                        <ColumnDefinition id="lastName" title="Last Name"/>
                        <ColumnDefinition id="semester" title="Semester"/>
                        <ColumnDefinition id="faculty" title="Faculty"/>
                        <ColumnDefinition id="email" title="Email"/>
                        <ColumnDefinition id="address" title="Address"/>
                        <ColumnDefinition id="phoneNumber" title="Phone"/>
                    </RowDefinition>
                </Griddle>
            </div>
            <div className="body-wrapper-buttons">
            <AwesomeButton  type="primary" size="medium" onPress={() => createHandler()}>
                Add Student
            </AwesomeButton>

            <AwesomeButton  type="primary" size="medium" onPress={() => deleteHandler()}>
                Delete Student
            </AwesomeButton>

            <AwesomeButton type="primary" size="medium" onPress={() => updateHandler()}>
                Update Student
            </AwesomeButton>
            </div>
        </div>
        }
        {
            showModal1 ?
            <div className="modal1-wrapper">
                <div className="modal1-wrapper-box">
                    <div className="button-close" onClick={() => deleteHandler()}>+</div>
                    <form>
                        <label for="id">ID:</label>
                        <input name="id" id="id" type="number" onChange={e => setId(e.target.value)}/>
                        <AwesomeButton  type="secondary" size="small" onPress={() => httpDeleteHandler()}>
                            Delete
                        </AwesomeButton>
                    </form> 
                  
                </div>
            </div>
            :
            <div></div>
        }
        {
            showModal2 ?
            <div className="modal2-wrapper">
                <div className="modal2-wrapper-box">
                    <div className="button-close" onClick={() => updateHandler()}>+</div>
                    <form>
                        <label for="id">ID:</label>
                        <input name="id" id="id" type="number" onChange={e => setId(e.target.value)}/>
                        <label for="firstName">First name:</label>
                        <input name="firstName" id="firstName" onChange={e => setFirstName(e.target.value)}/>
                        <label for="lastName">Last name:</label>
                        <input name="lastName" id="lastName"  onChange={e => setLastName(e.target.value)}/>
                        <label for="semester">Semester:</label>
                        <input name="semester" id="semseter" type="number" onChange={e => setSemester(e.target.value)}/>
                        <label for="faculty">Faculty:</label>
                        <input name="faculty" id="faculty" onChange={e => setFaculty(e.target.value)}/>
                        <label for="email">Email:</label>
                        <input name="email" id="email"  onChange={e => setEmail(e.target.value)}/>
                        <AwesomeButton  type="secondary" size="small" onPress={() => httpPutHandler()}>
                            Update
                        </AwesomeButton>
                    </form> 
                </div>
            </div>
            :
            <div></div>
        }
        {
            showModal3 ?
            <div className="modal3-wrapper">
                <div className="modal3-wrapper-box">
                    <div className="button-close" onClick={() => createHandler()}>+</div>
                    <form>
                        <label for="firstName">First name:</label>
                        <input name="firstName" id="firstName" onChange={e => setFirstName(e.target.value)}/>
                        <label for="lastName">Last name:</label>
                        <input name="lastName" id="lastName"  onChange={e => setLastName(e.target.value)}/>
                        <label for="semester">Semester:</label>
                        <input name="semester" id="semseter" type="number" onChange={e => setSemester(e.target.value)}/>
                        <label for="faculty">Faculty:</label>
                        <input name="faculty" id="faculty" onChange={e => setFaculty(e.target.value)}/>
                        <label for="email">Email:</label>
                        <input name="email" id="email"  onChange={e => setEmail(e.target.value)}/>
                        <AwesomeButton  type="secondary" size="small" onPress={() => httpPostHandler()}>
                            Add 
                        </AwesomeButton>
                    </form> 
                </div>
            </div>
            :
            <div></div>
        }   
    </div>
  );
}

export default Body
