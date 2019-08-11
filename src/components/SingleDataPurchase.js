import React, {Component} from 'react'
import SingleDataForm from './SingleDataForm'

class SingleDataPurchase extends Component {
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
        return(
            <SingleDataForm />
        )
    }
}

export default SingleDataPurchase