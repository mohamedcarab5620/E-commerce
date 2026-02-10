import { useState } from "react"


function Home({dhamaan}){

 



  return (
    <div>
      {
        dhamaan.map((item) => {
          return <>

          
            <div className="p-10">
              <img src={item.image} alt="" className="w-[200px] h-[200px] rounded-[20px] " />
              <div className="flex gap-10 ml-7">
              <h1>{item.name}</h1>
              <p>{item.price}</p>
              </div>
              <button onClick={() => HandleaddToCart(item)} className="bg-blue-400 px-5 py-2 rounded-[10px] ml-7 text-white">Add To Cart</button>
            </div>
          </>
        })
      }
    </div>
  )
}
export default Home