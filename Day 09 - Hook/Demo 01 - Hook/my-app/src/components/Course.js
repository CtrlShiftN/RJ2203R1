import { useState, useEffect } from 'react';

function Course() {
    const [selectedCourse, setSelectedCourse] = useState("");

    useEffect(() => {
        console.log("Selected: " + selectedCourse);
    }, [selectedCourse]);

    return (
        <div>
            Khoá học :
            <select onChange={(e) => { setSelectedCourse(e.target.value) }}>
                <option value="java">Java</option>
                <option value="angular">Angular</option>
                <option value="js">Javascript</option>
                <option value="php">Php</option>
            </select>
        </div>
    )
}

export default Course;