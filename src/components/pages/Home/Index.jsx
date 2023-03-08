import { useEffect } from 'react';
import Icon from '../../../assets/secundsBg.png'
import '../../../responsive.css'
import Nav from '../../Nav/Nav'

import AOS from 'aos';
import 'aos/dist/aos.css';

function Home(){

    useEffect(() => {
        AOS.init({duration: 2000})
    },[])

    return(
        <div className="flex items-center justify-evenly my-28 gap-20 responsive" data-aos="flip-left">
            <div className="" data-aos="fade-right">
                <div className="flex items-center">
                    <span className="text-green-800 font-bold">Clinica Especializada</span>
                    <hr className="w-8"/>
                </div>
                <div className="max-w-[400px] my-2">
                    <h1 className="text-green-800 text-3xl ">Sempre buscando o <strong>Melhor</strong> para sua saúde</h1>
                </div>
                <div className='my-5'>
                    <Nav firstTitle="Contatos" secundsTitle="Locais" firstRoute="/contatos" secundsRoute="/locais"/>
                </div>
            </div>
            <div data-aos="fade-left">
                <img src={Icon} alt="icon" className='w-80 h-68' />
            </div>
        </div>
    )
}
export default Home 