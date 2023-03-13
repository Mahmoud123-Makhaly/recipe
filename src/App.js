import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
 import Home from './Pages/Home'
import Cussine from './components/cussine/Cussine';
import Category from './components/category/Category';
import Navs from './components/Navs/Navs';
import Search from './components/search/Search';
 import Details from './components/Details/Details';
import Searched from './components/searched/Searched';
import { AnimatePresence } from 'framer-motion';
const App = () => {
  const location = useLocation()
  return (
    <div>
    <Navs/>
    <Search/>
    <Category/>
    <AnimatePresence exitBeforeEnter>
    <Routes location={location.pathname}>
 <Route path='/cussine/:type' element={<Cussine/>}/>
<Route path='/' element={<Home/>}/>
<Route path='/searched/:search' element={<Searched/>}/>
<Route path='/details/:id' element={<Details/>}/>
</Routes>
    </AnimatePresence>

    </div>
  )
}

export default App
