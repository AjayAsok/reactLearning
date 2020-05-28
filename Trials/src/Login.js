import React from "react"

class Login extends React.Component {

    constructor() {
        super()
        this.state = {
            isLoggedIn: true
        }
        this.loginHandler = this.loginHandler.bind(this)
    }
    render() {
        return (<div>
            <h1>You are Currently logged{this.state.isLoggedIn ? "in" : "out"}</h1>
            <button onClick={this.loginHandler}>{this.state.isLoggedIn ? "Logout" : "Login"}</button>
        </div>
        )
    }
    loginHandler() {
        this.setState(prevState => {
            return {
                isLoggedIn: !this.state.isLoggedIn
            }
        })
    }
}
export default Login