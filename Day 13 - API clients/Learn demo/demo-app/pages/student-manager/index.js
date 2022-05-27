import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export async function getStaticProps() {
    const res = await axios.get('http://localhost:3001/student');
    return {
        props: {
            studentList: res.data
        }
    }
}
const handleDelete = (e) => {
    async function deleteData() {
        const res = await axios.delete("http://localhost:3001/student/" + e.target.id);
        return res.status; // (Or whatever)
    }
    console.log("Detele status: " + deleteData());
    // axios.post("http://localhost:3001/student", { id: 3, name: "Tuan" });
    // axios.put("http://localhost:3001/student/" + e.target.id, { name: "Tuan2" });

}

export default function StudentHome({ studentList }) {
    const router = useRouter();
    return (
        <div className="container pt-5">
            <h2>Students list</h2>
            <button onClick={(e) => router.push('/student-manager/create')} className="mx-4 btn btn-success">Create new student</button>
            <ul>
                {studentList.map((currentVal, index) => (
                    <li key={currentVal.id} className="py-3">
                        {currentVal.name}
                        <button onClick={(e) => router.push('/student-manager/edit/' + currentVal.id)} className="mx-4 btn btn-warning">Edit</button>
                        <button id={currentVal.id} onClick={handleDelete} className="mx-4 btn btn-danger">Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}