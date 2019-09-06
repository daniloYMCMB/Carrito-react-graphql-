import React from 'react'
import {Grid, Image} from 'semantic-ui-react'
import { useMutation } from '@apollo/react-hooks';
import gql from "graphql-tag";

import Signin from './login/Signin'
import Signup from './login/Signup'
// import LostPassword from './login/LostPassword'

const styles={
    grid:{
        height: '100%',
        maxWidth: '900px',
        margin: '0 auto',
    },
    img:{
        maxWidth: '100%',
        height: 'auto',
        display: 'block'
    },
    box:{
        backgroundColor: 'white',
        border: '1px solid #e6e6e6',
        textAlign: 'center',
        marginBottom: '1em',
        padding: '1em'
    }
}

class Login extends React.Component {
    state={
        showLogin: true,
        showRegister: false,
        showLostPassword: false
    }

    showRegister = (e) => {
        e.preventDefault()
        this.setState({showLogin:false, showRegister:true, showLostPassword:false})
    }

    showLogin = (e) => {
        e.preventDefault()
        this.setState({showLogin:true, showRegister:false, showLostPassword:false})
    }

    handleLogin = (e, args) => {
        console.log(args)
    }

    handleRegister = async (e, args) => {
        const response = await this.props.mutate({
            variables: args
        })
    }

    render(){
        const {showLogin, showRegister} = this.state
        return (<Grid verticalAlign='middle' columns={2} centered style={styles.grid}>
                    <Grid.Row>
                        <Grid.Column>
                            <Image fluid src="images/phone.png" style={styles.img}/>
                        </Grid.Column>
                        <Grid.Column>
                            {showLogin && <Signin styles={styles} handleClick={this.showRegister} handleSubmit={this.handleLogin}/> }

                            {showRegister && <Signup styles={styles} handleClick={this.showLogin} handleSubmit={this.handleRegister}/> }
                            {/* {showLostPassword && <LostPassword styles={styles}/> } */}
                        </Grid.Column>
                    </Grid.Row>
                </Grid>)
    }
}

const ADD_USER = gql`
mutation AddUser($username: String!, $password: String!, $fullname: String!, $email: String!) {
    createUser(
      username: $username, 
      password: $password, 
      fullname: $fullname, 
      email: $email)
  }
`

export default Login