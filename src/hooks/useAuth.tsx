import { createContext, useContext, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useLocalStorage from './useLocalStorage'

interface AuthContextType {
  user: boolean
  login: () => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useLocalStorage('user', false)
  const navigate = useNavigate()

  const login = async () => {
    setUser(true)
    navigate('/')
  }

  const logout = () => {
    setUser(false)
    navigate('/', { replace: true })
  }

  const value = {
    user,
    login,
    logout
  } as AuthContextType

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  return useContext(AuthContext)
}
