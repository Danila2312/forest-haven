import React from "react";
import {BrowserRouter} from 'react-router-dom';
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      {/* <Main /> */}
      {/* <Footer /> */}
      <AppRouter /> 
    </BrowserRouter>
  );
}

export default App;
