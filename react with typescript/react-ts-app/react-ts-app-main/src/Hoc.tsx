import React, { Component } from "react";

let initialState = {
    name: "aj",
    msg: 'This is greeting'
}
type State = Readonly<typeof initialState>

export const msgHoc = (WrappedComponent: any) => {
    class HOC extends Component<{}, State> {
        readonly state: State = initialState

        render() {
            return <WrappedComponent name={this.state.name} msg={this.state.msg} />
        }
    }
    return HOC
}

export default msgHoc