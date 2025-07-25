import { assets, songsData } from "../assets/icons";
const Footer = () => {
  return (
    <div className="bg-[#121212] h-19 ">
      <div>
        <img className="cursor-pointer" src={assets.shuffle_icon}></img>
        <img className="cursor-pointer" src={assets.play_icon}></img>
        <img className="cursor-pointer" src={assets.shuffle_icon}></img>
        <img className="cursor-pointer" src={assets.shuffle_icon}></img>
        <img className="cursor-pointer" src={assets.shuffle_icon}></img>
      </div>
    </div>
  );
};

export default Footer;
