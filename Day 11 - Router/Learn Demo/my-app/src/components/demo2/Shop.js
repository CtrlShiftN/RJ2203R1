import { BrowserRouter, Route, Routes } from "react-router-dom";
import Category from './Category';
import Product from './Product';

const Shop = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Category />}></Route>
                <Route path="/product" element={<Product />}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default Shop;