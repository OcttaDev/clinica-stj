import { useEffect } from "react";
import Nav from "../../Nav/Nav";
import "../../../responsive.css";


import { IoHeadsetOutline } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";


import AOS from 'aos';
import 'aos/dist/aos.css';

function Contatos() {

    useEffect(() => {
        AOS.init({duration: 2000})
    }, [])

  return (
    <div className="flex justify-evenly items-center my-28 responsive" data-aos="fade-up">
      <div className="  text-green-800 gap-2 " data-aos="fade-up-right">
        <IoHeadsetOutline size={30} />
        <h1 className="text-3xl max-w-[450px]">
          Fale conosco através de nossos canais comunicativos
        </h1>
        <div className="my-5">
          <Nav
            firstTitle="Home"
            secundsTitle="Locais"
            firstRoute="/"
            secundsRoute="/locais"
          />
        </div>
      </div>
      <div className="my-10" data-aos="fade-left">
        <div className="flex items-center mb-5 gap-2">
          <BsFillTelephoneFill /> <h1 className="text-green-800 font-bold text-md">Via WhatsApp</h1>
        </div>
        <div className="flex mb-10 gap-5">
          <div className="flex items-center gap-2">
            <a
              href="#"
              className="border-2 border-b-green-800 p-1 rounded-md w-28 text-md text-center text-green-800 font-bold hover:bg-green-400 hover:text-white"
            >
              Sumé
            </a>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="#"
              className="border-2 border-b-green-800  p-1 rounded-md w-28 text-md text-center text-green-800 font-bold hover:bg-green-400 hover:text-white"
            >
              Serra Branca
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contatos;
