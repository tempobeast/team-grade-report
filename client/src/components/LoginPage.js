import { useState } from 'react';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm'

function LoginPage() {
    const [toggleLogin, setToggleLogin] = useState(false)
    
    return (
        <div>
            <button onClick={() => setToggleLogin(!toggleLogin)}>
                {toggleLogin ? "Login" : "Sign Up"}
            </button>
            {toggleLogin ? <LoginForm/> : <SignupForm/>}
        </div>
    )
}
export default LoginPage