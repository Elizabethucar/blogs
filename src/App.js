
import './index.css'
import Navbar from './Navbar';
import Home from './Home';
import Create from './Create'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {



  return (
    <BrowserRouter>

      <div className='App'>
        <Navbar />
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/create' element={<Create />} />
            <Route path='/blogs/:id' element={<BlogDetails />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
