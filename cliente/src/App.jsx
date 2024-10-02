import './App.css'
import 'primereact/resources/themes/mira/theme.css';  
import 'primereact/resources/primereact.min.css'; 
import 'primeicons/primeicons.css';  
import './css/flags.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login'


function App() {
  
  return (
    <BrowserRouter>
    <div className='container mx-auto'>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
        {/* <Toaster /> */}
    </div>
    </BrowserRouter>
  )
}

export default App
