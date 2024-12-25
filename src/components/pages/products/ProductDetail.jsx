import { useLocation } from "react-router-dom";
import { miniProducts } from "../../../data/miniProducts";
import { products } from "../../../data/products";
import { Category } from "../../Category";
import { HomeAbout } from "../../HomeAbout";
import { Footer } from "../../Footer";

import { GoBack } from "../../GoBack";
import { ProductHeader } from "./ProductHeader";
import { FeaturesInTheBox } from "./FeaturesInTheBox";
import { AlsoLike } from "./AlsoLike";
import { ImageDiv } from "./ImageDiv";

import { ProductMain } from "./ProductMain";

function ProductDetail() {
  const arr = [...products, ...miniProducts];
  const location = useLocation();
  const link = location.pathname.split("/");
  link.shift();
  link.shift();
  const newLink = link[0].split("%20").join(" ");
  const item = arr.find((item) => item.name === newLink);

  return (
    <div>
      <ProductHeader />
      <GoBack />
      <ProductMain newItem={item} />
      <FeaturesInTheBox newItem={item} />
      <ImageDiv newItem={item} />
      <AlsoLike item={item} />
      <Category />
      <HomeAbout />
      <Footer />
    </div>
  );
}

export default ProductDetail;
