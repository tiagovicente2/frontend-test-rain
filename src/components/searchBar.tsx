import styled from 'styled-components'
import SearchIcon from '../assets/searchIcon.svg'
import { Button } from '../pages/Login'

const SearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 60%;
  height: auto;
  margin: 1rem 0;
  padding: 0 1rem;

  border: 2px solid #3763d2;
  border-radius: 5px;
`

const Input = styled.input`
  width: 100%;
  height: 3rem;

  border: none;
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  color: #3763d2;
  outline: none;

  &:placeholder {
    color: #3763d2;
  }
`

const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
`

const Icon = styled.img`
  width: 20px;
  margin-right: 5px;
  background-color: transparent;
`

interface SearchBarProps {
  onSearch: (value: string) => void
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const searchValue = formData.get('search') as string

    onSearch(searchValue)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value)
  }

  return (
    <SearchBarContainer>
      <Icon src={SearchIcon} />
      <Form onSubmit={handleSearch}>
        <Input
          type="text"
          name="search"
          placeholder="Search a pokemon by name"
          onChange={handleChange}
        />

        <div style={{ width: '100px' }}>
          <Button type="submit">Search</Button>
        </div>
      </Form>
    </SearchBarContainer>
  )
}

export default SearchBar
