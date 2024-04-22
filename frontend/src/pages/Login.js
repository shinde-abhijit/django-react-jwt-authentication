import React, { useEffect } from 'react'
import Form from '../components/Form/Form'




const Login = () => {
  useEffect(() => {
    document.title = "Login"
  }, [])
  return (
    <div>
      <Form route='/user/token/' method='login' />
    </div>
  )
}

export default Login
