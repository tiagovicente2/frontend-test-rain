import React, { useRef, useState } from 'react'

import styled from 'styled-components'

import { useAuth } from '../hooks/useAuth'
import useIntersection from '../hooks/useIntersection'

import Menu from './menu'

import LogoutIcon from '../assets/logoutIcon.svg'
import ArrowUp from '../assets/up.svg'

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

const RoundedIcon = styled.img`
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
  const [hide, setHide] = useState(false)

  const headerRef = useRef<HTMLDivElement>(null)

  const goToTop = () => {
    setHide(hide)
    window.scrollTo(0, 0)
  }

  useIntersection({
    target: headerRef,
    onIntersect: goToTop,
    enabled: true
  })

  return (
    <>
      <Container>
        <Header ref={headerRef}>
          <Title>Pokedex</Title>
          <Menu activeMenu={activeMenu} />
          <RoundedIcon src={LogoutIcon} onClick={logout} />
        </Header>
        {children}
      </Container>
      <Footer />
    </>
  )
}

export default Layout
