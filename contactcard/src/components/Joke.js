import React from "react"

function Joke(properties) {
    return (<div>
        <hr />
        <h2 style={{ display: !properties.joke.question && "none" }}>Question: {properties.joke.question}</h2>
        <h3>Punch Line: {properties.joke.punchLine}</h3>
        <hr />
    </div>)
}

export default Joke