import { useState } from "react";

const Dropdown = () => {
    const [car, setCar] = useState('Volvo');
    const hanldeChange = (e) => { 
        console.log(e.target.value);
    } 
    return (
        <form>
            <select onChange={hanldeChange}>
                <option value="Ford">Ford</option>
                <option value="Volvo" selected>Volvo</option>
                <option value="Fiat">Fiat</option>
            </select>
        </form>
    )
}

export default Dropdown;