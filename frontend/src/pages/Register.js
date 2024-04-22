import React, { useEffect } from 'react'
import Form from './../components/Form/Form';




const Register = () => {
  useEffect(() => {
    document.title = "Register"
  }, [])
  
  return (
    <div>
      <Form route='/user/signup/' method='register' />
    </div>
  )
}

export default Register
