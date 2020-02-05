import React, {Component} from 'react'
import Navbar from 'react-bootstrap/Navbar'

export default class Navigation extends Component {
    render() {
        return(
            <Navbar bg="light" expand="lg">
                <Navbar.Brand>Data Rush</Navbar.Brand>
            </Navbar>
        )
    }
}