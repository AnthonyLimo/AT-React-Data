import React, {Component} from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'

export default class SingleDataForm extends Component {
   render() {
       return(
        <Form>
            <Form.Group>
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="number" placeholder="Eg. 0722222222"></Form.Control>
            </Form.Group>
        </Form>
       )
   }
}