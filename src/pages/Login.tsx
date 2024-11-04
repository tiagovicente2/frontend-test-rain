import { useState } from 'react'
import { useAuth } from '../hooks/useAuth'

import { Navigate } from 'react-router-dom'

const LoginPage = () => {
  const { user, login } = useAuth()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  if (user) {
    return <Navigate to="/" />
  }

  const handleLogin = async (e: any) => {
    e.preventDefault()
    if (username === 'admin' && password !== 'password') {
      return login(username, () => ({}))
    }

    return alert('Invalid username or password')
  }

  return (
    <div>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default LoginPage
