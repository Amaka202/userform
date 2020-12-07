import React from 'react'

export default function Div(props) {
    console.log(props)
    const style = {
        height:`${props.height}px`,
        width: `${props.width}px`,
        backgroundColor: props.backgroundColor,
        margin: "2rem auto"
    }
    return (
        
        <div>
            <div style={style}>

            </div>
        </div>
    )
}
