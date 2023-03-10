import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './components/Home'
import Contatos from './components/Contatos'
import Locais from './components/Locais'
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