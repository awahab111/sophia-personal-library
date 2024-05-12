import Signup from '@pages/Signup.jsx'
import Login from '@pages/Login.jsx'
import Welcome from '@pages/Welcome.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import axios from 'axios';
// import MainFrame from '@components/MainFrame';
import '@fortawesome/fontawesome-free/css/all.css';


axios.defaults.baseURL = 'http://localhost:7000';

function App() {
  return (
    <>
    <div><Toaster/></div>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<Signup />} /> */}
        <Route path='/main' element= {<Welcome />} />
      </Routes>
    </BrowserRouter>

      {/* <Welcome/> */}

    </>
  )
}

export default App
