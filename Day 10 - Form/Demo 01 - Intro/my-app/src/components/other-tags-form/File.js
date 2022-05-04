import { useState } from "react";

const File = () => {
    const hanldeChange = (e) => {
        console.log(e.target.files[0]);
        console.log(e.target.value);
    }
    return (
        <form>
            <input type="file" onChange={hanldeChange}/>
        </form>
    )
}

export default File;