type Category = {
  id: number;
  name: string;
  slug: string;
  image: string;
};

const Categories: Category[] = [
  {
    id: 1,
    name: "Pendants",
    slug: "pendants",
    image:
      "https://www.boldpetals.in/cdn/shop/collections/FullSizeRender.jpg?v=1745181260&width=535",
  },
  {
    id: 2,
    name: "Custom Packaging",
    slug: "custom-packaging",
    image:
      "https://www.boldpetals.in/cdn/shop/collections/81b4f4037aa91f267a09c49aab62dc75.jpg?v=1745793716&width=535",
  },
  {
    id: 3,
    name: "Bracelets",
    slug: "bracelets",
    image:
      "https://www.boldpetals.in/cdn/shop/collections/IMG-0310.jpg?v=1745181573&width=535",
  },
  {
    id: 4,
    name: "Wishing Cards",
    slug: "Wishing-cards",
    image:
      "https://www.boldpetals.in/cdn/shop/files/IMG-20250429-WA0058.jpg?v=1745876217&width=535",
  },
  {
    id: 5,
    name: "Hampers",
    slug: "hampers",
    image:
      "https://www.boldpetals.in/cdn/shop/collections/hampers.jpg?v=1745226831&width=535",
  },
  {
    id: 6,
    name: "Scrunchies",
    slug: "scrunchies",
    image:
      "https://www.boldpetals.in/cdn/shop/collections/FullSizeRender_6e1ed548-c893-4d9e-84f2-9c5050bda6a1.jpg?v=1745181406&width=535",
  },
  {
    id: 7,
    name: "Claws",
    slug: "claws",
    image:
      "https://www.boldpetals.in/cdn/shop/collections/claws.jpg?v=1745226154&width=535",
  },
  {
    id: 8,
    name: "Hairbows",
    slug: "hairbows",
    image:
      "https://www.boldpetals.in/cdn/shop/collections/hairbows.jpg?v=1745226053&width=535",
  },
  {
    id: 9,
    name: "Earrings",
    slug: "earrings",
    image:
      "https://www.boldpetals.in/cdn/shop/collections/earrings.jpg?v=1745227264&width=535",
  },
  {
    id: 10,
    name: "Jhumka",
    slug: "jhumka",
    image:
      "https://www.boldpetals.in/cdn/shop/collections/earrings.jpg?v=1745227264&width=535",
  },
  {
    id: 11,
    name: "Keyrings",
    slug: "keyrings",
    image:
      "https://www.boldpetals.in/cdn/shop/collections/IMG-0311.jpg?v=1745181654&width=535",
  },
  {
    id: 12,
    name: "Rings",
    slug: "rings",
    image:
      "https://www.boldpetals.in/cdn/shop/collections/WhatsApp_Image_2025-04-21_at_14.28.02_bd404555.jpg?v=1745226033&width=535",
  },
];

import { useNavigate } from "react-router-dom";
import Banner from "../assets/banner.jpg";
import { FaArrowRightLong } from "react-icons/fa6";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-full bg-white">
      <div className="banner relative">
        <img
          src={Banner}
          alt="banner"
          className="w-full h-48 object-left object-cover md:h-full md:object-center "
        />

        {/* Black tint overlay */}
        <div className="absolute inset-0 bg-black/60 md:bg-black/50" />
        {/* Centered Text */}

        <div className="absolute flex flex-col gap-2 md:gap-5 justify-center text-center items-center right-0 top-0 h-full w-full md:w-1/2">
          <span className="hidden md:block text-2xl md:text-6xl text-white">
            Welcome to the <h1 className="my-1">Kridha Craft Store</h1>
          </span>

          <h1 className="text-lg md:text-2xl text-white ">
            Handmade with love ❤️
          </h1>
          <button
            onClick={() => navigate("/all-products")}
            className=" text-xs md:text-sm font-bold text-white flex gap-1 items-center justify-center border border-white rounded-full py-2 px-3 md:py-2 md:px-4 cursor-pointer"
          >
            Shop All
            <FaArrowRightLong />
          </button>
        </div>
      </div>

      <div className="categories h-full flex flex-col items-center justify-center">
        <h2 className="text-2xl w-[80%] font-semibold text-black my-6 md:px-6">
          Categories
        </h2>

        <div className="text-black  md:w-[80%] grid grid-cols-2 md:grid-cols-5 gap-4 mx-6">
          {Object.entries(Categories).map((category) => {
            return (
              <div
                key={category[0]}
                // onClick={() => navigate(`/category/${category[0]}`)}
                className="flex flex-col items-center gap-2 cursor-pointer hover:underline "
              >
                <img
                  src={category[1].image}
                  alt={category[0]}
                  className="w-40 h-40 object-cover rounded-lg"
                />
                <h2 className="text-sm md:text-lg font-semibold flex items-center gap-2">
                  {category[1].name}
                  <FaArrowRightLong />
                </h2>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
