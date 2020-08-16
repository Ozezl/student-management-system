import React from 'react'
import './StudentList.css'
import StudentCard from '../StudentCard/StudentCard'

function StudentList(props) {
  return (
    <div className="list">
        {props.items.map((student) => {
            return <StudentCard
                id = {student.id}
                name = {student.firstName + " " + student.lastName}
                semester = {student.semester}
                faculty = {student.faculty}
                email = {student.email}
            />
        })}
    </div>
  );
}

export default StudentList
