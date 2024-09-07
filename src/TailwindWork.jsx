// import data from "./data"

import Data from "./data"

const TailwindWork = () => {
  return (<>
      <div className="w-screen bg-blue-400 py-5 text-center">
        <h1 className="text-3xl text-white font-bold">Product</h1>
      </div>
        <div className="w-800 text-center mx-auto grid grid-cols-1 gap-6 py-5 p-3  md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-5">
            {
                Data.map((e,i)=>{
                    return(
                        <div className="shadow-lg " key={i}>
            <div className="overflow-hidden">
                <img src={e.image} alt=""  className="h-[400px] w-screen hover:scale-125 duration-1000"/>
            </div>
            <h1>{e.title}</h1>
            <p className="py-5 px-2 font-bold text-pink-500">{e.description.slice(0,150)}</p>
        </div>
                    )
                })
            }
        {/* <div className="shadow-lg ">
            <div className="overflow-hidden">
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/93/Burj_Khalifa.jpg/800px-Burj_Khalifa.jpg" alt=""  className="h-[400px] w-screen hover:scale-125 duration-1000"/>
            </div>
            <h1>HEllo</h1>
            <p className="py-5 px-2 font-bold text-pink-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ut, exercitationem non sint voluptate obcaecati unde? Unde, aut dolor! Rerum.</p>
        </div>
        <div className="shadow-lg ">
            <div className="overflow-hidden">
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/93/Burj_Khalifa.jpg/800px-Burj_Khalifa.jpg" alt=""  className="h-[400px] w-screen hover:scale-125 duration-1000"/>
            </div>
            <h1>HEllo</h1>
            <p className="py-5 px-2 font-bold text-pink-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ut, exercitationem non sint voluptate obcaecati unde? Unde, aut dolor! Rerum.</p>
        </div>
        <div className="shadow-lg ">
            <div className="overflow-hidden">
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/93/Burj_Khalifa.jpg/800px-Burj_Khalifa.jpg" alt=""  className="h-[400px] w-screen hover:scale-125 duration-1000"/>
            </div>
            <h1>HEllo</h1>
            <p className="py-5 px-2 font-bold text-pink-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ut, exercitationem non sint voluptate obcaecati unde? Unde, aut dolor! Rerum.</p>
        </div>
        <div className="shadow-lg ">
            <div className="overflow-hidden">
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/93/Burj_Khalifa.jpg/800px-Burj_Khalifa.jpg" alt=""  className="h-[400px] w-screen hover:scale-125 duration-1000"/>
            </div>
            <h1>HEllo</h1>
            <p className="py-5 px-2 font-bold text-pink-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ut, exercitationem non sint voluptate obcaecati unde? Unde, aut dolor! Rerum.</p>
        </div>
        <div className="shadow-lg ">
            <div className="overflow-hidden">
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/93/Burj_Khalifa.jpg/800px-Burj_Khalifa.jpg" alt=""  className="h-[400px] w-screen hover:scale-125 duration-1000"/>
            </div>
            <h1>HEllo</h1>
            <p className="py-5 px-2 font-bold text-pink-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ut, exercitationem non sint voluptate obcaecati unde? Unde, aut dolor! Rerum.</p>
        </div> */}
        </div>
    </>
  )
}

export default TailwindWork