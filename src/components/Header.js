import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { selectCars } from '../features/car/carSlice'
import { useSelector } from 'react-redux'

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false)
  const cars = useSelector(selectCars)

  return (
    <Container>
      <a href="#">
        <img src="/images/logo.svg" alt="TSLA" />
      </a>
      <Menu>
        {cars &&
          cars.map((car, index) => (
            <a key={index} href="#">
              {car}
            </a>
          ))}
      </Menu>
      <RightMenu>
        <p>
          <a href="#">SHOP</a>
        </p>
        <p>
          <a href="#">TESLA ACCOUNT</a>
        </p>
        <Hamburger onClick={() => setBurgerStatus(true)} />
        <HamburgerNav show={burgerStatus}>
          <CloseWrapper>
            <CloseButton onClick={() => setBurgerStatus(false)} />
          </CloseWrapper>
          {cars &&
            cars.map((car, index) => (
              <li>
                <a key={index} href="#">
                  {car}
                </a>
              </li>
            ))}

          <li>
            <a href="#">Existing Inventory</a>
          </li>
          <li>
            <a href="#">Used Inventory</a>
          </li>
          <li>
            <a href="#">Trade-in</a>
          </li>
          <li>
            <a href="#">Cybertrukck</a>
          </li>
          <li>
            <a href="#">Roadaster</a>
          </li>
        </HamburgerNav>
      </RightMenu>
    </Container>
  )
}

export default Header

const Container = styled.div`
  z-index: 10;
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
`

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: no-wrap;
  }

  @media (max-width: 768px) {
    display: none;
  }
`

const RightMenu = styled.div`
  display: flex;
  align-items: center;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: no-wrap;
  }
`

const Hamburger = styled(MenuIcon)`
  cursor: pointer;
`

const HamburgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: #fff;
  width: 300px;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease-in-out;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    a {
      font-weight: 600;
    }
  }
`
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

const CloseButton = styled(CloseIcon)`
  cursor: pointer;
`
