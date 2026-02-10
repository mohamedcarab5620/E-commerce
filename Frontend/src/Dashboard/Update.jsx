import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Update() {
  const {id} = useParams()
  const [update , setUpdate] = useState({
    name: "",
    image: null,
    desc: "",
    price: ""
  })

  const HandleChange = (e) =>{
    const {name ,  value , files} = e.target
    setUpdate({
      ...Update,
      [name]: files ? files[0] : value
    })
  }

  const HandleSubmit = (id) =>{
    axios.get(`http://localhost:7000/product/${id}`).then((res) =>{
      setUpdate({
        name: req.date.name,
        image: null,
        desc: req.data.desc,
        price: req.data.price
      })
    }).catch((err) =>{
      console.log(err)
    })
  }

  useEffect(() =>{
    HandleSubmit()
  }, [])

  const HandleUpdate = async (e) =>{
    e.preventDefault()

    const formData = new FormData()
    for (let key in update){
      if (update[key]) formData.append(key, update[key])
    }
    try{
      axios.put(`http://localhost:7000/product/${id}`, formData)
    }catch(err){
      console.log(err)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <form
        onSubmit={HandleUpdate}
        className="
          bg-white
          w-full
          max-w-sm
          h-[360px]
          p-4
          rounded-xl
          shadow-lg
          flex
          flex-col
          justify-between
        "
      >
        <h2 className="text-lg font-bold text-center text-gray-800">
          Update Product
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Change product name"
          value={update.name}
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
          type="desc"
          name="desc"
          placeholder="Change product description"
          value={update.desc}
          onChange={HandleChange}
          className="border rounded-md px-3 py-1.5"
        />

        <input
          type="text"
          name="price"
          placeholder="Change product price"
          value={update.price}
          onChange={HandleChange}
          className="border rounded-md px-3 py-1.5"
        />

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md font-semibold"
        >
          Save
        </button>
      </form>
    </div>
  )
}

export default Update
