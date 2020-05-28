import React from "react"

class Conditional extends React.Component {

    render() {
        if (this.props.isLoading) {
            return <h1>Loading...</h1>
        }
        return <h1>Loaded</h1>

    }
}

export default Conditional