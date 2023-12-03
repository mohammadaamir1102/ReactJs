import React from "react";

class Employee extends React.Component{

    render(){
        return(
            <div className="App">
                <h1>What is the class component?</h1>
                <pre>Class components are more complex than functional components.
                     It requires you to extend from React.
                     Component and create a render function which returns a React element. 
                     You can pass data from one class to other class components. 
                     You can create a class by defining a class that extends Component and has a render function.</pre>
            </div>
        );
    }
}
export default Employee; 