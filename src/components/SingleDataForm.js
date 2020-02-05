import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default class SingleDataForm extends Component {
  constructor () {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit = event => {
    event.preventDefault()
    const data = new FormData(event.target)

    console.log(data)

    fetch('', {
      method: 'POST',
      body: JSON.stringify(data)
    })
  }

  render () {
    return (
      <Form>
        <br />
        <Form.Group>
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type='text' placeholder='Eg. 0722222222' />
        </Form.Group>
        <Form.Group>
          <Form.Label>Enter Message you would like to send:</Form.Label>
          <Form.Control type='text' placeholder='Eg. Morning :) ' />
        </Form.Group>
        {/* <Form.Group>
          <Form.Label>Choose data unit</Form.Label>
          <Form.Control type='text' placeholder='Eg. MB, GB, etc.' />
        </Form.Group> */}
        {/* <Form.Group>
          <Form.Label>Choose validity period</Form.Label>
          <Form.Control
            type='text'
            placeholder='Eg. Daily, Weekly, One-time, etc.'
          />
        </Form.Group> */}
        <Button variant='primary' type='submit'>
          Send SMS
        </Button>
      </Form>
    )
  }
}
