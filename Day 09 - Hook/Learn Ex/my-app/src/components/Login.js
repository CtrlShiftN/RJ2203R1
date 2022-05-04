import { useState } from "react";

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [account, setAccount] = useState({ email: '', password: '' });

    return (
        <div className="container pt-4">
            <form className="form-inline">
                <label className="sr-only" for="inlineFormInputName2">Email</label>
                <input type="email" name="email" className="form-control mb-2 mr-sm-2" onKeyUp={(e) => { setAccount({ ...account, [e.target.name]: e.target.value }) }} placeholder="admin@gmail.com" />

                <label className="sr-only" for="inlineFormInputGroupUsername2">Password</label>
                <div className="input-group mb-2 mr-sm-2">
                    <input type="password" name="password" className="form-control" onKeyUp={(e) => { setAccount({ ...account, [e.target.name]: e.target.value }) }} placeholder="Enter your password" />
                </div>

                <button type="submit" className="btn btn-primary mb-2">Submit</button>
            </form>
            <hr />
            <h2>Email: {account.email}</h2>
            <h2>Password: {account.password}</h2>
        </div>
    );
}

export default LoginForm;