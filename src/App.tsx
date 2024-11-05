import { Routes, Route } from 'react-router-dom'

import LoginPage from './pages/Login'
import HomePage from './pages/Home'
import FavoritesPage from './pages/Favorites'

import { AuthProvider } from './hooks/useAuth'
import { ProtectedRoute } from './components/protectedRoute'

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="favorites"
          element={
            <ProtectedRoute>
              <FavoritesPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </AuthProvider>
  )
}

export default App
