import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })
    const [isLoading, setIsLoading] = useState(false)

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })
    }

    return (
        <div>
            <h1></h1>
            <form>
                <label htmlFor="username">Username:</label>
                <input
                    type='text'
                    id='username'
                    autoComplete='off'
                    value={formData.username}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    autoComplete='off'
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <button type="submit">{isLoading ? "Loading..." : "Login"}</button>
            </form>
        </div>
    )
}
export default LoginForm