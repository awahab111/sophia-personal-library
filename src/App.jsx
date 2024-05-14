import Signup from '@pages/Signup.jsx'
import Login from '@pages/Login.jsx'
import Welcome from '@/pages/Welcome/Welcome.jsx'
import MyShelf from '@/pages/My Shelf/MyShelf.jsx'
import ReadView from '@pages/Read/ReadView'
import BookInformation from '@pages/Book Information/BookInformation'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { useUserStore } from './components/zuStore'
// import MainFrame from '@components/MainFrame';
import '@fortawesome/fontawesome-free/css/all.css';


axios.defaults.baseURL = 'http://localhost:7000';

function App() {
  return (
    <>
    <div><Toaster/></div>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/main' element= {<Welcome />} />
          <Route path='/myshelf' element= {<MyShelf />} />
          <Route path='/read/:bookname' element= {<ReadView />} />
          <Route path='/book/:book' element= {<BookInformation />} />

      </Routes>
    </BrowserRouter>

      {/* <Welcome/> */}

    </>
  )
}

export default App
