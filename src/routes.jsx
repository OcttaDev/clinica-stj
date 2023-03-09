import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './components/Index'
import Contatos from './components/pages/Contatos'
import Locais from './components/pages/Locais'
import Header from "./components/Header/Header";

function RoutesApp(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/contatos" element={<Contatos/>}/>
                <Route path="/locais" element={<Locais/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default RoutesApp