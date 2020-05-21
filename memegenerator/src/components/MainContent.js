import React from "react"
import contents from "../data/contentData"

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
        return (<div className="todo-item"><input type="checkbox" checked={this.props.item.completed}
            onChange={() => this.props.handleChange(this.props.item.id)} /><p>{this.props.item.text}</p></div>)
    }
}
export default MainContent