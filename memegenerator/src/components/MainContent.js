import React from "react"

let style = {
    "color": "red"
}
function MainContent(params) {
    if (style) {
        style.backgroundColor = "blue";
    }
    return (<div className="todo-item"><input type="checkbox" checked={params.item.completed} /><p>{params.item.text}</p></div>)
}
export default MainContent