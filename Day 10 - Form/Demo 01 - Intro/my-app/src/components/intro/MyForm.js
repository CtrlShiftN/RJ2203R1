import { useState } from "react";

const MyForm = () => {
    // const [username, setUsername] = useState("");
    // const [age, setAge] = useState(0);

    const [account, setAccount] = useState({ username: '', age: 0 });

    const handleChange = (e) => {
        setAccount({ ...account, [e.target.name]: e.target.value });
    }
    const handleSubmit = (event) => {
        event.preventDefault();

    }
    let message;
    // if (age > 0) {
    //     message = '>0';
    // } else {
    //     message = '';
    // }
    return (
        <form onSubmit={handleSubmit}>
            <h3>Your name: {account.username} - {account.age}</h3>
            <input type="text" name="username" placeholder="Enter you name" onKeyUp={handleChange}></input>
            <br />
            <input type="number" name="age" placeholder="Enter your age" onKeyUp={handleChange}></input>
            <input type="submit" value="Submit"></input>
            <h3>{message}</h3>
        </form>
    )
}

export default MyForm;