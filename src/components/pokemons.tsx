import styled from 'styled-components'

import Pokemon, { PokemonProps } from './pokemon'

export const PokemonsContainer = styled.div`
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;

  justify-items: center;
  width: 80%;
  margin-top: 1rem;
`

interface PokemonsProps {
  pokes: { name: string; url: string }[]
  favPoke: PokemonProps[]
  handleFavorite: (poke: PokemonProps) => void
}

const Pokemons = (props: PokemonsProps) => {
  const { pokes, handleFavorite, favPoke } = props

  return (
    <PokemonsContainer>
      {pokes?.map((pokemon, index) => {
        const hash = Number(pokemon?.url?.split('/').at(-2)) || index
        const favorited = !!favPoke?.find(
          (poke: PokemonProps) => poke.id === hash
        )

        return (
          <Pokemon
            key={hash}
            id={hash}
            name={pokemon.name}
            handleFavorite={handleFavorite}
            favorited={favorited}
          />
        )
      })}
    </PokemonsContainer>
  )
}

export default Pokemons
