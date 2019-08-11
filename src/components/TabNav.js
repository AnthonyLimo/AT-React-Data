import React, {Component} from 'react'
import SingleDataForm from './SingleDataForm'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'

class TabNav extends Component {
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

    //Create form for this component

    render() {
        return(
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                <Tab eventType="home" title="Single Data">
                   <SingleDataForm/> 
                </Tab>
            </Tabs>
        )
    }
}

export default TabNav