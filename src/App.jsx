import Home from "./pages/Home";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

const App = () => {
  return (
    <Router>
        <Routes>
          <Route  path="/" element={<Home/>}/>
          <Route  path="/products" element={<ProductList/>}/>
          <Route  path="/product" element={<Product/>}/>
          <Route  path="/register" element={<Register/>}/>
          <Route  path="/login" element={<Login/>}/>
          <Route  path="/cart" element={<Cart/>}/>
          
        </Routes>
    </Router>
  );
};

export default App;