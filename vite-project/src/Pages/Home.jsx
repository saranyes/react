import React from "react";
import Navbar from "../Components/Navbar";
import Cards from "../Components/Cards";
import Sidebar from "../Components/Sidebar";
import Footer from "../Components/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      {/* <Cards /> */}
      <Footer />
    </div>
  );
}

export default Home;
