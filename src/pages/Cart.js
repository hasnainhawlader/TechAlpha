import { useState } from "react";
import { Link } from "react-router-dom";
import { currencyFormator } from "../utilities/currencyFormatter";

const data = [
  {
    id: 1,
    name: "Blink Mini – Compact indoor plug-in smart security camera",
    description:
      "Monitor the inside of your home day and night with our 1080P HD indoor plug-in smart security camera",
    price: 64.99,
    image:
      "https://res.cloudinary.com/dy28teazb/image/upload/v1668172648/React%20Shopping/Products/81-585-013-01_a04wkd.jpg",
    category: "Camera",
  },
  {
    id: 2,
    name: "Vlogging Camera, 4K Digital Camera for YouTube with WiFi",
    description:
      "It's super suitable for the 'happy snapper' who just hope to point and shoot to take good quality images",
    price: 109.99,
    image:
      "https://res.cloudinary.com/dy28teazb/image/upload/v1668172649/React%20Shopping/Products/81pgsjFGpmL_qundpd.jpg",
    category: "Camera",
  },
  {
    id: 3,
    name: "SAMSUNG 55-Inch Class Crystal 4K UHD AU8000 Series HDR",
    description:
      "Witness millions of shades of color through powerful Dynamic Crystal technology",
    price: 497.99,
    image:
      "https://res.cloudinary.com/dy28teazb/image/upload/v1668172649/React%20Shopping/Products/cl-uhd-tu7090-un50tu7090gxzs-rperspective-285965740_duusj5.png",
    category: "TV",
  },
];

const Cart = () => {
  const [count, setCount] = useState(1);
  const handleDecrease = () => {
    setCount((prvcount) => prvcount - 1);
  };
  const handleIncrease = () => {
    setCount((prvcount) => prvcount + 1);
  };
  return (
    <div className="cart-section container mx-auto">
      <h2 className="section-title uppercase text-2xl font-bold space-font text-center">
        your card
      </h2>
      <div className="cart-container ">
        <div className="product-headlines grid grid-cols-5 gap-10 border-b pb-3 uppercase font-medium">
          <div className="col-product col-span-2">product</div>
          <div className="col-unit-price">Unite price</div>
          <div className="col-quentity">Quantity</div>
          <div className="col-total-price ml-auto">Total Price</div>
        </div>

        {data.map((product) => (
          <div className="product grid grid-cols-5 border-b mt-2">
            <div className="left flex col-span-2 gap-5">
              <img
                src={product.image}
                alt={product.name}
                className="h-32 w-32 object-cover"
              />
              <div className="details flex flex-col gap-3 items-start">
                <span>{product.name}</span>
                <button className="uppercase text-gray-400 hover:text-rose-500 duration-300">
                  Remove
                </button>
              </div>
            </div>
            <div className="unit-price">{currencyFormator(product.price)}</div>
            <div className="counter flex">
              <button
                onClick={handleDecrease}
                className="h-10 w-10 bg-gray-100  border border-gray-300 active:bg-gray-700 active:text-gray-50"
              >
                -
              </button>
              <span className="h-10 w-10 bg-gray-100 flex justify-center items-center border border-gray-300">
                {count}
              </span>
              <button
                onClick={handleIncrease}
                className="h-10 w-10 bg-gray-100 border border-gray-300 active:bg-gray-700 active:text-gray-50"
              >
                +
              </button>
            </div>
            <div className="total-price  ml-auto">
              {currencyFormator(product.price)}
            </div>
          </div>
        ))}
      </div>
      <div className="cart-lower flex justify-between items-start py-10">
        <button className="clear-btn uppercase border py-3 px-8 hover:bg-rose-200 hover:text-rose-600 font-medium hover:border-rose-200 duration-300">
          Clear cart
        </button>
        <div className="flex flex-col items-start gap-2">
          <div className="top flex justify-between w-full text-2xl font-medium">
            <span className="text-sky-500">Subtotal</span>
            <span className="text-rose-500">{currencyFormator()}</span>
          </div>
          <p className="text-gray-400">
            Taxes and shipping costs are calculated at the checkout
          </p>
          <Link
            to="/"
            className="checkout bg-sky-500 w-full py-3 uppercase font-medium text-sky-50 tracking-widest hover:bg-sky-600 duration-300 text-center"
          >
            Checkout
          </Link>
          <Link
            to="/products"
            className="continune uppercase text-sky-500 font-medium"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;

/*<div className="img">
<img src="" alt="" />
</div>
<div className="details">
<span className="title"></span>
<button className="remove"></button>
</div>*/