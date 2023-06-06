import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SignupForm() {
    const [ formData, setFormData ] = useState({
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        email: '',
    })

    function handleFormChange(e) {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })
    }

    console.log(formData)

    return(
        <div>
            <h1>Signup:</h1>
            <form>
                <label htmlFor='username' >Username: </label>
                <input 
                    type='text'
                    id='username'
                    autoComplete='off'
                    value={formData.username}
                    onChange={handleFormChange}
                    required
                />
                <label htmlFor='password'>Password: </label>
                <input 
                    type='password'
                    id='password'
                    autoComplete='current-password'
                    value={formData.password}
                    onChange={handleFormChange}
                    required
                />
                <label htmlFor='firstName'>First Name: </label>
                <input 
                    type='text'
                    id='firstName'
                    autoComplete='off'
                    value={formData.firstName}
                    onChange={handleFormChange}
                    required
                />
                <label htmlFor='lastName'>Last Name: </label>
                <input 
                    type='text'
                    id='lastName'
                    autoComplete='off'
                    value={formData.lastName}
                    onChange={handleFormChange}
                    required
                />
                <label htmlFor='email'>Email: </label>
                <input 
                    type='email'
                    id='email'
                    autoComplete='off'
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                />
            </form>
        </div>
    )
}
export default SignupForm