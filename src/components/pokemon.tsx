import styled from 'styled-components'
import FavIcon from '../assets/favoriteIcon.svg'

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

interface PokemonProps {
  id: number
  name: string
  image: string
  handleFavorite: (id: number) => void
}

const Pokemon = (props: PokemonProps) => {
  const { id, name, image, handleFavorite } = props

  return (
    <PokemonContainer key={id}>
      <Icon src={FavIcon} onClick={() => handleFavorite(id)} />
      <div>
        <Id>#{id.toString().padStart(4, '0')}</Id>
        <Name>{name}</Name>
      </div>
      <Image src={image} />
    </PokemonContainer>
  )
}

export default Pokemon
