import React from 'react'
import { Divider, Form, Button, Icon } from 'semantic-ui-react'

export default ({styles, handleClick, handleSubmit}) => {

    const args={}

    const handleChange = (e, input) => {
        args[input.name] = input.value
    }


    return (
        <div>
            <div style={styles.box}>
                <img style={styles.img} src="images/logo.png" />
                <Form onSubmit={(ev)=>handleSubmit(ev, args)}>
                    <Form.Field>
                        <Form.Input name="email" onChange={handleChange} placeholder="Email o nombre de usuario" icon={<Icon name="check circle" size="large"/>} />
                    </Form.Field>
                    <Form.Field>
                        <Form.Input name="password" onChange={handleChange} type="password" placeholder="Password" icon={<Icon name="remove circle" color="red" size="large" />} />
                    </Form.Field>
                    <Button type="submit" primary fluid>Iniciar sesión</Button>
                    <Divider horizontal> O </Divider>
                    <Button color="facebook">
                        <Icon name="facebook"/> Iniciar sesión de facebook
                    </Button>
                </Form>
            </div>
            <div style={styles.box}>
                ¿No tienes una cuenta? 
                <a href="" onClick={handleClick}>Regístrate</a>
            </div>
        </div>
    )
}