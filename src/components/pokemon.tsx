import styled from 'styled-components'
import FavIcon from '../assets/favoriteIconFill.svg'
import UnfavIcon from '../assets/favoriteIcon.svg'

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

const Id = styled.h1`
  font-size: 20px;
  font-weight: bold;
  color: #3763d2;
`
const Name = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: #3763d2;

  text-transform: capitalize;
`
const Image = styled.img`
  height: 120px;
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
  const { id, name, image, handleFavorite, favorited } = props

  const icon = favorited ? FavIcon : UnfavIcon
  const imageSrc =
    image ||
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`

  const poke: PokemonProps = {
    id,
    name,
    image: imageSrc,
    favorited
  }

  return (
    <PokemonContainer key={id}>
      <Icon src={icon} onClick={() => handleFavorite && handleFavorite(poke)} />
      <div>
        <Id>#{id.toString().padStart(4, '0')}</Id>
        <Name>{name}</Name>
      </div>
      <Image src={imageSrc} />
    </PokemonContainer>
  )
}

export default Pokemon
