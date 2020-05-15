import React from "react"

let style = {
    "color": "red"
}
function MainContent() {
    if (style) {
        style.backgroundColor = "blue";
    }
    return (<div className="todo-item"><input type="checkbox"/><p>Placeholder text here</p></div>)
}
export default MainContent