import Premiumcard from "../Components/Premiumcard";
import Navbar from "../Components/Navbar";

const Premium = () => {
  return (
    <div>
      <h1 className="text-white font-bold text-4xl flex justify-center bg-[#121212]">
        Pricing
      </h1>
      <Navbar />
      <Premiumcard />
    </div>
  );
};

export default Premium;
