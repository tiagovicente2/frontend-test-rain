import { useEffect, useState } from 'react'

import Layout from '../components/layout'
import SearchBar from '../components/searchBar'
import { PokemonProps } from '../components/pokemon'
import Pokemons from '../components/pokemons'

import useLocalStorage from '../hooks/useLocalStorage'

import { pokemons } from '../services/pokeapi'
import { PokeApiResponse } from '../services/pokeapi/pokemons'

const HomePage = () => {
  const [favPoke, setFavPoke] = useLocalStorage('favPoke', [])
  const [list, setList] = useState<PokeApiResponse>({} as PokeApiResponse)
  const [search, setSearch] = useState('')

  const handleFavorite = (poke: PokemonProps) => {
    if (favPoke.find((item: PokemonProps) => item.id === poke.id)) {
      setFavPoke(favPoke.filter((item: PokemonProps) => item.id !== poke.id))

      return
    }

    const favs = [...favPoke, poke]
    const sortedFavs = favs.sort((poke1, poke2) => poke1.id - poke2.id)

    setFavPoke(sortedFavs)
  }

  useEffect(() => {
    Promise.all([
      pokemons.list({
        limit: 10
      })
    ])
      .then(([data]) => {
        setList(data as any)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const handleSearch = (searchTerm: string) => {
    setSearch(searchTerm)
  }

  return (
    <Layout activeMenu="pokemons">
      <SearchBar onSearch={handleSearch} />
      <Pokemons
        pokes={list?.results}
        favPoke={favPoke}
        handleFavorite={handleFavorite}
      />
    </Layout>
  )
}

export default HomePage
