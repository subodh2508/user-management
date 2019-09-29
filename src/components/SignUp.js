import React, { Component } from 'react';

class SignUp extends Component {
    state = { 
        firstName: '',
        lastName: '',
     }

     handleOnSubmit = () => {
         console.log('handleOnSubmit clicked ================', this.state);
     }

     handleOnChange = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
    }
    render() { 
        return ( 
            <div>
                <h1> Registration </h1>
                    First Name: <input type='text' name='firstName' value={this.state.firstName} placeholder='First Name' onChange={this.handleOnChange}></input>
                    <br />
                    Last Name: <input type='text' name='lastName' value={this.state.lastName} placeholder='Last Name' onChange={this.handleOnChange}></input>
                    <br />
                    <button onClick={this.handleOnSubmit}>
                        Submit
                    </button>
            </div>
         );
    }
}
 
export default SignUp;