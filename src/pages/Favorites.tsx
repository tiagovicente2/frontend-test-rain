import { useEffect, useMemo, useState } from 'react'
import Layout from '../components/layout'
import Pokemon, { PokemonProps } from '../components/pokemon'
import Pokemons, { PokemonsContainer } from '../components/pokemons'
import SearchBar from '../components/searchBar'

import useLocalStorage from '../hooks/useLocalStorage'

const FavoritesPage = () => {
  const [favPoke, setFavPoke] = useLocalStorage('favPoke', [])
  const [filteredPoke, setFilteredPoke] = useState(favPoke)

  const handleFavorite = (poke: PokemonProps) => {
    setFavPoke(favPoke.filter((item: PokemonProps) => item.id !== poke.id))
  }

  const handleSearch = (value: string) => {
    const filtered = favPoke.filter((poke: PokemonProps) =>
      poke.name.toLowerCase().includes(value.toLowerCase())
    )

    setFilteredPoke(filtered)
  }

  useEffect(() => {
    setFilteredPoke(favPoke)
  }, [favPoke])

  return (
    <Layout activeMenu="favorites">
      <SearchBar onSearch={handleSearch} />
      <PokemonsContainer>
        {filteredPoke.map((items: PokemonProps) => {
          return (
            <Pokemon
              {...items}
              key={items.id}
              favorited
              handleFavorite={handleFavorite}
            />
          )
        })}
      </PokemonsContainer>
    </Layout>
  )
}

export default FavoritesPage
