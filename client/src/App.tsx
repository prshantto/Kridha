import { Routes, Route } from "react-router-dom";

import Signup from "./auth/Signin";
import Signin from "./auth/Signup";
import Logout from "./auth/Logout";
import Profile from "./auth/Profile";

import Home from "./pages/Home";
import Product from "./pages/Product";
import AllProduct from "./pages/AllProduct";
import Cart from "./pages/Cart";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Checkout from "./pages/Checkout";
import OurPolicies from "./pages/OurPolicies";
import TrackOrder from "./pages/TrackOrder";
import Collections from "./pages/Collections";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/all-products" element={<AllProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/check-out" element={<Checkout />} />
        <Route path="/our-policies" element={<OurPolicies />} />
        <Route path="/track-order" element={<TrackOrder />} />
        <Route path="/collections" element={<Collections />} />

        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

      <div className="h-[1px] w-full bg-gray-500 mt-8" />

      <Footer />
    </>
  );
}

export default App;
