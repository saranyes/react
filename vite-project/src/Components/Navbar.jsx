function Navbar (){
    return (

        <div className="flex bg-black text-white p-5 justify-between">
         <div className="flex gap-4">
         <h1 className="text-xl">Music Player</h1>
         <input type="text" name="searchbar" placeholder="Search Songs"className="bg-gray-800 p-2 pr-20 pl-3 rounded-2xl border-white"/>
         </div>
        
        
        <div className="text-xl ">
            <ul className=" flex gap-8">
                <il>premium  </il>
                <il>Support</il>
                <il>Download</il>
                <il>Install App</il>
            </ul>

         </div>
          
          <div className="flex gap-4">
         <button className="bg-white pl-3 pr-3 rounded-2xl text-black border-white ">Sign-up</button>
            <button className="bg-white pl-3 pr-3 rounded-2xl text-black border-white">Login</button>
        </div>
        
        </div>

    )
}
export default Navbar