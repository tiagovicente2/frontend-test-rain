import styled from 'styled-components'

import FavIcon from '../assets/favoriteIconFill.svg'
import UnfavIcon from '../assets/favoriteIcon.svg'
import LoadingGif from '../assets/loading.gif'

import { useQuery, useQueryClient } from '@tanstack/react-query'
import { detail } from '../services/pokeapi'

import { Loading } from '../pages/Pokedex'

const imgSrc =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon'

const PokemonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  position: relative;

  padding: 10px;

  width: 300px;
  height: 250px;

  box-shadow: 0 0 10px #3763d270;
  border-radius: 15px;
  border-color: #3763d2;
`

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  justify-content: space-evenly;
`

const Name = styled.h1`
  font-size: 20px;
  font-weight: bold;
  color: #000;

  text-transform: capitalize;
  margin: 0;
  margin-bottom: 5px;
`

const Id = styled.h3`
  font-size: 15px;
  font-weight: bold;
  color: #000;

  margin: 0;
`

const Image = styled.img`
  height: 120px;
  max-width: 120px;
`

const Gif = styled.img`
  width: 50px;
`

const Icon = styled.img`
  top: 2rem;
  right: 2rem;
  cursor: pointer;

  width: 20px;
  position: absolute;
`

export interface PokemonProps {
  id: number
  name: string
  image?: string
  handleFavorite?: (props: PokemonProps) => void
  favorited: boolean
}

const Pokemon = (props: PokemonProps) => {
  const { id, name, handleFavorite, favorited } = props

  const icon = favorited ? FavIcon : UnfavIcon
  const primaryImage = `${imgSrc}/other/official-artwork/${id}.png`
  const secondaryImage = `${imgSrc}/versions/generation-v/black-white/animated/${id}.gif`

  const poke: PokemonProps = {
    id,
    name,
    image: primaryImage,
    favorited
  }

  return (
    <PokemonContainer key={id}>
      <Icon src={icon} onClick={() => handleFavorite && handleFavorite(poke)} />
      <ColumnWrapper>
        <div>
          <Name>{name}</Name>
          <Id>#{id.toString().padStart(4, '0')}</Id>
        </div>
        <Gif src={secondaryImage} />
      </ColumnWrapper>
      <Image src={primaryImage} />
    </PokemonContainer>
  )
}

export default Pokemon
