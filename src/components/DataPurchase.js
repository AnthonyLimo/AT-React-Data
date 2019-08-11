import React, {Component} from 'react'
import TabNav from './TabNav'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default class DataPurchase extends Component {

    render() {
        return(
            <Container>
               <Row className="justify-content-md-center">
                    <Col md="auto">
                        <TabNav></TabNav>
                    </Col>
                </Row>   
            </Container>
        )
    }

}