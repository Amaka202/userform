import React, { Component } from 'react'
import Div from './Div'

export default class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            width: "",
            height:"",
            backgroundColor: ""
        }
    }

    handleStlye = (e) => {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value    
        })
        console.log(e.target.value)
    }

    render() {
        return (
            <div className="container">
                <form className="form" >
                    <input type="number" name="width" placeholder="Enter a preferred width" value={this.state.width} onChange={this.handleStlye}/>
                    <input type="number" name="height"  placeholder="Enter a preferred height" value={this.state.height} onChange={this.handleStlye}/>
                    <input type="text" name="backgroundColor" placeholder="Enter a preferred background color" value={this.state.backgroundColor} onChange={this.handleStlye}/>
                    
                </form>
                <Div height={this.state.height} width={this.state.width} backgroundColor={this.state.backgroundColor}/>
            </div>
        )
    }
}
