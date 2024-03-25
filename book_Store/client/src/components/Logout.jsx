import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = ({setRole}) => {
    const navigate = useNavigate()
  useEffect(() => {
    axios.get('https://git.heroku.com/readersheaven.git/auth/logout')
    .then(res => {
            if(res.data.logout){
                setRole('')
                navigate('/')
                window.location.reload()
            }
    }).catch(err => console.log(err))
  }, [])
}

export default Logout