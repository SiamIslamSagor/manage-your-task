import { Link } from "react-router-dom";
import bannerBg from "../assets/taskManagerBannerImg.jpg";
const Banner = () => {
  const bannerBgStyle = {
    backgroundImage: `url(${bannerBg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <div
      style={bannerBgStyle}
      className=" relative h-[60vh] sm:h-[70vh] md:h-[700px] lg:h-[750px] 2xl:h-[820px] text-white "
    >
      <div
        className="flex flex-col h-full justify-center items-center bg-black bg-opacity-60 max-md:px-5
      "
      >
        <h1 className="text-xl md:text-3xl lg:text-4xl 2xl:text-5xl text-center font-bold">
          Smart Task Management
          <br />
          Elevated Experience
        </h1>
        <p className="text-center md:text-lg xl:text-xl 2xl:text-2xl max-w-3xl xl:max-w-4xl 2xl:max-w-5xl mt-2">
          Say goodbye to chaos and hello to clarity! Experience the simplicity
          of tracking, prioritizing, and completing tasks effortlessly, all
          within our powerful task management interface.
        </p>

        <Link to={"/dashboard"}>
          <button className="btn btn-neutral max-sm:btn-sm md:text-lg text-lp-color bg-ds-color mt-5 lg:mt-8">
            Let’s Explore
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
