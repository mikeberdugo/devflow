import './App.css'
import 'primereact/resources/themes/viva-dark/theme.css';  
import 'primereact/resources/primereact.min.css'; 
import 'primeicons/primeicons.css';  
import './css/flags.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login';
import { Projects } from './pages/Projects';
import { Dashboard } from './pages/home';
import { ProjectsArchived } from './pages/ProjectsArchived';
import { Teams } from './pages/Teams';
import { Roles } from './pages/Roles';
import { Meetings } from './pages/Meetings';
import { Daily } from './pages/Daily';
import { Difficulties } from './pages/Difficulties';
import { Notes } from './pages/Notes';
import { TaskReports } from './pages/TaskReports';
import { ProgressReports } from './pages/ProgressReports';
import { TeamReports } from './pages/TeamReports';
import { Support } from './pages/Contact/Support';
import { About } from './pages/Contact/About';
import { Feedback } from './pages/Contact/Feedback';
import { Register } from './pages/Createuser';




function App() {
  return (
    <BrowserRouter>
      <div className='container mx-auto'>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path='/Create/user' element={< Register />} /> 
          <Route path="/dashboard" element={< Dashboard />} />

          <Route path="/projects" element={< Projects />} />
          <Route path="/archived/profile" element={< ProjectsArchived />} />

          <Route path="/teams" element={< Teams />} />
          <Route path="/roles" element={< Roles />} />
          <Route path="/meetings" element={< Meetings />} />

          <Route path="/daily" element={< Daily />} />
          <Route path="/difficulties" element={< Difficulties />} />
          <Route path="/notes" element={< Notes />} />

          <Route path="/task/reports" element={< TaskReports />} />
          <Route path="/progress/reports" element={< ProgressReports />} />
          <Route path="/team/reports" element={< TeamReports />} />

          <Route path="/support" element={< Support />} />
          <Route path="/feedback" element={< Feedback />} />
          <Route path="/about" element={< About />} />


        </Routes>
        {/* <Toaster /> */}
      </div>
    </BrowserRouter>
  )
}

export default App
