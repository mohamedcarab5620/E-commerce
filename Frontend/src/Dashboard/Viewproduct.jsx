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
    <div className="flex-1 p-10">
      <h1 className="text-3xl font-bold mb-6">
        📦 Product Management
      </h1>

      <div className="bg-white shadow-lg rounded-xl overflow-hidden">
        <table className="min-w-full text-left">

          <thead className="bg-gray-200">
            <tr>
              <th className="py-3 px-6">Image</th>
              <th className="py-3 px-6">Name</th>
              <th className="py-3 px-6">Description</th>
              <th className="py-3 px-6">Price</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {search.map((item) => (
              <tr 
                key={item._id} 
                className="border-b hover:bg-gray-50 transition"
              >

                <td className="py-4 px-6">
                  <img
                    src={`http://localhost:7000/allimages/${item.image}`}
                    alt={item.name}
                    className="w-20 h-14 object-cover rounded-md shadow"
                  />
                </td>

                <td className="py-4 px-6 font-medium">
                  {item.name}
                </td>

                <td className="py-4 px-6 pt-8 text-gray-600 line-clamp-1">
                  {item.desc}
                </td>

                <td className="py-4 px-6 font-semibold text-blue-600">
                  ${item.price}
                </td>

                <td className="py-4 px-6 text-center space-x-3">
                  <button
                    onClick={() => deleteProduct(item._id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                  >
                    Delete
                  </button>

                  <button
                    onClick={() => navigate(`/update/${item._id}`)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                  >
                    Update
                  </button>
                </td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </div>
  </div>
)

}

export default Viewproduct
