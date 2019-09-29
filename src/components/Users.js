import React, { Component } from 'react';
const users = [
    {
        id: 1,
        fname: 'Subodh',
        lname: 'Sonawane',
        role: 'user',
        active: true,
    },
    {
        id: 2,
        fname: 'Priyanka',
        lname: 'Sonawane',
        role: 'admin',
        active: false,
    }
];

const tableHeading = ['First Name', 'Last Name', 'role', 'active', 'action'];
class Users extends Component {
    handleActivate = (id) => console.log('Activate clicked ====', id);
    handleDeactivate = (id) => console.log('Deactivate clicked ====', id);
    state = {  }
    render() { 
        return ( 
            <div>
                <h1>Users</h1>
                <table>
                    <tbody>
                        <tr>
                            {tableHeading.map((x, id) =>
                                <th key={id}>{x}</th>
                            )}
                        </tr>
                        {users.map((user) =>
                            <tr key={user.id}>
                                <td >{user.fname}</td>
                                <td >{user.lname}</td>
                                <td >{user.role}</td>
                                <td >{user.active ? 'True' : 'False'}</td>
                                <td >
                                {user.active ? <button onClick={() => this.handleDeactivate(user.id)}>
                                        Deactivate
                                    </button> : <button onClick={() => this.handleActivate(user.id)}>
                                        Activate
                                    </button>
                                }
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
         );
    }
}
 
export default Users;