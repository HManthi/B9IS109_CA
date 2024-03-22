import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const DeleteBook = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    useEffect(() => {
      axios.delete('http://localhost:3001/book/book/'+id)
      .then(res => {
              if(res.data.deleted){                 
                  navigate('/books')
                  window.location.reload()
              }
      }).catch(err => console.log(err))
    }, [])
}

export default DeleteBook