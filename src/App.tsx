import { Routes, Route } from 'react-router-dom'

import LoginPage from './pages/Login'
import HomePage from './pages/Home'

import Favorites from './components/favorites'
import Pokemons from './components/pokemons'
import { AuthProvider } from './hooks/useAuth'

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="pokemons" element={<Favorites />} />
        <Route path="favorites" element={<Pokemons />} />
      </Routes>
    </AuthProvider>
  )
}

export default App
