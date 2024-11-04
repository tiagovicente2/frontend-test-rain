import React from 'react'

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

const Title = styled.h1`
  color: white;
  text-align: center;
  font-size: 30px;
  font-family: 'Pokemon Solid', sans-serif;
  color: #3b4cca;
  left: 1rem;
  position: absolute;
`
type LayoutProps = {
  children: React.ReactNode
  activeMenu: string
  setActiveMenu: (value: string) => void
}

const Layout = (props: LayoutProps) => {
  const { children, activeMenu, setActiveMenu } = props

  return (
    <Container>
      <Header>
        <Title>Pokedex</Title>
        <Menu
          activeMenu={activeMenu}
          activate={(value: string) => setActiveMenu(value)}
        />
      </Header>
      {children}
      <Footer />
    </Container>
  )
}

export default Layout
