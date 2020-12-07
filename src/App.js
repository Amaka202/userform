import React, { Component } from 'react'
import Form from './Form'
import "./App.css"

export default class App extends Component {
  render() {
    return (
      <div>
        <h3 style={{textAlign: "center"}}>Enter the parameters below to create a div</h3>
        <Form />
      </div>
    )
  }
}
