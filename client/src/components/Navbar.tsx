import { useEffect, useState } from "react";
import { CiShoppingCart, CiUser, CiMenuBurger } from "react-icons/ci";
import { useNavigate, NavLink } from "react-router-dom";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [renderSidebar, setRenderSidebar] = useState(false);

  useEffect(() => {
    if (showMenu) {
      setRenderSidebar(true);
    } else {
      const timeout = setTimeout(() => {
        setRenderSidebar(false);
      }, 200); // match your animation duration
      return () => clearTimeout(timeout);
    }
  }, [showMenu]);

  return (
    <>
      <div className="bg-gray-200 min-h-16 py-2 flex justify-center items-center gap-8 md:gap-20 cursor-pointer">
        <CiMenuBurger
          onClick={() => setShowMenu(!showMenu)}
          className="md:hidden text-2xl cursor-pointer transform transition-transform duration-200 ease-in-out translate-x-0"
        />
        {renderSidebar && (
          <Sidebar showMenu={showMenu} setShowMenu={setShowMenu} />
        )}

        <div className="kridha-logo text-center ">
          {/* <img
          onClick={() => navigate("/")}
          src="./logo.png"
          alt="brand_logo"
          className="h-16"
        /> */}
          <h1
            onClick={() => navigate("/")}
            className="text-3xl md:text-4xl font-semibold cursor-pointer select-none"
          >
            Kridha Store
          </h1>
        </div>

        <div className="hidden md:flex justify-center items-center gap-5 cursor-pointer">
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

        <div className="flex justify-center items-center gap-3 md:gap-5 cursor-pointer">
          <CiShoppingCart
            className="text-3xl"
            onClick={() => navigate("/cart")}
          />
          <CiUser className="text-3xl" onClick={() => navigate("/profile")} />
        </div>
      </div>
      <div className="bg-black text-white text-xs text-center p-2">
        <p>Free Shipping on all orders above Rs. 1000.</p>
      </div>
    </>
  );
};

export default Navbar;
