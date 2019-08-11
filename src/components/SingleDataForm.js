import React, {Component} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default class SingleDataForm extends Component {

    constructor() {
        super()
    }

    render() {
        return(
            <Form>
                <Form.Group>
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="text" placeholder="Eg. 0722222222"></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Choose specific amount</Form.Label>
                    <Form.Control type="text" placeholder="Eg. KES 10, 20, 50, 100,etc. "></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Choose data unit</Form.Label>
                    <Form.Control type="text" placeholder="Eg. MB, GB, etc."></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Choose validity period</Form.Label>
                    <Form.Control type="text" placeholder="Eg. Daily, Weekly, One-time, etc."></Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Send Data
                </Button>
            </Form>
        )
    }
}