import { useState } from 'react';
import './pages.css';

export default function Login() {
    const [loginData, setLoginData] = useState(
        {
            email: "",
            password: ""
        }
    );
    console.log(loginData)

    function handleSubmit(e){
        e.preventDefault()
    }

    function handleChange(e) {
        const {name, value} = e.target 
        setLoginData(loginData => ({
            ...loginData,
            [name]: value
        }))

    }
  return (
    <div className="login style">
        <h1>Sgin in to your account</h1>
        <form onSubmit={handleSubmit}>
            <input
                placeholder="Email address"
                type="email"
                name="email"
                value={loginData.email}
                onChange={handleChange}
            />
            <input
                placeholder="Password"
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleChange}
            />
            <button>Sign in</button>
        </form>
        <p>Don't have an account? <span>Create one now</span></p>
    </div>
  )
}
