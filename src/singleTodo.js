import React, { Component } from "react";

export default class SingleTodo extends Component {
    constructor(){
    super();
    }
    

//state is nternal to the component
//props are passed in from the outside

    render(){
        return (
        <ul>
            <li>{this.props.todo}<button onClick={this.props.delete}>Delete</button></li>
        </ul>
        )
    }
}
//Same action, using simply a function 

// const SingleTodo= props => {
//     return (
//         <ul>
//             <li>{props.todo}<button onClick={props.delete}>Delete</button></li>
//         </ul>
//     )
// }
