import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
    // console.log("Parents Constructor");
  }

  componentDidMount() {
    // console.log("Parent Component Did Mount ");
  }

  render() {
    // console.log("Parent Render");
    return (
      <div>
        <h1>About Us</h1>
        <p>This is Namaste React Web Series by Akshay Saini</p>
        <div>
          LoggedIn User:
          <UserContext.Consumer>
            {(data) => (
              <h2 className="text-xl font-extrabold">{data.loggedInUser}</h2>
            )}
          </UserContext.Consumer>
        </div>
        <UserClass name={"1st"} location={"Dehradun"} />
      </div>
    );
  }
}

export default About;
