import React from 'react';
import StudentResult from './StudentResult';

export default function Result() {
    const students = [
        { name: 'Aashir', marks: 89, color: 'green' },
        { name: 'Ahmed', marks: 78, color: 'pink' },
        { name: 'Ali', marks: 61, color: 'orange' },
        { name: 'Rafey', marks: 39, color: 'red' },
    ];

    return (
        <>
            {students.map((student, index) => (
                <div key={index}>
                    <StudentResult
                        name={student.name}
                        marks={student.marks}
                        color={student.color}
                    />
                </div>
            ))}
        </>
    );
}