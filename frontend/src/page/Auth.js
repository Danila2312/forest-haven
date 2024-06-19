import React from "react";
import { Button, Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { NavLink, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;

  console.log(location);
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLogin ? "Авторизация" : "Регистрация"}</h2>
        <Form className="d-flex flex-column">
          <Form.Control className="mt-2" placeholder="Email" />
          <Form.Control className="mt-2" placeholder="Password" />
          <Button variant="outline-dark" className="mt-2 align-self-start">
            {isLogin ? "Войти" : "Зарегистрироваться"}
          </Button>
          {isLogin ? (
            <NavLink className="mt-2 align-self-end" to={REGISTRATION_ROUTE}>
              Нет аккаунта?
            </NavLink>
          ) : (
            <div className="mt-2 align-self-end">
              <NavLink className="mt-2" to={LOGIN_ROUTE}>
                Есть аккаунт?
              </NavLink>
            </div>
          )}
        </Form>
      </Card>
    </Container>
  );
};

export default Auth;
