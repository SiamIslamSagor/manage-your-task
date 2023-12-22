import { Link } from "react-router-dom";
import questionImg from "../assets/whoUseUs.png";
const WhoUseUs = () => {
  return (
    <div className="flex flex-col item-center justify-center  p-5 my-10">
      <h1 className="text-4xl border-y py-5 text-center font-bold">WhoUseUs</h1>
      <div className="flex flex-col md:flex-row items-center justify-around lg:container mx-auto">
        <div>
          <img className="max-sm:w-full max-w-lg" src={questionImg} alt="" />
        </div>
        <div>
          <h3 className="text-2xl font-medium lg:text-3xl lg:font-bold mb-2 max-w-lg">
            Explore Who Trusts Us for Streamlined Task Management
          </h3>
          <p className=" lg:text-lg max-w-lg">
            At Task Manager, we take pride in being the trusted choice for
            individuals and organizations seeking seamless task management
            solutions. Our diverse user base reflects the broad spectrum of
            industries and roles that benefit from our intuitive platform. From
            solo entrepreneurs maximizing their daily productivity to dynamic
            teams collaborating on complex projects, our platform adapts to your
            unique needs.
          </p>
          <Link to={"/dashboard"}>
            <button className="btn btn-neutral btn-sm lg:btn-md max-sm:btn-sm lg:text-lg text-lp-color bg-ds-color mt-5 lg:mt-8">
              Let’s Explore
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WhoUseUs;
