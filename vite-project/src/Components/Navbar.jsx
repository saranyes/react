import { FaMusic } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import Premium from "../Pages/Premium";

function Navbar() {
  return (
    <div className="flex bg-[#121212]  text-white p-2 justify-between font-semibold items-center ">
      <div className="flex gap-10 text- items-center">
        <a href="#" className="text-2xl">
          <FaMusic />
        </a>

        <div className=" pl-3 rounded-2x relative ">
          <input
            type="text"
            name="searchbar"
            placeholder="Search Song"
            className="border-2 border-amber-50 rounded-2xl pl-5 w-60"
          />
        </div>
        <button className=" cursor-pointer absolute left-70 items-center">
          <FaSearch />
        </button>
      </div>

      <div className="flex gap-10 items-center">
        <div className="Navbar">
          <ul className=" flex gap-20">
            <li className=" hover:text-amber-200 ">
              <Link to="/Premium">premium</Link>
            </li>
            <li className=" hover:text-amber-200 ">
              <Link to="/Support">Support</Link>
            </li>
            <li className=" hover:text-amber-200 ">
              <Link to="">Download</Link>
            </li>
            <li className=" hover:text-amber-200 ">
              <Link to="">Install App</Link>
            </li>
          </ul>
        </div>

        <div className="flex gap-5 items-center ">
          <button className="bg-amber-50 p-2 rounded-2xl text-black border-white cursor-pointer ">
            Sign-up
          </button>
          <button className="bg-amber-50 p-2  rounded-2xl text-black border-white  cursor-pointer">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
