import { RxCross1 } from "react-icons/rx";
import { useNavigate, NavLink } from "react-router-dom";
import "../styles/Sidebar.css";

type SidebarProps = {
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
};
const Sidebar = ({ showMenu, setShowMenu }: SidebarProps) => {
  const navigate = useNavigate();

  return (
    <div
      className={`absolute left-0 top-0 bg-gray-300 w-[70%] h-full transform transition-transform duration-200 ease-in-out translate-x-0 z-50 ${
        showMenu ? "animate-slidein" : "animate-slideout"
      }`}
    >
      <div className="h-[10%] flex justify-between items-center p-4">
        <RxCross1 className="text-3xl" onClick={() => setShowMenu(!showMenu)} />
        <h1
          onClick={() => navigate("/")}
          className="  text-3xl md:text-4xl font-semibold cursor-pointer select-none"
        >
          Kridha Store
        </h1>
      </div>

      <div
        onClick={() => setShowMenu(!showMenu)}
        className="h-[80%] flex flex-col pt-12 items-center gap-5 cursor-pointer text-lg font-semibold"
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "underline " : "text-black hover:underline"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/collections"
          className={({ isActive }) =>
            isActive ? "underline " : "text-black hover:underline"
          }
        >
          Collections
        </NavLink>
        <NavLink
          to="/all-products"
          className={({ isActive }) =>
            isActive ? "underline " : "text-black hover:underline"
          }
        >
          All Products
        </NavLink>
        <NavLink
          to="/track-order"
          className={({ isActive }) =>
            isActive ? "underline " : "text-black hover:underline"
          }
        >
          Track Order
        </NavLink>
        <NavLink
          to="/our-policies"
          className={({ isActive }) =>
            isActive ? "underline " : "text-black hover:underline"
          }
        >
          Our Policies
        </NavLink>
        <NavLink
          to="/about-us"
          className={({ isActive }) =>
            isActive ? "underline " : "text-black hover:underline"
          }
        >
          About Us
        </NavLink>
        <NavLink
          to="/contact-us"
          className={({ isActive }) =>
            isActive ? "underline " : "text-black hover:underline"
          }
        >
          Contact Us
        </NavLink>
      </div>

      <div className="h-[10%] text-xs text-center font-bold text-gray-600 p-3">
        <p>© 2025 Kridha Store | All rights reserved</p>
        <p>Made with ❤️ in India</p>
      </div>
    </div>
  );
};

export default Sidebar;
