import { IoPeopleCircleOutline } from "react-icons/io5";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function Header(){
    useEffect(() => {
        AOS.init({duration: 2000})
    }, [])
    return(
        <div className="max-w-[300px] text-center m-auto my-8" data-aos="fade-down">
            <h1 className=" flex text-green-800 font-bold text-3xl">
              <IoPeopleCircleOutline/>  Clinica Santa Júlia
            </h1>
        </div>
    )
}
export default Header