import React, { useState } from 'react'
import '../css/Login.css'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const AddStudent = () => {
  return (
    <div className='login-page'>
        <div className='login-container'>
            <form className='student-form'>
                <h2>Add Student</h2>
                <div className='form-group'>
                    <label htmlFor='roll'>Roll No:</label>
                    <input type='text' id='roll' name='roll' />
                </div>
                <div className='form-group'>
                    <label htmlFor='username'>Username:</label>
                    <input type='text' id='username' name='username' />
                </div>
                <div className='form-group'>
                    <label htmlFor='grade'>Grade:</label>
                    <input type='text' id='grade' name='grade' />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password:</label>
                    <input type='text' id='grade' name='grade' />
                </div>
                <button type='submit'>Register</button>
            </form>
        </div>
        
    </div>
  )
}

export default AddStudent