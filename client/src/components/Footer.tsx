import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="text-sm text-gray-500 text-center my-5">
        © {new Date().getFullYear()}, Kridha Craft Store ·{" "}
        <NavLink to="/our-policies" className="underline hover:text-pink-600">
          Privacy Policy
        </NavLink>{" "}
        ·{" "}
        <NavLink
          to="/contact-information"
          className="underline hover:text-pink-600"
        >
          Contact Information
        </NavLink>{" "}
        ·{" "}
        <NavLink to="/our-policies" className="underline hover:text-pink-600">
          Refund Policy
        </NavLink>
        <p>Made with ❤️ in India</p>
      </div>
    </footer>
  );
};

export default Footer;
