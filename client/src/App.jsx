import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {PrimarySearchAppBar} from './components/Navigation'
import {BrowserRouter,Route,Routes,Navigate} from 'react-router-dom'
import { Login } from './pages/login'
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <>
      < Login />
    </>
    // <BrowserRouter>
    // <div className='container mx-auto'>
    //     <Routes>
    //       <Route path='/' element={< Login />} /> 
    //       {/* <Route path='/Create/user' element={< Register />} /> 
    //       <Route path='/Index' element={< Index />} /> 
    //       <Route path='/products' element={< Products />} /> 
    //       <Route path='/inventory' element={< Inventory />} /> 
    //       <Route path='/sales' element={< Sales />} /> 
    //       <Route path='/reports' element={< Reports />} /> 
    //       <Route path='/logout' element={< Logout />} />  */}
    //     </Routes>
    //     <Toaster />
    // </div>
    // </BrowserRouter>
  )
}

export default App
