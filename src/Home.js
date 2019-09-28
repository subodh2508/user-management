import React, { Component } from 'react';

class Home extends Component {
    state = { 
        username: '',
        password: '',
     }
     handleOnClick = () => {
        const { username, password } = this.state;
        if (!username) {
            console.log('Username required');
        }
        if (!password) {
            console.log('password required');
        }
        if (username.length > 0 && password.length > 0) {
            if (username === 'sameer' && password === '123456') {
                console.log('Correct credentials');
            } else {
                console.log('Username or password incorrect');
            }
        }
    }

    handleOnChange = (e) => {
        console.log('checked ====', e.target.value);
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
        console.log('==== stste', this.state);
    }
    render() { 
        return (
            <div>
                <h2>Log In </h2>
                <input type='text' placeholder='username' name='username' onChange={this.handleOnChange} />
                <input type='password' placeholder='password' name='password' onChange={this.handleOnChange} />
                <button onClick={this.handleOnClick}>
                    Sign In
                </button>
            </div>  );
    }
}
 
export default Home;