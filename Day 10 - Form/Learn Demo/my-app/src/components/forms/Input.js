const Input = (props) => {
    return (
        <div className="mb-3">
            <label htmlFor={props.id} className="form-label">{props.label}</label>
            <input type={props.type} value={props.value} name={props.name} className="form-control" id={props.id} onKeyUp={props.onKeyUp} onChange={props.onChange} placeholder={props.placeholder}></input>
            <p className="error-block">{props.error}</p> 
        </div>
    )
}
export default Input;