import { useState } from "react";

const Textarea = () => {
    const [message, setMessage] = useState("This is a desc");
    const handleChange = (e) => {
        setMessage(e.target.value);
    }
    return (
        <form>
            <textarea name="abc" onKeyUp={handleChange} />
        </form>
    )
}

export default Textarea;