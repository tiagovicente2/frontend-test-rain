import styled from 'styled-components'
import SearchIcon from '../assets/searchIcon.svg'

const SearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 60%;
  height: auto;
  margin: 1rem 0;

  border: 2px solid #3b4cca;
  border-radius: 5px;
`

const Input = styled.input`
  width: 100%;
  height: 4rem;

  border: none;
  font-family: 'Pokemon Solid', sans-serif;
  color: #3b4cca;
  outline: none;

  &:placeholder {
    color: #3b4ccaa6;
  }
`

const SearchBar = () => (
  <SearchBarContainer>
    <img
      src={SearchIcon}
      style={{
        width: '15px',
        height: '15px',
        margin: '0 3px',
        backgroundColor: 'transparent'
      }}
    />
    <Input type="text" placeholder="Search" />
  </SearchBarContainer>
)

export default SearchBar
