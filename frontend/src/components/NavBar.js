import React, { useContext } from "react"
import { NavLink } from "react-router-dom"
import { Context } from ".."
import { SHOP_ROUTE } from "../utils/consts"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Button} from 'react-bootstrap'
import { observer } from "mobx-react-lite";


const NavBar = observer( () => {
  const {user} = useContext(Context)

  return (
    <Navbar bg="light" data-bs-theme="light">
        <Container>
          <NavLink style={{color:'black'}} to={SHOP_ROUTE}>Forest & Haven</NavLink>
          {user.isAuth ?
          <Nav className="ml-auto">
            <Button variant="outline-dark">Админ</Button>
            <Button variant="outline-dark">Войти</Button>
          </Nav>
            :
          <Nav className="ml-auto">
            <Button variant="outline-dark" onClick={() => user.setIsAuth(true)}>Авторизация</Button>
          </Nav>
          }
        </Container>
      </Navbar>
  )
})

export default NavBar