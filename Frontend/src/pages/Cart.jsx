import { useDispatch, useSelector } from 'react-redux'
import { removeCart } from '../Redux/Reducer/cart'

function Cart() {
  const cartValue = useSelector((state) => state.productCart.cartItem)
  const dispatch = useDispatch()

  const HandleRemoveCart = (index) => {
    dispatch(removeCart(index))
  }

  const totalPrice = cartValue.reduce(
    (state, item) => state + item.price,
    0
  )

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5 flex justify-center">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-6">
        
        <h1 className="text-2xl font-bold mb-6 text-gray-800">
          🛒 Shopping Cart
        </h1>

        {cartValue.length === 0 ? (
          <p className="text-center text-gray-500 py-10">
            Your cart is empty
          </p>
        ) : (
          cartValue.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between gap-6 border rounded-xl p-4 mb-4 hover:shadow-md transition">
              <img
                src={`http://localhost:7000/allimages/${item.image}`}
                alt=""
                className="w-24 h-24 object-cover rounded-xl "/>

              <div className="flex-1">
                <h2 className="text-lg font-semibold text-gray-700">
                  {item.name}
                </h2>
                <p className="text-blue-600 font-bold mt-1">
                  ${item.price}
                </p>
              </div>

              <button
                onClick={() => HandleRemoveCart(index)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl transition">
                Remove
              </button>
            </div>
          ))
        )}

        <hr className="my-6" />

        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-700">
            Total
          </h2>
          <span className="text-2xl font-bold text-green-600">
            ${totalPrice}
          </span>
        </div>

      </div>
    </div>
  )
}

export default Cart
