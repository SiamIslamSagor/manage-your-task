import Lottie from "lottie-react";
import errorAnim from "../assets/notFoundAnim.json";
import { BsChevronDoubleLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const ErrorPage = () => {
  return (
    <div className="container mx-auto flex flex-col  items-center justify-center">
      <Helmet>
        <title>ERR</title>
      </Helmet>
      <div className="anim-div">
        <Lottie animationData={errorAnim} loop={true}></Lottie>;
      </div>
      <div>
        <div className="border p-10 rounded-lg m-2">
          <h2 className="text-5xl">Page not found</h2>
          <Link to="/">
            <button className="btn mt-4 font-fontSquare btn-ghost text-blue-700 font-bold">
              <BsChevronDoubleLeft></BsChevronDoubleLeft>
              Go Back Our Side
            </button>
          </Link>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
