import SayHello from './GreetingApp';
import HelloHero from './HelloHero';
import Person from './Person';
const Greeting = () => {
    return (
        <div className="container">
            <Person name={"Hoa"} />
            <Person name={"Huong"} />
            <br></br>
            <HelloHero />
        </div>
    );
}
export default Greeting;