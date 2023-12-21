import textLogo from "../assets/taskText.png";

const Navbar = () => {
  return (
    <div className=" ">
      <div className="max-h-24 bg-gray-800">
        <nav>
          <div className="navbar bg-base-100">
            <div className="flex-1">
              <a className="">
                <img className="w-36 lg:w-44" src={textLogo} alt="" />
              </a>
            </div>
            <div className="flex-none">
              <div className="flex-none">
                <button className="btn btn-square btn-ghost">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-5 h-5 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
