import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import LandingPage from './pages/landingPage/LandingPage';
import Navbar from "../src/components/Navbar/Navbar";
import ProductPage from './pages/ProductPage/ProductPage';

function App() {

  return (
     
       <BrowserRouter>
              <Navbar/>
              <Routes>
                   <Route path="/" element={<LandingPage/>}/>
              </Routes>
              <Routes>
                   <Route path="/p" element={<ProductPage/>}/>
              </Routes>
       </BrowserRouter>
  )
}

export default App
