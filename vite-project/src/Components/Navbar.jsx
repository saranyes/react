import { FaMusic } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

function Navbar() {
  return (
    <div className="flex bg-gray-800 text-white p-5 justify-between font-semibold items-center">
      <div className="flex gap-10 text-xl items-center">
        <a href="#">
          <FaMusic />
        </a>
        <div className="bg-gray-800 p-2  pl-3 rounded-2xl border-white">
          <input type="text" name="searchbar" placeholder="Search Song" />
          <button className="pr-3 cursor-pointer">
            <FaSearch />
          </button>
        </div>
      </div>

      <div className="flex gap-10">
        <div className="text-xl ">
          <ul className=" flex gap-20">
            <a href="">
              <il className="">premium </il>
            </a>
            <a href="">
              <il className="">Support</il>
            </a>
            <a href="">
              <il className="">Download</il>
            </a>
            <a href="">
              <il className="">Install App</il>
            </a>
          </ul>
        </div>

        <div className="flex gap-4 items-center">
          <button className="bg-white p-2 rounded-2xl text-black border-white ">
            Sign-up
          </button>
          <button className="bg-white p-2 rounded-2xl text-black border-white ">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
