import { useMemo } from 'react'

import styled from 'styled-components'

import Pokemon from './pokemon'

const PokemonsContainer = styled.div`
  display: grid;

  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;

  justify-items: center;
  width: 80%;
  margin-top: 1rem;
`

const Pokemons = () => {
  const pokemons = useMemo(
    () => [
      {
        id: 1,
        name: 'Bulbasaur',
        image:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
      },
      {
        id: 2,
        name: 'Ivysaur',
        image:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'
      },
      {
        id: 3,
        name: 'Venusaur',
        image:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png'
      },
      {
        id: 4,
        name: 'Charmander',
        image:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png'
      },
      {
        id: 5,
        name: 'Charmeleon',
        image:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png'
      },
      {
        id: 6,
        name: 'Charizard',
        image:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png'
      },
      {
        id: 7,
        name: 'Squirtle',
        image:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png'
      },
      {
        id: 8,
        name: 'Wartortle',
        image:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png'
      }
    ],
    []
  )

  const handleFavorite = (id: number) => {
    console.log(id)
  }

  return (
    <PokemonsContainer>
      {pokemons.map((pokemon) => (
        <Pokemon
          key={pokemon.id}
          {...pokemon}
          handleFavorite={handleFavorite}
        />
      ))}
    </PokemonsContainer>
  )
}

export default Pokemons
