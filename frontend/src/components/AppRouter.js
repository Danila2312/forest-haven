import React from "react";
import { authRoutes, publicRoutes } from "../routes";
import { Routes, Route } from "react-router-dom";
// import { SHOP_ROUTE } from "../utils/consts";


const AppRouter = () => {
  const isAuth = false
  return (
  <Routes>
    {isAuth && authRoutes.map(({path, Component}) => 
      <Route key={path} path={path} Component={Component} exact/>
    )}
    {publicRoutes.map(({path, Component}) => 
    <Route key={path} path={path} Component={Component} exact/>
    )}
  </Routes>

  );
  
};

export default AppRouter;
