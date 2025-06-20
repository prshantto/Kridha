// Checkout.tsx
import { useForm } from "react-hook-form";

interface CheckoutFormData {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
}

const cartItems = [
  { id: 1, name: "Crystal Pendant", quantity: 1, price: 299 },
  { id: 2, name: "Bracelet Set", quantity: 2, price: 199 },
];

const SHIPPING_CHARGE = 70;
const HANDLING_FEE = 20;
const TAX_RATE = 0.18;

const Checkout = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormData>();

  const onSubmit = (data: CheckoutFormData) => {
    console.log("Checkout Data:", data);
    alert("Order placed successfully!");
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const tax = subtotal * TAX_RATE;
  const total = subtotal + SHIPPING_CHARGE + HANDLING_FEE + tax;

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-10">
        Checkout
      </h1>

      <div className="max-w-3xl mx-auto mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Your Cart</h2>
        <ul className="space-y-2">
          {cartItems.map((item) => (
            <li key={item.id} className="flex justify-between text-gray-700">
              <span>
                {item.name} × {item.quantity}
              </span>
              <span>₹{item.price * item.quantity}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 space-y-1 text-gray-800 text-right">
          <p>Subtotal: ₹{subtotal.toFixed(2)}</p>
          <p>Shipping: ₹{SHIPPING_CHARGE}</p>
          <p>Handling Fee: ₹{HANDLING_FEE}</p>
          <p>Tax (18%): ₹{tax.toFixed(2)}</p>
          <p className="font-semibold text-lg pt-2">
            Total: ₹{total.toFixed(2)}
          </p>
        </div>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Billing Details */}
        <div className="md:col-span-2">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Billing Information
          </h2>
        </div>

        <div>
          <label className="block mb-1 font-medium">Full Name</label>
          <input
            {...register("fullName", { required: true })}
            className="w-full px-4 py-2 border border-gray-300 rounded"
          />
          {errors.fullName && <p className="text-red-500 text-sm">Required</p>}
        </div>

        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="w-full px-4 py-2 border border-gray-300 rounded"
          />
          {errors.email && <p className="text-red-500 text-sm">Required</p>}
        </div>

        <div>
          <label className="block mb-1 font-medium">Phone</label>
          <input
            type="tel"
            {...register("phone", { required: true })}
            className="w-full px-4 py-2 border border-gray-300 rounded"
          />
          {errors.phone && <p className="text-red-500 text-sm">Required</p>}
        </div>

        <div>
          <label className="block mb-1 font-medium">Address</label>
          <input
            {...register("address", { required: true })}
            className="w-full px-4 py-2 border border-gray-300 rounded"
          />
          {errors.address && <p className="text-red-500 text-sm">Required</p>}
        </div>

        <div>
          <label className="block mb-1 font-medium">City</label>
          <input
            {...register("city", { required: true })}
            className="w-full px-4 py-2 border border-gray-300 rounded"
          />
          {errors.city && <p className="text-red-500 text-sm">Required</p>}
        </div>

        <div>
          <label className="block mb-1 font-medium">State</label>
          <input
            {...register("state", { required: true })}
            className="w-full px-4 py-2 border border-gray-300 rounded"
          />
          {errors.state && <p className="text-red-500 text-sm">Required</p>}
        </div>

        <div>
          <label className="block mb-1 font-medium">ZIP Code</label>
          <input
            {...register("zip", { required: true })}
            className="w-full px-4 py-2 border border-gray-300 rounded"
          />
          {errors.zip && <p className="text-red-500 text-sm">Required</p>}
        </div>

        {/* Payment Section */}
        <div className="md:col-span-2 pt-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Payment Information
          </h2>
        </div>

        <div>
          <label className="block mb-1 font-medium">Card Number</label>
          <input
            type="text"
            {...register("cardNumber", { required: true })}
            className="w-full px-4 py-2 border border-gray-300 rounded"
          />
          {errors.cardNumber && (
            <p className="text-red-500 text-sm">Required</p>
          )}
        </div>

        <div>
          <label className="block mb-1 font-medium">Expiry Date</label>
          <input
            type="text"
            placeholder="MM/YY"
            {...register("expiryDate", { required: true })}
            className="w-full px-4 py-2 border border-gray-300 rounded"
          />
          {errors.expiryDate && (
            <p className="text-red-500 text-sm">Required</p>
          )}
        </div>

        <div>
          <label className="block mb-1 font-medium">CVV</label>
          <input
            type="password"
            {...register("cvv", { required: true })}
            className="w-full px-4 py-2 border border-gray-300 rounded"
          />
          {errors.cvv && <p className="text-red-500 text-sm">Required</p>}
        </div>

        <div className="md:col-span-2 text-center pt-6">
          <button
            type="submit"
            className="bg-pink-600 text-white font-medium px-8 py-3 rounded-full hover:bg-pink-700 transition"
          >
            Place Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
