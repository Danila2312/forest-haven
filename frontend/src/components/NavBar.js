import React, { useContext } from "react"
import { NavLink } from "react-router-dom"
import { Context } from ".."
import { SHOP_ROUTE } from "../utils/consts"

const NavBar = () => {
  const {user} = useContext(Context)

  return (
    <header>
      <div className="header-wrapper">
        <div>
          <NavLink to={SHOP_ROUTE}><h1>FOREST <span className="inter">&</span> HAVEN</h1> </NavLink>
        </div>
        <nav>
          <ul>
            <li><a href="">О нас</a></li>
            <li><a href="">Дома</a></li>
            <li><a href="">Забронировать</a></li>
          </ul>
        </nav>
        <div>
          <img src="static/img/telegram.png" alt="" />
          <img src="static/img/whatsapp.png" alt="" />
          <img src="static/img/image11.png" alt="" />
        </div>
        <div>
          <Button></Button>
          <a href="">Войти</a>
          <a href="">Регистрация</a>
        </div>
      </div>
    </header>
  )
}

export default NavBar