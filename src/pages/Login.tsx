import { useState } from 'react'
import { Navigate } from 'react-router-dom'

import { useAuth } from '../hooks/useAuth'

import styled, { css } from 'styled-components'
import { Title } from '../components/layout'
import Logo from '../assets/logo.svg'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

const Label = styled.label`
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
  font-size: 13px;
  align-self: flex-start;

  color: #3763d2;
`

const Input = styled.input`
  width: 100%;
  padding: 10px 0;
  margin-bottom: 10px;
  margin-top: 5px;
  border: 2px solid #3763d2;
  border-radius: 5px;

  text-indent: 10px;

  color: #3763d2;
  background-color: transparent;

  outline: none;
`

export const Button = styled.button<{ disabled?: boolean }>`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  border: 2px solid #ffcb05;

  font-weight: 500;
  font-family: 'Roboto', sans-serif;

  background-color: #ffcb05;
  color: #3763d2;
  cursor: pointer;

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
      opacity: 0.5;
    `}
`

const Text = styled.p`
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;

  margin: 0;
  margin-bottom: 1rem;

  color: #3763d2;
`

const LoginPage = () => {
  const { user, login } = useAuth()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const disabled = !!username && !!password

  if (user) {
    return <Navigate to="/" />
  }

  const handleLogin = async (e: any) => {
    e.preventDefault()
    if (username === 'user' && password === 'user') {
      return login(username, () => ({}))
    }

    return alert('Invalid username or password')
  }

  return (
    <Wrapper>
      <img
        src={Logo}
        style={{ width: '400px', position: 'absolute', top: '5vh' }}
      />
      <Title style={{ position: 'unset', left: 'unset', margin: 'unset' }}>
        Welcome
      </Title>
      <Text>Please login to continue</Text>
      <form
        style={{
          width: '20vw',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        onSubmit={handleLogin}
      >
        <Label htmlFor="username">Username:</Label>
        <Input
          id="username"
          type="text"
          value={username}
          placeholder="your username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <Label htmlFor="password">Password:</Label>
        <Input
          id="password"
          type="password"
          value={password}
          placeholder="your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" disabled={!disabled} onClick={handleLogin}>
          Login
        </Button>
      </form>
    </Wrapper>
  )
}

export default LoginPage
