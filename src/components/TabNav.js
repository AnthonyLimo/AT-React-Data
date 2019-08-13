import React, {Component} from 'react'
import SingleDataForm from './SingleDataForm'
import MultipleDataForm from './MultipleDataForm'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'

export default class TabNav extends Component {
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

    handleMultipleDataSubmit = event => {
        event.preventDefault()
        const dataMultiple = new FormData(event.target)

        fetch('', {
            method: 'POST',
            body: JSON.stringify({

            })
        })
    }

    //Create form for this component

    render() {
        return(
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                <Tab eventKey="single-data" title="Single Recipients">
                   <SingleDataForm/> 
                </Tab>
                <Tab eventKey="multiple-data" title="Multiple Recipients">
                    <MultipleDataForm/>
                </Tab>
            </Tabs>
        )
    }
}