import Home from './pages/Home';
import Navbar from './Navbar';
import Create from './pages/Create';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import BlogDetails from './pages/BlogDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <div className="content">
          <main>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/create' element={<Create/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/blogs/:id' element={<BlogDetails/>}/>
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;