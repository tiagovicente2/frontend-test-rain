import React, { useState } from 'react'

import styled from 'styled-components'
import Menu from './menu'

const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
`

const Header = styled.header`
  display: flex;
  width: 100%;
  height: 5rem;
  justify-content: center;
  align-items: center;
`

const Footer = styled.footer`
  background-color: red;
`

export const Title = styled.h1`
  color: white;
  text-align: center;
  font-size: 30px;
  font-family: 'Pokemon Solid', sans-serif;
  color: #3763d2;
  left: 4rem;
  position: absolute;
`
interface LayoutProps {
  activeMenu: string
  children: React.ReactNode
}

const Layout = ({ activeMenu, children }: LayoutProps) => {
  return (
    <Container>
      <Header>
        <Title>Pokedex</Title>
        <Menu activeMenu={activeMenu} />
      </Header>
      {children}
      <Footer />
    </Container>
  )
}

export default Layout
