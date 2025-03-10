import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

function NavBar() {
    return (
    <nav className="flex items-center justify-between px-4 py-2 shadow-md pl-8 pr-8 w-[100%]">
      {/* Logo */}
      <div className="flex items-center">
        <a href="/">
          <img
          src="data:image/jpeg;base64,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" // Replace with the actual logo path
          alt="Logo"
          className="h-10 w-20 rounded-full shadow-md"
        />
        </a>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center bg-white rounded-full shadow-md px-6 py-2 space-x-10">
        <Link to="/ImamIdeja" className="text-black font-bold">ИмамИдеја</Link>
        <Link to="/BarPage" className="text-black font-bold">AI-бар</Link>
        <Link to="/WebShop" className="text-black font-bold">AI-продавница</Link>
        <Link to="/Podcast" className="text-black font-bold">Подкасти</Link>
      </div>

      {/* User Icon */}
      <div className="flex items-center ">
        <button className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-md">
          <FaUser className="text-gray-600" />
          {/*<span className="ml-1 font-bold"></span>*/}
        </button>
      </div>
    </nav>
  );
}

export default NavBar