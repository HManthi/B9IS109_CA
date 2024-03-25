import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const DeleteBook = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    useEffect(() => {
      axios.delete('https://git.heroku.com/readersheaven.git/book/book/'+id)
      .then(res => {
              if(res.data.deleted){                 
                  navigate('/books')
                  window.location.reload()
              }
      }).catch(err => console.log(err))
    }, [])
}

export default DeleteBook