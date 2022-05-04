import { useState } from "react";

const MyValidatedForm = () => {
    const [age, setAge] = useState(0);
    const [err, setErr] = useState('');

    const hanldeChange = (e) => {
        let ageInput = e.target.value;
        if (!Number(ageInput)) {
            setErr("Not a number");
        } else {
            setAge(ageInput);
            setErr('');
        }
    }
    return (
        <div>
            <h1>{age}</h1>
            <form>
                <input type="text" onChange={hanldeChange} />
                <h3>{err}</h3>
            </form>
        </div>
    )
}

export default MyValidatedForm;