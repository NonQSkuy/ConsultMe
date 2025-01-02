import google from "../assets/googleplay.png";
import appstore from "../assets/appstore.png";
import logo from "../assets/logo.png";
import { Image } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { InstagramIcon, YoutubeIcon } from "lucide-react";
import tiktok from "../assets/logo-tiktok.svg";

export default function Footer() {
  return (
    <div className="shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),0_-2px_4px_-2px_rgba(0,0,0,0.1)]">
      <div className="flex gap-56 justify-center p-10">
        <div>
          <Image src={logo} width={200} alt="ConsultMe" />
          <Image src={google} width={200} alt="Google Play" />
          <Image src={appstore} width={200} alt="App Store" />
        </div>
        <div>
          <p className="font-bold text-xl text-primary">Our Service</p>
          <Link className="block py-1 text-md text-gray-700 hover:text-primary transition-colors duration-300">
            Meditation
          </Link>
          <Link className="block py-1 text-md text-gray-700 hover:text-primary transition-colors duration-300">
            Counseling
          </Link>
        </div>
        <div>
          <p className="font-bold text-xl text-primary">Get to know us</p>
          <Link className="block py-1 text-md text-gray-700 hover:text-primary transition-colors duration-300">
            About Us
          </Link>
          <Link className="block py-1 text-md text-gray-700 hover:text-primary transition-colors duration-300">
            Our Team
          </Link>
        </div>
        <div>
          <p className="font-bold text-xl text-primary">Others</p>
          <Link className="block py-1 text-md text-gray-700 hover:text-primary transition-colors duration-300">
            FAQ
          </Link>
          <Link className="block py-1 text-md text-gray-700 hover:text-primary transition-colors duration-300">
            Terms & Conditions
          </Link>
          <Link className="block py-1 text-md text-gray-700 hover:text-primary transition-colors duration-300">
            Privacy Policy
          </Link>
        </div>
      </div>
      <div className="flex justify-center mb-5 gap-5">
        <Link to="https://www.instagram.com/consultmehc" target="_blank">
          <InstagramIcon size={30} />
        </Link>
        <Link to="https://www.tiktok.com/consultmehc" target="_blank">
          <img src={tiktok} className="w-[30px]" sizes="30" alt="" />
        </Link>
        <Link to="https://www.youtube.com/consultmehc" target="_blank"> 
          <YoutubeIcon size={30}/>
        </Link>
      </div>
      <div className="text-center bg-slate-200 p-5">
        <p className="font-semibold">
          PT. ConsultMe Psikologi Indonesia | Calm Minds, Achieve Balance
        </p>
      </div>
    </div>
  );
}
