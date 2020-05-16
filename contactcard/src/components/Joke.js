import React from "react"

function Joke(properties) {
    return (<div>
        <hr />
        <h2 style={{ display: !properties.question && "none" }}>Question: {properties.question}</h2>
        <h3>Punch Line: {properties.punchLine}</h3>
        <hr />
    </div>)
}

export default Joke