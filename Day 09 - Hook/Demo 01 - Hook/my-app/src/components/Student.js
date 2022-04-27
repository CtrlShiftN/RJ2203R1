import { useEffect } from "react";
import { useState } from "react";

function Student() {
    const [studentName, setStudentName] = useState("Nam");
    const [studentEmail, setStudentEmail] = useState("nam@gmail.com");

    useEffect(() => {
        console.log('useEffect has been called');
    }, []);

    return (
        <div>
            <h1>{studentName}</h1>
            <input type="text" onKeyUp={(e) => { setStudentName(e.target.value) }}></input>
            <input type="email" onKeyUp={(e) => { setStudentEmail(e.target.value) }}></input>
        </div>
    )
}

export default Student;