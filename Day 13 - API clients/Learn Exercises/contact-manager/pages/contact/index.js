import { useState, useEffect } from "react";
import axios from 'axios';
import { useRouter } from 'next/router'
import Router from 'next/router'
import Link from "next/link";


export async function getStaticProps() {
    const res = await axios.get('http://localhost:3001/contact');
    return {
        props: {
            contactList: res.data
        }
    }
}

const handleDelete = (e) => {
    async function deleteData() {
        const res = await axios.delete("http://localhost:3001/contact/" + e.target.id);
        return res.status; // (Or whatever)
    }
    deleteData();
    Router.reload(window.location.pathname);

}


export default function Home({ contactList }) {
    const router = useRouter();
    return (
        <div className="container pt-5">
            <div className="d-flex bd-highlight">
                <div className="p-2 flex-grow-1 bd-highlight"><h2>Contacts List</h2></div>
                <div className="p-2 bd-highlight">

                    <Link href='/contact/add'>
                        <button className="btn btn-success">Create 1</button>
                    </Link>
                    <button className="btn btn-success mx-3" onClick={(e) => router.push('/contact/add')}>Create 2</button>
                </div>
            </div>
            <table width="100%" className="table table-striped">
                <thead>
                    <tr>
                        <th className="text-center">Name</th>
                        <th className="text-center">Email</th>
                        <th className="text-center">Tel</th>
                        <th className="text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {contactList.map((currentVal, index) => (
                        <tr key={index}>
                            <td>{currentVal.name}</td>
                            <td>{currentVal.email}</td>
                            <td>{currentVal.tel}</td>
                            <td className="text-center">
                                <button id={currentVal.id} className="btn btn-warning mx-3" onClick={(e) => router.push('/contact/edit/' + e.target.id)}>Edit</button>
                                <button id={currentVal.id} className="btn btn-danger mx-3" onClick={handleDelete}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}