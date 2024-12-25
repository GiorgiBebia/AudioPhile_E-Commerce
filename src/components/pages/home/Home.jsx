import { Category } from "../../Category";
import { HomeAbout } from "../../HomeAbout";
import { Footer } from "../../Footer";
import { Header } from "./Header";
import { HomeProducts } from "./HomeProducts";

function App() {
  return (
    <>
      <Header />
      <Category />
      <HomeProducts />
      <HomeAbout />
      <Footer />
    </>
  );
}

export default App;
