import React from 'react'
import "./App.css"
import Header from './components/header/Header'
import  Login from './components/login_form/Login'
import { Outlet, RouterProvider, } from 'react-router'
import Navbar from './components/navbar/Navbar'
import { useState } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/home page/Home';
import Clubs from './pages/clubs _page/Clubs';
import Schools from './pages/schools_page/Schools';
import TukSoko from './pages/tuk soko/TukSoko';
import Leaders from './pages/leadership_page/schools_page/Leaders';
import Gallery from './pages/gallery/Gallery';
import Sports from './pages/sports/Sports';

function App() {
//hook state for nav openinig and close
  const [openNav, setOpenNav] = useState(false);
    const OpenNavHandler = ()=>{
        setOpenNav(!openNav)
    };
    const CloseNavHandler = ()=>{
      setOpenNav(false)
    }
//hook state for form opening and close
  const[openform ,setOpenform] = useState(false);
      const OpenformHandler = ()=>{
        setOpenform(!openform)
      };
      const CloseformHandler = ()=>{
        setOpenform(false)
      };
// layout 
    const Layout = () => {
      return (
        <>
          <Header openNavfun={OpenNavHandler}  openformfun={OpenformHandler} isactive={openNav} />
          <Login  isOpen={openform} closefun={CloseformHandler}/>
          <div className="app_container">
            <Navbar isOpen={openNav} closefun={CloseNavHandler}/>
            <Outlet />
          </div>
        </>
      )
    }
//router
    const Router = createBrowserRouter([
      {
        path : "/",
        element : <Layout />,
        children : [
          {
            path : "/home",
            element : <Home />
          },
          {
            path : "/clubs",
            element : <Clubs />
          },
          {
            path : "/schools",
            element : <Schools />
          },
          {
            path : "/tuk_soko",
            element : <TukSoko />
          },
          {
            path : "/leadership",
            element : <Leaders />
          },
          {
            path : "/gallery",
            element : <Gallery />
          },
          {
            path : "/sports",
            element : <Sports />
          }
        ]
      }
    ]);

  return (
    <div className='app'>
      <RouterProvider router={Router}/>
    </div>
  )
}

export default App

