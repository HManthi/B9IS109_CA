import React, { useState } from 'react'
import '../css/AddStudent.css'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const AddBook = () => {
    const [name, setName] = useState('')
    const [author, setAuthor] = useState('')
    const [imageUrl, setImageUrl] = useState('')

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('https://git.heroku.com/readersheaven.git/book/add', {name, author, imageUrl})
        .then(res => { 
                if(res.data.added){
                    navigate('/books')
                }else{
                    console.log(res)
                }
        })
        .catch(err => console.log(err))
      }
  return (
    <div className='student-form-container'>
        <form className='student-form' onSubmit={handleSubmit}>
            <h2>Add Book</h2>
            <div className='form-group'>
                <label htmlFor='book'>Book Name:</label>
                <input type='text' id='book' name='book' 
                onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className='form-group'>
                <label htmlFor='author'>Author Name:</label>
                <input type='text' id='author' name='author' 
                onChange={(e) => setAuthor(e.target.value)} />
            </div>
            <div className='form-group'>
                <label htmlFor='imageUrl'>Image Url:</label>
                <input type='text' id='imageUrl' name='imageUrl' 
                onChange={(e) => setImageUrl(e.target.value)} />
            </div>
            <button className='btn-register' type='submit' onClick={handleSubmit}>Add</button>
        </form>
        
    </div>
  )
}

export default AddBook