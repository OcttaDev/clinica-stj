import { Link } from "react-router-dom"

function Nav({firstTitle, secundsTitle, firstRoute, secundsRoute}){
    return(
        <div className="flex gap-5">
            <li className="flex list-none items-center text-center">
                <Link to={firstRoute} className="w-20 p-1 border-2 rounded-md border-green-800 text-green-700 font-bold hover:bg-green-800 hover:text-white">{firstTitle}</Link>
            </li>
            <li className="list-none flex items-center text-center">
                <Link to={secundsRoute} className="w-20 p-1 border-2 rounded-md border-green-800 text-green-700 font-bold hover:bg-green-800 hover:text-white">{secundsTitle}</Link>
            </li>
        </div>  
    )
}
export default Nav