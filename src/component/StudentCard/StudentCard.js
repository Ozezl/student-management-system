import React from 'react'
import './StudentCard.css'

function StudentCard(props) {
  return (
    <div className="card">
        <p>ID: {props.id}</p>
        <p>Name: {props.name}</p>
        <p>Semester: {props.semester}</p>
        <p>Faculty: {props.faculty}</p>
        <p>Email: {props.email}</p>
    </div>
  );
}

export default StudentCard
