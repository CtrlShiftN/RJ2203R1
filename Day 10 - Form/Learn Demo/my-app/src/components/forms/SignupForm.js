import { useState } from "react";
import Input from './Input';

const SignupForm = () => {
    const MESSAGE_ERROR = {
        username: "Username error",
        email: "Email error",
        password: "Password error",
        confirmPassword: "Password must be the same"
    };

    const REGEX = {
        username: /^[a-zA-Z]{2,}$/,
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        password: /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,}$/
    };
    const [form, setForm] = useState({});
    const handleChange = (e) => {
        let targetNameError = e.target.name + "Error";
        let error = "";
        if (e.target.name === "repassword") {
            // so sanh voi password
            error = e.target.value === form.password ? "" : MESSAGE_ERROR[e.target.name];
        } else {
            error = REGEX[e.target.name].test(e.target.value) ? "" : MESSAGE_ERROR[e.target.name];
        }
        setForm({
            ...form,
            [e.target.name]: e.target.value,
            [targetNameError]: error
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        let isValid = form.username && form.email && form.password && form.repassword;
        alert(isValid ? "Sign up successfully!" : "Please fill in all blanks");
    }
    return (
        <div className="container pt-5">
            <form onSubmit={handleSubmit}>
                <Input id="username" error={form.usernameError || ""} type="text" name="username" label="Username" value={form.username || ""} onChange={handleChange} placeholder="Enter you fullname" />
                <Input id="email" error={form.emailError} type="email" name="email" label="Email" onChange={handleChange} />
                <Input id="password" error={form.passwordError} type="password" name="password" label="Password" onChange={handleChange} />
                <Input id="repassword" error={form.repasswordError} type="password" name="repassword" label="Confirm password" onChange={handleChange} />
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    );
}
export default SignupForm;