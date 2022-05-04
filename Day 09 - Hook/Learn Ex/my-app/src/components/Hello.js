import { useState } from "react"

const Hello = () => {
    const [message, setMessage] = useState('');

    return (
        <div className="container">
            <input type="text" placeholder="Enter your message" onKeyUp={(e) => { setMessage(e.target.value) }} />
            <br />
            <h2>Hello: {message}</h2>
        </div>
    )
}
export default Hello;