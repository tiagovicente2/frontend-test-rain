import styled from 'styled-components'

import Pokemon, { PokemonProps } from './pokemon'
import React from 'react'
import { PokeApiResponse } from '../services/pokeapi'

export const PokemonsContainer = styled.div`
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;

  justify-items: center;
  width: 80%;
  margin: 1rem 0;
`

interface PokemonsProps {
  pokes: PokeApiResponse[]
  favPoke: PokemonProps[]
  handleFavorite: (poke: PokemonProps) => void
}

const Pokemons = (props: PokemonsProps) => {
  const { pokes, handleFavorite, favPoke } = props

  return (
    <PokemonsContainer>
      {pokes.map((group, i) => (
        <React.Fragment key={i}>
          {group?.results.map((pokemon, index) => {
            const hash = Number(pokemon?.url?.split('/').at(-2)) || index
            const favorited = !!favPoke?.find(
              (poke: PokemonProps) => poke.id === hash
            )

            return (
              <Pokemon
                key={hash}
                id={hash}
                url={pokemon.url}
                name={pokemon.name}
                handleFavorite={handleFavorite}
                favorited={favorited}
              />
            )
          })}
        </React.Fragment>
      ))}
    </PokemonsContainer>
  )
}

export default Pokemons
