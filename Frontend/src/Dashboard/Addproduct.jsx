import { useState } from "react"
import Leftpanel from "./Leftpanel"
import axios from "axios"

function Addproduct() {
  const [add, setAdd] = useState({
    name: "",
    image: "",
    desc: "",
    price: ""
  })

  const HandleChange = (e) => {
    const { name, value, files } = e.target
    setAdd({
      ...add,
      [name]: files ? files[0] : value
    })
  }

  const Handlesubmit = (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append("name", add.name)
    formData.append("image", add.image)
    formData.append("desc", add.desc)
    formData.append("price", add.price)

    try {
      axios.post("http://localhost:7000/product", formData)
      setAdd({
        name: "",
        image: "",
        desc: "",
        price: ""
      })
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Leftpanel />

      {/* CONTENT */}
      <div className="flex-1  flex items-center justify-center">
        <form
          onSubmit={Handlesubmit}
          className="bg-white w-full max-w-sm h-105 p-4 rounded-xl shadow-lg flex flex-col justify-between">
          <h1 className="text-xl font-bold text-gray-800 text-center">
            Add Product
          </h1>

          <input
            type="text"
            name="name"
            placeholder="Product name"
            value={add.name}
            onChange={HandleChange}
            className="border rounded-md px-3 py-1.5"
          />

          <input
            type="file"
            name="image"
            onChange={HandleChange}
            className="border rounded-md px-2 py-1.5 bg-gray-50"
          />

          <input
            type="text"
            name="desc"
            placeholder="Description"
            value={add.desc}
            onChange={HandleChange}
            className="border rounded-md px-3 py-1.5"
          />

          <input
            type="text"
            name="price"
            placeholder="Price"
            value={add.price}
            onChange={HandleChange}
            className="border rounded-md px-3 py-1.5"
          />

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md font-semibold"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  )
}

export default Addproduct
