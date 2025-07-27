import { useState } from "react";
import { Link } from "react-router-dom";
import { FaMusic, FaSearch, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#121212] text-white p-4 flex justify-between items-center z-20 relative">
      {/* Logo */}
      <div className="text-2xl">
        <FaMusic />
      </div>

      {/* Search bar */}
      <div className="hidden md:flex items-center relative w-80">
        <input
          type="text"
          name="searchbar"
          placeholder="Search Song"
          className="border-2 border-amber-50 rounded-2xl p-2 w-full bg-transparent text-white"
        />
        <FaSearch className="absolute right-3 top-2.5 cursor-pointer" />
      </div>

      {/* Hamburger icon */}
      <button
        className="md:hidden text-xl"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Desktop Menu */}
      <div className="hidden xl:flex md:items-center gap-10">
        <ul className="flex gap-6 font-semibold">
          <li className="hover:text-amber-200">
            <Link to="/premium">Premium</Link>
          </li>
          <li className="hover:text-amber-200">
            <Link to="/support">Support</Link>
          </li>
          <li className="hover:text-amber-200">
            <Link to="/download">Download</Link>
          </li>
          <li className="hover:text-amber-200">
            <Link to="/install">Install App</Link>
          </li>
        </ul>
        <div className="flex gap-4 items-center">
          <Link to="/signup">Signup</Link>
          <Link
            to="/login"
            className="bg-amber-50 text-black px-4 py-2 rounded-2xl font-medium"
          >
            Login
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#121212] flex flex-col gap-4 p-4 md:hidden z-10">
          <div className="flex flex-col gap-3 font-semibold">
            <Link to="/premium" className="hover:text-amber-200">
              Premium
            </Link>
            <Link to="/support" className="hover:text-amber-200">
              Support
            </Link>
            <Link to="/download" className="hover:text-amber-200">
              Download
            </Link>
            <Link to="/install" className="hover:text-amber-200">
              Install App
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <Link to="/signup">Signup</Link>
            <Link
              to="/login"
              className="bg-amber-50 text-black px-4 py-2 rounded-2xl font-medium"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
