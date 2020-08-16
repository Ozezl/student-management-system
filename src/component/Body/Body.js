import React from 'react'
import {useEffect} from 'react'
import {useState} from 'react'
import Swal from 'sweetalert2'
import Buttons from '../Buttons/Buttons'
import Modal from '../Modal/Modal'
import Table from '../Table/Table'
import './Body.css'
import StudentList from '../StudentList/StudentList'

function Body() {
    const URL = 'https://salty-reaches-26979.herokuapp.com/students/'

    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [showModal, setShowModal] = useState(0); //takes values from 0 to 3
    const [id, setId] = useState()
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [semester, setSemester] = useState()
    const [faculty, setFaculty] = useState()
    const [email, setEmail] = useState()


    useEffect(() => {
        fetch(URL)
            .then(res => res.json())
            .then(result => {
                setItems(result)
                setIsLoading(false)
            },
            (e) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!' + e,
                  })
            })
    }, [])

    function setNull() {
        setId('')
        setFirstName('')
        setLastName('')
        setSemester('')
        setFaculty('')
        setEmail('')
    }

    function deleteHandler() {
        showModal === 0 ? setShowModal(1) : setShowModal(0)
    }

    function updateHandler() {
        showModal === 0 ? setShowModal(2) : setShowModal(0)
    }

    function createHandler() {
        showModal === 0 ? setShowModal(3) : setShowModal(0)
    }

    function httpPostHandler() {
        let body = {
            firstName: firstName,
            lastName: lastName,
            semester: Number(semester),
            faculty: faculty,
            email: email
        }

        setNull()

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        };

        fetch(URL, requestOptions)
            .then(response => response.json())
            .then(data => console.log(data), 
              (e) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!' + e,
                  })
              })

        window.location.reload()    //hard reaload, temp fix for form autosubmit
    }

    function httpDeleteHandler() {
        const requestOptions = {
            method: 'delete',
            headers: { 'Content-Type': 'application/json' },
        };

        fetch(URL + id, requestOptions)
            .then(response => response.json())
            .then(data => alert(data),
            (e) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!' + e,
                  })
            })

        setNull()

        window.location.reload()
    }

    function httpPutHandler() {
        let body = {
            id: Number(id),
            firstName: firstName,
            lastName: lastName,
            semester: Number(semester),
            faculty: faculty,
            email: email
        }

        setNull()

        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        };

        fetch(URL + id, requestOptions)
            .then(response => response.json())
            .then(data => console.log(data))

        window.location.reload()    
    }

  return (
    <div className = "body">
        
        {
        isLoading ?
        <div className="body-placeholder">Is loading...</div>
        :
        <div className = "body-wrapper">
            <Table 
                items={items}
            />
            <StudentList
                items={items}
            />
            <div className="body-wrapper-buttons">
                <Buttons 
                    createHandler = {() => createHandler()}
                    deleteHandler = {() => deleteHandler()}
                    updateHandler = {() => updateHandler()}
                />
            </div>
        </div>
        }
        
        <Modal
            showModal = {showModal}
            deleteHandler = {() => deleteHandler()}
            updateHandler = {() => updateHandler()}
            createHandler = {() => createHandler()}
            httpDeleteHandler = {() => httpDeleteHandler()}
            httpPutHandler = {() => httpPutHandler()}
            httpPostHandler = {() => httpPostHandler()}
            setId = {(id) => setId(id)}
            setFirstName = {(firstName) => setFirstName(firstName)}
            setLastName = {(lastName) => setLastName(lastName)}
            setSemester = {(semester) => setSemester(semester)}
            setFaculty = {(faculty) => setFaculty(faculty)}
            setEmail = {(email) => setEmail(email)}
        />
    </div>
  );
}

export default Body
