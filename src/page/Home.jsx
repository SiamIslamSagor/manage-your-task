import Navbar from "../components/Navbar";
import WhoUseUs from "../components/WhoUseUs";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";
import Banner from "../components/Banner";

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
