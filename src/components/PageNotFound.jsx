import { Footer } from "../components/Footer";
import { HeaderNav } from "../components/HeaderNav";

function PageNotFound() {
  return (
    <div className="bg-black">
      <HeaderNav />
      <Error404 />
      <Footer />
    </div>
  );
}

export default PageNotFound;

function Error404() {
  return (
    <div className="mt-[150px] text-[72px] mx-auto w-[520px]">
      <h2 className="text-white text-center">Page Not Found</h2>
    </div>
  );
}
