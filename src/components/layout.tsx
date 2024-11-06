import React, { useState } from 'react'

import styled from 'styled-components'

import Menu from './menu'
import LogoutIcon from '../assets/logoutIcon.svg'
import { useAuth } from '../hooks/useAuth'

const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
`

const Header = styled.header`
  display: flex;
  width: 78%;
  height: 5rem;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
`

const Footer = styled.footer`
  height: 30px;
  width: 100%;
  display: flex;
`

export const Title = styled.h1`
  text-align: center;
  font-size: 30px;
  font-family: 'Pokemon Solid', sans-serif;
  color: #3763d2;
`

const Logout = styled.img`
  width: 20px;
  cursor: pointer;
  display: flex;

  background: #ffcb05;
  border-radius: 20%;
  padding: 5px;
`

interface LayoutProps {
  activeMenu: string
  children: React.ReactNode
}

const Layout = ({ activeMenu, children }: LayoutProps) => {
  const { logout } = useAuth()

  return (
    <>
      <Container>
        <Header>
          <Title>Pokedex</Title>
          <Menu activeMenu={activeMenu} />
          <Logout src={LogoutIcon} onClick={logout} />
        </Header>
        {children}
      </Container>
      <Footer />
    </>
  )
}

export default Layout
