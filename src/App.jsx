import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

function App(){
    return (
        <Router>
        <Routes>
            <Route exact path='/' exact element={<Home />} />
            <Route path='/product' element={<Product/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/Cart' element={<Cart/>} />
            <Route path='/productlist' element={<ProductList/>} />
        </Routes>
        </Router>
    )
}

export default App;