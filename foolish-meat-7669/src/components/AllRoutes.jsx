import {Routes, Route} from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Orders from "../pages/Orders";
import Cart from "../pages/Cart";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import ProductNotFound from "../pages/ProductNotFound";
import Product from "../pages/Product";
import Payment from "../pages/Payment";



function AllRoutes(){

    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="login" element={<Login/>}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/notfound" element={<NotFound/>}></Route>
            <Route path="/prodnt" element={<ProductNotFound />}></Route>
            <Route path="/product/:category" element={<Product/>}></Route>
            <Route path="/orders" element={<Orders/>}></Route>
            <Route path="/cart" element={<Cart/>}></Route>
            <Route path="/payment" element={<Payment />}></Route>
        </Routes>
    )
}

export default AllRoutes;