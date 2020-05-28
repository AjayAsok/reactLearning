import React from "react"

class Login extends React.Component {

    constructor() {
        super()
        this.state = {
            isLoggedIn: true,
            responseData: {}
        }
        this.handleLogin = this.handleLogin.bind(this)
    }
    componentDidMount() {
        this.responseData = fetch("https://swapi.dev/api/people/1").then(response => response.json())
            .then(responseData => {
                this.setState({
                    responseData: responseData
                })
            })
        console.log(this.responseData)
    }
    render() {
        return (<div>
            <h1>You are Currently logged{this.state.isLoggedIn ? " in " + this.state.responseData.name : " out"}</h1>
            <button onClick={this.handleLogin}>{this.state.isLoggedIn ? "Logout" : "Login"}</button>
        </div>
        )
    }
    handleLogin() {
        this.setState(prevState => {
            return {
                isLoggedIn: !this.state.isLoggedIn
            }
        })
    }
}
export default Login