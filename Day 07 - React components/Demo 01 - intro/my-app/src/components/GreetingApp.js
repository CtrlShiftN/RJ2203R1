// const SayHello = (props) => {
//     return (<h1>Hello {props.value} - {props.abc}</h1>);
// }

const SayHello = ({ value, abc }) => {
    return (<h1>Hello {value} - {abc}</h1>);
}
export default SayHello;

