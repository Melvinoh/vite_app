import React from 'react'
import "./App.css"
import Header from './components/header/Header'
import Search from './components/search/Search'
import { Outlet, RouterProvider,Navigate } from 'react-router'
import Navbar from './components/navbar/Navbar'
import { useState } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/home page/Home';
import Clubs from './pages/clubs pages/Clubs';
import SingleClub_pg from './pages/clubs pages/SingleClub_Pg';
import Schools from './pages/school pages/Schools';
import TukSoko from './pages/tuk soko/TukSoko';
import Leaders from './pages/leadership_page/leaders pages/Leaders';
import Gallery from './pages/gallery/Gallery';
import Sports from './pages/sports pages/Sports';
import Sport from './pages/sports pages/SingleSport_Pg';
import SchoolSchool_Pg from './pages/school pages/SingleSchool_Pg.jsx';
import Noticepage from './components/notifications/Noticepage';
import Landing from './components/landin page/Landing';
import Signup from './components/forms/Signup'
import Login from './components/forms/Login'



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

      const[openSignup ,setOpenSignup] = useState(false);
      const OpensignupHandler = ()=>{
        setOpenSignup(!openSignup)
      };
      const CloseformHandler = ()=>{
        setOpenform(false)
        setOpenSignup(false)
      };
// layout 
    const Layout = () => {
      return (
        <>
          <Header openNavfun={OpenNavHandler}  openformfun={OpenformHandler} isactive={openNav} />
          <div className="appwrapper">
            <Navbar isOpen={openNav} closefun={CloseNavHandler}/>
            <Search/>
            <div className="app_container">
              <Outlet />
            </div>
          </div>
         
          <Login  isOpen={openform} closefun={CloseformHandler}/>
        </>
      )
    }
    const current_user = true;

    const ProtectedRoute = ({children}) =>{
      if (!current_user) {
        return( <Navigate  to="/satuk" />)
      }
      return children;
    }

//router
    const Router = createBrowserRouter([
      {
        path : "/satuk",
        element:(
          <>
            <Landing  openformfun={OpenformHandler} signup={OpensignupHandler}/>
            <Signup  isOpen={openSignup} closefun={CloseformHandler}/>
            <Login  isOpen={openform} closefun={CloseformHandler}/>
          </>
        ),
      },
      {
        path : "/",
        element : (
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        ),
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
            path : "/clubs/:id",
            element : <SingleClub_pg/>
          },
          {
            path : "/schools",
            element : <Schools />
          },
          {
            path : "/schools/:id",
            element : <SchoolSchool_Pg />
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
            path : "/leadership/:id",
            element : <Leaders />
          },
          {
            path : "/gallery",
            element : <Gallery />
          },
          {
            path : "/sports",
            element : <Sports />
          },
          {
            path : "/sports/:id",
            element : <Sport />
          },
          {
            path : "home/Notices",
            element : <Noticepage />
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

