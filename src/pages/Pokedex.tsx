import { useRef, useState } from 'react'
import { useInfiniteQuery } from '@tanstack/react-query'

import styled from 'styled-components'

import Layout from '../components/layout'
import SearchBar from '../components/searchBar'
import { PokemonProps } from '../components/pokemon'
import Pokemons from '../components/pokemons'
import LoadingGif from '../assets/loading.gif'

import useLocalStorage from '../hooks/useLocalStorage'

import { list } from '../services/pokeapi'
import useIntersection from '../hooks/useIntersection'
import { Button } from './Login'

export const Loading = styled.img`
  width: 100px;
`

const Pokedex = () => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage
  } = useInfiniteQuery({
    queryKey: ['pokemons'],
    queryFn: ({ pageParam }) => list(pageParam),
    initialPageParam: 0,
    getNextPageParam: (last) => last.next
  })

  const [favPoke, setFavPoke] = useLocalStorage('favPoke', [])
  const [searchTerm, setSearch] = useState('')

  const handleSearch = (searchTerm: string) => {
    setSearch(searchTerm)
  }

  const handleFavorite = (poke: PokemonProps) => {
    if (favPoke.find((item: PokemonProps) => item.id === poke.id)) {
      setFavPoke(favPoke.filter((item: PokemonProps) => item.id !== poke.id))

      return
    }

    const favs = [...favPoke, poke]
    const sortedFavs = favs.sort((poke1, poke2) => poke1.id - poke2.id)

    setFavPoke(sortedFavs)
  }

  const loadMoreBtn = useRef<HTMLButtonElement>(null)

  useIntersection({
    target: loadMoreBtn,
    onIntersect: fetchNextPage,
    enabled: hasNextPage
  })

  return (
    <Layout activeMenu="pokemons">
      <SearchBar onSearch={handleSearch} />

      {error && <div>Something went wrong</div>}
      {isFetching && <Loading src={LoadingGif} />}

      <Pokemons
        pokes={data?.pages || []}
        favPoke={favPoke}
        handleFavorite={handleFavorite}
      />

      {(isFetchingNextPage || isFetching) && <Loading src={LoadingGif} />}

      {/* {!isFetching && ( */}
      <div style={{ width: '100px' }}>
        <Button ref={loadMoreBtn} onClick={() => fetchNextPage()}>
          Load more
        </Button>
      </div>
      {/* )} */}
    </Layout>
  )
}

export default Pokedex
