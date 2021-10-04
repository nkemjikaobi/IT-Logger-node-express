import React from 'react'

const Login = () => {
    return (
        <div className="loginContainer">
            <h1>Login</h1>
            <form action="" method="post">
                <input type="text" placeholder="Enter your email"/>
                <input type="password" placeholder="Enter your password"/>
                <input type="submit" value="Submit" className="submit" />
                <a href="/register">Dont have an account?</a>
            </form>
        </div>
    )
}

export default Login
