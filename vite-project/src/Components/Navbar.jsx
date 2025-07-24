import { FaMusic } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

function Navbar() {
  return (
    <div className="flex bg-black text-white p-5 justify-between">
      <div className="flex gap-10 text-xl items-center">
        <a href="#">
          <FaMusic />
        </a>
        <div className="bg-gray-800 p-2  pl-3 rounded-2xl border-white">
          <input type="text" name="searchbar" placeholder="Search Song" />
          <button className="pr-3">
            <FaSearch />
          </button>
        </div>
      </div>

      <div className="flex gap-10">
        <div className="text-xl ">
          <ul className=" flex gap-20">
            <a href="">
              <il className=" hover:text-yellow-600">premium </il>
            </a>
            <a href="">
              <il className=" hover:text-yellow-600">Support</il>
            </a>
            <a href="">
              <il className=" hover:text-yellow-600">Download</il>
            </a>
            <a href="">
              <il className=" hover:text-yellow-600">Install App</il>
            </a>
          </ul>
        </div>

        <div className="flex gap-4">
          <button className="bg-white pl-3 pr-3 rounded-2xl text-black border-white  hover:bg-yellow-600">
            Sign-up
          </button>
          <button className="bg-white pl-3 pr-3 rounded-2xl text-black border-white  hover:bg-yellow-600">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
