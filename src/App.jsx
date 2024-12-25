import { HashRouter, Route, Routes } from "react-router-dom";

import Home from "./components/pages/home/Home";
import Headphones from "./components/pages/headphones/Headphones";
import PageNotFound from "./components/PageNotFound";
import Speakers from "./components/pages/speakers/Speakers";
import Earphones from "./components/pages/earphones/Earphones";
import ProductDetail from "./components/pages/products/ProductDetail";
import Checkout from "./components/pages/checkout/Checkout";

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
