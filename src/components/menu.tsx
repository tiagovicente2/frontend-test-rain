import React, { useState } from 'react'

import styled from 'styled-components'

const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;

  margin: 2rem 0;
`

const MenuItem = styled.div<{ isActive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 10rem;
  height: 2rem;

  font-family: 'Pokemon Solid', sans-serif;
  color: #3763d2;

  border-bottom: ${({ isActive }) => (isActive ? '2px solid #ffcb05' : 'none')};

  &:hover {
    cursor: pointer;
  }
`

interface MenuProps {
  activeMenu: string
  activate: (value: string) => void
}

const Menu = (props: MenuProps) => {
  const { activeMenu, activate } = props

  return (
    <MenuContainer>
      <MenuItem
        isActive={activeMenu === 'pokemons'}
        onClick={() => activate('pokemons')}
      >
        Pokemons
      </MenuItem>

      <MenuItem
        isActive={activeMenu === 'favorites'}
        onClick={() => activate('favorites')}
      >
        Favorites
      </MenuItem>
    </MenuContainer>
  )
}

export default Menu
