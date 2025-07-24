import { FaMusic } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

function Navbar() {
  return (
    <div className="flex bg-black  text-white p-2 justify-between font-semibold items-center border-2 border-gray-500">
      <div className="flex gap-10 text- items-center">
        <a href="#" className="text-2xl">
          <FaMusic />
        </a>
        <div className=" bg-black   pl-3 rounded-2x relative ">
          <input
            type="text"
            name="searchbar"
            placeholder="Search Song"
            className="border-2 border-amber-50 rounded-2xl pl-5 w-60"
          />
        </div>
        <button className=" cursor-pointe absolute left-70 items-center">
          <FaSearch />
        </button>
      </div>

      <div className="flex gap-10 items-center">
        <div className=" ">
          <ul className=" flex gap-20">
            <a href="">
              <il className=" hover:text-amber-200 ">premium </il>
            </a>
            <a href="">
              <il className=" hover:text-amber-200 ">Support</il>
            </a>
            <a href="">
              <il className=" hover:text-amber-200 ">Download</il>
            </a>
            <a href="">
              <il className=" hover:text-amber-200 ">Install App</il>
            </a>
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
