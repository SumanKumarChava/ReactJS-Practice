import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div>
            <h2> About Us</h2>
            <h3> We are cool</h3>
            <User name={"Suman"} location={"Vijayawada"}/>
            <UserClass name={"Ramesh"} location={"Guntur"}/>
        </div>
    );
}
export default About;