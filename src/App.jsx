import { HashRouter, Route, Routes } from "react-router-dom";

import Home from "./ui/Pages/Home/Home";
import Headphones from "./ui/Pages/Headphones/Headphones";
import PageNotFound from "./ui/Pages/PageNotFound";
import Speakers from "./ui/Pages/Speakers/Speakers";
import Earphones from "./ui/Pages/Earphones/Earphones";
import ProductDetail from "./ui/Pages/Products/ProductDetail";
import Checkout from "./ui/Pages/Checkout/Checkout";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/headphones" element={<Headphones />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/earphones" element={<Earphones />} />
        <Route path="/product/:name" element={<ProductDetail />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
