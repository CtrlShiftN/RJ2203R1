import axios from 'axios';
export async function getStaticProps() {
    const res = await axios.get('http://localhost:3001/student');
    return {
        props: {
            studentList: res.data
        }
    }
}

export default function StudentHome({ studentList }) {
    console.log(studentList);
    return (
        <div className="container pt-5">
            <h2>Students list</h2>
            <ul>
                {studentList.map((currentVal) => (
                    <li>{currentVal.name}</li>
                ))}
            </ul>
        </div>
    )
}