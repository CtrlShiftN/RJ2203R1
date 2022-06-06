import { connect } from "react-redux"



const Counter = (props) => {
    const decrease = () => {
        props.dispatch({
            type: "DECREMENT"
        });
    }
    const increase = () => {
        props.dispatch({
            type: "INCREMENT"
        });
    }
    return (
        <div className='container'>
            <button onClick={increase}>+1</button>
            <button onClick={decrease}>-1</button>
            <h3>{props.count}</h3>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        count: state.count
    }
}
export default connect(mapStateToProps)(Counter);