import { useEffect } from 'react';
import '../../../responsive.css'
import Nav from "../../Nav/Nav";

import LocationSume from './maps/Sume/MapSume'
import LocationSb from './maps/SB/MapSb'


import AOS from 'aos';
import 'aos/dist/aos.css';

function Locais() {
  
  useEffect(() => {
    AOS.init({duration:2000})
  }, [])

  return (
    <div className="flex justify-center my-18 responsive" data-aos="fade-down">
      <div className="max-w-[600px] m-auto" data-aos="fade-up-right">
        <h1 className="text-green-800 text-3xl font-bold mb-5">
          Venha agendar seu horario presencialmente em uma de nossas clinicas
        </h1>
        <Nav
          firstRoute="/"
          firstTitle="Home"
          secundsRoute="/contatos"
          secundsTitle="Contatos"
        />
      </div>
      <div className="max-w-[600px]  locations" data-aos="flip-left">
        <h1 className="text-green-800 font-bold">Sumé</h1>
        <div className="flex location-sume">
            <LocationSume/>
        </div>
        <h1 className="text-green-800 font-bold">Serra Branca</h1>
        <div className="flex location-sb">
            <LocationSb/>
        </div>
      </div>
    </div>
  );
}
export default Locais;
