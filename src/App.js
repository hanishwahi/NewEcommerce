 
import './Style/Style.css';
import './Style/Responsive.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductPage from './Pages/Products/ProductPage';
import Home from './Pages/Home/Home';
import ProductMain from './Pages/Products/ProductMain';
import Signup from './Pages/LoginSignup/Signup';
import Login from './Pages/LoginSignup/Login';
import NewLogin from './Firebase/NewLogin';
 

function App() {
   

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/newlogin" element={<NewLogin/>} />
          <Route path="/products" element={<ProductMain />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>

     
    </>
  );
}

export default App;
