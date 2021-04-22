import Container from 'react-bootstrap/Container'
import "../../css/LoginPage.css"
var loginBackground = require('../../images/loginBackground.jpeg')

const LoginPage = () => {
    return (
        <form action="/login" method="POST">
	<div>
		<h1 style={{textAlign: "center" }}>Login</h1>
		<div class="form-group">
		<link href="/main.css" rel="stylesheet" type="text/css"/>
		<label>Username</label>
        <input
            type="text" 
            name="username" 
            id="username" 
            placeholder="Enter your username:" 
            required />
		</div>
		<div class="form-group">
        <label>Password</label>
        <input
            type="text" 
            name="password" 
            id="password" 
            placeholder="Enter your password:" 
            required />
    </div>
    <div>
        <input type="submit" value="Login" />
        <pre class="tab1">           </pre>
    </div>
    <div>
        <a href="/register">Register</a>
    </div>
	</div>
	</form>
    )
}

export default LoginPage
