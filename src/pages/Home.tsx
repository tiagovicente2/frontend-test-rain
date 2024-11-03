import { useAuth } from '../hooks/useAuth'

import { LoginPage } from './Login'

import { Favorites } from '../components/Favorites'
import { Pokemons } from '../components/Pokemons'

export const HomePage = () => {
  const { user } = useAuth()

  // if (!user) {
  //   return <LoginPage />
  // }

  return (
    <>
      <header />
      <Favorites />
      <Pokemons />
      <footer />
    </>
  )
}
