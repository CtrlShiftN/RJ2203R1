import { Component, useState } from "react";

// stateless (functional component)
function Account() {
    // khai bao state
    const [username, setUsername] = useState("Admin");
    const [email, setEmail] = useState("admin@gmail.com");
    let changeName = () => {
        setUsername("Sazzi");
    }
    return (
        <div>
            <h1>{username}</h1>
            <h2>Email: {email}</h2>
            <input type="email" onKeyUp={(e) => { setEmail(e.target.value) }}></input>
            <button onClick={changeName}>Change username</button>
        </div>
    )
}

// stateful (class component)
class Person extends Component {
    constructor() {
        super();
        this.state = { username: "Admin" }
    }
    changeName = () => {
        this.setState({ username: "Sazzi" });
    }
    render() {
        return (
            <div>
                <h1>{this.state.username}</h1>
                <button onClick={this.changeName}>Change username</button>
            </div>
        )
    }
}

export default Account;
// export default Person;