import './App.css'
import 'primereact/resources/themes/viva-dark/theme.css';  
import 'primereact/resources/primereact.min.css'; 
import 'primeicons/primeicons.css';  
import './css/flags.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login';
import { Projects } from './pages/Projects';
import { Dashboard } from './pages/home';

function App() {
  
  return (
    <BrowserRouter>
    <div className='container mx-auto'>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={< Dashboard />} />
          <Route path="/projects" element={< Projects />} />
        </Routes>
        {/* <Toaster /> */}
    </div>
    </BrowserRouter>
  )
}

export default App
