import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup2 from './Signup2'
import {BrowserRouter,Routes ,Route} from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import './index.css'
function App() {
  

  return (
   <BrowserRouter>
   <Routes>
    
    <Route path='/register2' element={<Signup2/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/home' element={<Home/>}></Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App
