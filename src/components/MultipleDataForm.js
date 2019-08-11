import React, {Component} from 'react'

export default class MultipleDataForm extends Component {
    constructor() {
        super()
    }

    handleSubmit = event => {
        event.preventDefault()
        const data = new FormData(event.target)

        fetch('', {
            method: 'POST',
            body: JSON.stringify({
                
            })
        })
    }

    render() {
        <Form>
            <Form.Group>
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="number" placeholder="Eg. 0722222222"></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Choose specific amount</Form.Label>
            </Form.Group>
            <Form.Group>
                <Form.Label>Choose data unit</Form.Label>
            </Form.Group>
            <Form.Group>
                <Form.Label>Choose validity period</Form.Label>
            </Form.Group>
            <Button variant="primary" type="submit">
                Send Data
            </Button>
        </Form>
    }
}