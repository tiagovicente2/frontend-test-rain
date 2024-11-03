import { createContext, useContext, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface AuthContextType {
  user: any
  login: (user: string, callback: () => {}) => void
  logout: (callback: () => {}) => void
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any>(null)
  const navigate = useNavigate()

  const login = async (data: string) => {
    setUser(data)
    navigate('/')
  }

  const logout = () => {
    setUser(null)
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
