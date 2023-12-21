import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import logo from "../assets/taskText.png";
const Footer = () => {
  return (
    <div className="flex flex-col item-center justify-center  ">
      <h1 className="text-4xl text-center font-bold">Footer</h1>
      {/* footer start */}
      <div className="bg-ds-color">
        <footer className="footer p-10 container mx-auto text-white">
          <aside>
            <img className="w-36 lg:w-44" src={logo} alt="" />
            <p>
              Task Manager Ltd.
              <br />
              Empowering Your Efficiency, Every Step of the Way.
            </p>
          </aside>
          <nav>
            <header className="footer-title">Services</header>
            <a className="link link-hover">Task Management</a>
            <a className="link link-hover">Collaboration Tools</a>
            <a className="link link-hover">Project Planning</a>
            <a className="link link-hover">Time Tracking</a>
          </nav>
          <nav>
            <header className="footer-title">Company</header>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <header className="footer-title">Legal</header>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </footer>
      </div>

      {/* sub footer */}
      <div className="footer items-center px-8 py-2 bg-dp-color text-neutral-content">
        <aside className="items-center grid-flow-col">
          <p>Task Manager © 2023 - All right reserved</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a>
            <FaTwitter className="text-xl cursor-pointer opacity-60 hover:opacity-100 duration-300" />
          </a>
          <a>
            <FaYoutube className="text-xl cursor-pointer opacity-60 hover:opacity-100 duration-300" />
          </a>
          <a>
            <FaFacebook className="text-xl cursor-pointer opacity-60 hover:opacity-100 duration-300" />
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
