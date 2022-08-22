import React from 'react';
import { useLocation } from "react-router-dom";
import classNames from 'classnames';
import style from './App.module.scss';
import Navbar from './components/Navbar/Navbar';
import AllRoutes from './routes';

function App() {
  const { pathname } = useLocation();
  
  return (
    <div className={classNames(style.App, pathname=='/' && style.home_noScroll)}>
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
