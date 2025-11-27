import React from 'react'

function Students() {
    const students = [
    { id: 1, name: "Niranjan" },
    { id: 2, name: "Sai" },
    { id: 3, name: "Priya" },
  ];

  return (
    <div className='w-50 m-auto mt-5 text-center'>
      <h2>Student Names</h2>
      {students.map((student) => (
        <p>{student.name}</p>
      ))}
    </div>
  )
}

export default Students
