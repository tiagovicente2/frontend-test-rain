import { useState } from 'react'
import { useAuth } from '../hooks/useAuth'

import LoginPage from './Login'

import Favorites from '../components/favorites'
import Pokemons from '../components/pokemons'
import Layout from '../components/layout'
import Menu from '../components/menu'
import SearchBar from '../components/searchBar'

const HomePage = () => {
  // const { user } = useAuth()

  // if (!user) {
  //   return <LoginPage />
  // }

  const [activeMenu, setActiveMenu] = useState<string>('pokemons')

  return (
    <Layout activeMenu={activeMenu} setActiveMenu={setActiveMenu}>
      <SearchBar />
      {activeMenu === 'pokemons' ? <Pokemons /> : <Favorites />}
    </Layout>
  )
}

export default HomePage
