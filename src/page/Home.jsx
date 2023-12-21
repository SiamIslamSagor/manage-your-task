import Navbar from "../components/Navbar";
import Banner from "../components/banner";
import WhoUseUs from "../components/WhoUseUs";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";

const Home = () => {
  return (
    <div className="">
      <Toaster />
      <Navbar />
      <Banner />
      <WhoUseUs />
      <Footer />
    </div>
  );
};

export default Home;
