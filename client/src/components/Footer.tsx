import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="h-[10%] text-[10px] text-center font-bold cursor-pointer p-3">
        <p>Copyright © 2025 Kridha Craft Store</p>
        <div>
          <NavLink to="/our-policies" className="hover:underline">
            Privacy Policy
          </NavLink>
          <span> | </span>
          <NavLink to="/contact-us" className="hover:underline">
            Refund Policy
          </NavLink>
          <span> | </span>
          <NavLink to="/track-order" className="hover:underline">
            Contact Information
          </NavLink>
        </div>
        <p>Made with ❤️ in India</p>
      </div>
    </>
  );
};

export default Footer;
