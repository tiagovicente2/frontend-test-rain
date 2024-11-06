import { useMemo, useRef, useState } from 'react'
import {
  useInfiniteQuery,
  useQuery,
  useQueryClient
} from '@tanstack/react-query'

import styled from 'styled-components'

import Layout from '../components/layout'
import SearchBar from '../components/searchBar'
import { PokemonProps } from '../components/pokemon'
import Pokemons from '../components/pokemons'
import LoadingGif from '../assets/loading.gif'

import useLocalStorage from '../hooks/useLocalStorage'

import { list, PokeApiResponse } from '../services/pokeapi'
import useIntersection from '../hooks/useIntersection'
import { Button } from './Login'

export const Loading = styled.img`
  width: 100px;
`

const Pokedex = () => {
  const [favPoke, setFavPoke] = useLocalStorage('favPoke', [])
  const [searchTerm, setSearch] = useState('')

  const loadMoreBtn = useRef<HTMLButtonElement>(null)

  const unfilteredPokemons = useInfiniteQuery<PokeApiResponse>({
    queryKey: ['pokemons'],
    queryFn: ({ pageParam }) => list(pageParam, 20),
    initialPageParam: 0,
    getNextPageParam: (last) => last.next
  })

  const filteredPokemons = useInfiniteQuery<PokeApiResponse>({
    queryKey: ['filteredPokemons', searchTerm],
    queryFn: async ({ pageParam }) => {
      const response = await list(pageParam, 300)
      return {
        ...response,
        results: response.results.filter((pokemon: any) =>
          pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      }
    },
    initialPageParam: 0,
    getNextPageParam: (last) => last.next,
    enabled: searchTerm.length > 0
  })

  const pokemons = useMemo(() => {
    if (searchTerm) {
      return filteredPokemons.data?.pages || []
    }
    return unfilteredPokemons.data?.pages || []
  }, [searchTerm, filteredPokemons.data, unfilteredPokemons.data])

  const nextPage =
    searchTerm.length > 0
      ? filteredPokemons.fetchNextPage
      : unfilteredPokemons.fetchNextPage

  const hasNextPage =
    searchTerm.length > 0
      ? filteredPokemons.hasNextPage
      : unfilteredPokemons.hasNextPage

  const isLoading =
    filteredPokemons.isLoading ||
    unfilteredPokemons.isLoading ||
    filteredPokemons.isFetching ||
    unfilteredPokemons.isFetching

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

  useIntersection({
    target: loadMoreBtn,
    onIntersect: nextPage,
    enabled: hasNextPage
  })

  return (
    <Layout activeMenu="pokemons">
      <SearchBar onSearch={handleSearch} />
      {unfilteredPokemons.error && <div>Something went wrong</div>}

      <Pokemons
        pokes={pokemons}
        favPoke={favPoke}
        handleFavorite={handleFavorite}
      />

      {isLoading && <Loading src={LoadingGif} />}

      {(hasNextPage || isLoading) && (
        <div style={{ width: '100px' }}>
          <Button ref={loadMoreBtn} onClick={() => nextPage()}>
            Load more
          </Button>
        </div>
      )}
    </Layout>
  )
}

export default Pokedex
