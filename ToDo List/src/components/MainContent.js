import React from "react"

let style = {
    "color": "red"
}
class MainContent extends React.Component {
    constructor() {
        super();
    }

    changed() {
        alert("Changed");
    }
    render() {
        if (style) {
            style.backgroundColor = "blue";
        }
        let completedStyle = {
            fontStyle: "italic",
            textDecoration: "line-through",
            color: "#cdcdcd"
        }
        return (<div className="todo-item"><input type="checkbox" checked={this.props.item.completed}
            onChange={() => this.props.handleChange(this.props.item.id)} />
            <p style={this.props.item.completed ? completedStyle : null}>{this.props.item.text}</p></div>)
    }
}
export default MainContent