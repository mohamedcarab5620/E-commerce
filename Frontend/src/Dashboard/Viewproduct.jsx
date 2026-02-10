import { useEffect, useState } from 'react'
import Leftpanel from './Leftpanel'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function Viewproduct() {
  const navigate = useNavigate()
  const [search, setSearch] = useState([])

  const handleproduct = () => {
    axios.get("http://localhost:7000/product")
      .then((res) => setSearch(res.data))
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    handleproduct()
  }, [])

  const deleteProduct = (id) =>{
    axios.delete(`http://localhost:7000/product/${id}`).then(() =>{
      handleproduct()
    }).catch((err) =>{
      console.log(err)
    })
  }
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* LEFT PANEL */}
      <Leftpanel />

      {/* CONTENT */}
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          📦 Product Management
        </h1>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {search.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={`http://localhost:7000/allimages/${item.image}`}
                alt=""
                className="w-full h-56 object-cover rounded-t-2xl"
              />

              <div className="p-5">
                <h2 className="text-xl font-semibold text-gray-800">
                  {item.name}
                </h2>

                <p className="text-gray-500 text-sm mt-2 line-clamp-2">
                  {item.desc}
                </p>

                <p className="text-lg font-bold text-blue-600 mt-3">
                  ${item.price}
                </p>

                <div className="flex gap-4 mt-5">
                  <button onClick={() => deleteProduct(item._id)} className="flex-1 bg-red-500 hover:bg-red-600 transition text-white py-2 rounded-xl">
                    Delete
                  </button>

                  <button onClick={() => navigate(`/update/${item._id}`)} className="flex-1 bg-green-500 hover:bg-green-600 transition text-white py-2 rounded-xl">
                    Update
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Viewproduct
