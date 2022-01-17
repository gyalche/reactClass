import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div>
                <p>THis is home</p>
                <p>{localStorage.getItem('token')}</p>
            </div>
        )
    }
}
