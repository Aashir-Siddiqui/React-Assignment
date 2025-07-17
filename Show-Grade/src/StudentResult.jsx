import React from 'react'
import { calculateGrade } from './Grade'

export default function StudentResult({name, marks, color}) {

    const grade = calculateGrade(marks)

    if (!grade) return <h1>Marks not uploaded yet!</h1>

    const status = marks >= 40 ? 'Pass' : 'Fail'

    return (
        <>
            <h1 style={{ color }}>{status}</h1>
            <p>Mr. {name}, your marks are {marks} and your grade is {grade}</p>
        </>
    )
}
