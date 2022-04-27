import useTimer from "./MyHook";

function CustomHookDemo() {
    const [year, month, day, hour, minute, second] = useTimer();

    return (
        <div>
            <h1>{year} - {month} - {day} {hour}:{minute}:{second}</h1>
        </div>
    )
}

export default CustomHookDemo;