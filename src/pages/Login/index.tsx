import React, { useContext, useState } from 'react'
import { AuthContext } from '../../contexts/Auth/AuthContext'
import { Navigate, useNavigate } from 'react-router-dom'

export const Login = () =>{
    const auth = useContext(AuthContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()
    const handleLogin = async (e:any  ) => {
        if(email && password) { 
          const isLogged = await auth.signin(email, password)
          if(isLogged){
            navigate('/private')
          } else {
            alert('email or password wrong')
          }
        }
    }
  return (
    <div>
      <h2>Private Page</h2>
      <input type="email" value={email}  onChange={(e) => setEmail(e.target.value)}/>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
      <button onClick={handleLogin}>Logar</button>
    </div>
  )
}
