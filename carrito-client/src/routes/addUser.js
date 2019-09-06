import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

const ADD_USER = gql`
    mutation CreateUser(
        $username: String!,
        $password: String!,
        $fullname: String!,
        $email: String!) {
        createUser(
            username: $username,
            password: $password,
            fullname: $fullname,
            email: $email
        ) {
            username
        }
    }
`

class AddUser extends React.Component {
    render () {
        let username, password, fullname, email;
        return (
            <Mutation mutation={ADD_USER} onCompleted={() => this.props.history.push('/')}>
                {(createUser, {loading, error}) => (
                <div>
                    <form onSubmit={e => {
                        e.preventDefault();
                        createUser({ 
                            variables: {
                                username: username.value,
                                password: password.value,
                                fullname: fullname.value,
                                email: email.value  
                            }
                        })
                        username.value = "";
                        password.value = "";
                        fullname.value = "";
                        email.value = "";
                    }}>

                        <input
                            type="text"
                            name="username"
                            ref={ node => { username = node; }  }
                        />

                        <input
                            type="password"
                            name="password"
                            ref={ node => { password = node; }  }
                        />

                        <input
                            type="text"
                            name="fullname"
                            ref={ node => { fullname = node; }  }
                        />

                        <input
                            type="text"
                            name="email"
                            ref={ node => { email = node; }  }
                        />

                        <button type="submit">
                            Submit
                        </button>

                    </form>
                    { loading && <p>Loading...</p> }
                    { error && <p>Error :(</p> } 
                </div>
                )}
            </Mutation>
        )
    }
}

export default AddUser;