import React, { useState } from 'react'
import '../css/Login.css'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Login = ({setRoleVar}) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('admin')
  const navigate = useNavigate()

  axios.defaults.withCredentials = true;

  const handleSubmit = () => {
    axios.post('https://git.heroku.com/readersheaven.git/auth/login', {username, password, role})
    .then(res => {
      if(res.data.login && res.data.role === 'admin'){
        setRole('admin')
        navigate('/dashboard')
        window.location.reload()
        
      }else if(res.data.login && res.data.role === 'student'){
        setRole('student')
        navigate('/')
        window.location.reload()
      }
      console.log(res)
    })
    .catch(err => console.log(err))
  }

  return (
    <div className='login-page'>
      <div className='login-container'>
        <h2>Login</h2> <br/>
        <div className='form-group'>
          <label htmlFor='username'>Username: </label>
          <input type='text' placeholder='Enter username' onChange={(e) => setUsername(e.target.value)}/>
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password: </label>
          <input type='password' placeholder='Enter password' onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className='form-group'>
          <label htmlFor='role'>Role: </label>
          <select name='role' id='role' onChange={(e) => setRole(e.target.value)}>
            <option value="admin">Admin</option>
            <option value="student">Student</option>
          </select>
        </div>
        <button className='btn-login' onClick={handleSubmit}>Login</button>

      </div>
    </div>
  )
}

export default Login