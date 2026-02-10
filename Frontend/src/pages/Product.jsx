import { useDispatch } from "react-redux"
import { addToCart } from "../Redux/Reducer/cart"
import { useEffect, useState } from "react"
import axios from "axios"

function Product() {
  const [search, setSearch] = useState([])

  const handleproduct = () => {
    axios.get("http://localhost:7000/product")
      .then((res) => setSearch(res.data))
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    handleproduct()
  }, [])

  const dispatch = useDispatch()

  const HandleaddToCart = (item) => {
    dispatch(addToCart(item))
  }

  return (
    <>
      {/* HERO SECTION */}
      <div
        className="relative text-white flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(8,0,58,0.3),rgba(8,0,58,0.7)), url("https://images.unsplash.com/photo-1523275335684-37898b6baf30")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "650px",
        }}
      >
        <div className="px-10 md:px-20">
          <h1 className="md:text-6xl text-4xl font-extrabold mb-4">
            New Arrivals
          </h1>
          <p className="md:text-2xl text-lg font-medium mb-6">
            Fresh styles just landed
          </p>
          <button className="bg-blue-600 hover:bg-pink-600 transition px-10 py-4 rounded-full text-xl font-semibold shadow-lg">
            Explore Collection
          </button>
        </div>
      </div>

      {/* PRODUCTS */}
      <div className="bg-gray-100 py-14 px-6">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Our Products
        </h2>

        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {search.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <img
                src={`http://localhost:7000/allimages/${item.image}`}
                alt=""
                className="w-full h-64 object-cover rounded-t-2xl"
              />

              <div className="p-5">
                <h1 className="text-xl font-semibold text-gray-800">
                  {item.name}
                </h1>

                <p className="text-gray-500 text-sm mt-2 line-clamp-2">
                  {item.desc}
                </p>

                <div className="flex items-center justify-between mt-4">
                  <span className="text-2xl font-bold text-amber-500">
                    ${item.price}
                  </span>

                  <button
                    onClick={() => HandleaddToCart(item)}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-xl transition"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Product
