import { Link } from "react-router-dom";
import Logo from '../Components/Logo';
import Buttonpopup from "./Buttonpopup";

function Header() {
    return (
        <div className="flex justify-between h-auto grid grid-cols-2 gap-4 content-start items-center" >

            <Logo />

            <div className="flex  h-10 w-1.2  content-between items-center justify-between p-4">
                <Link to="/quienessomos">
                    <p className="shadow bg-violeta-ciba transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-verde-ciba duration-300 focus:shadow-outline focus:outline-none text-white font-koulen py-2 px-4 rounded">Sobre Nosotr@s</p>
                </Link>
                <Link to="/Team">
                    <p className="shadow bg-violeta-ciba transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-verde-ciba duration-300 focus:shadow-outline focus:outline-none text-white font-koulen py-2 px-4 rounded">Equipo</p>
                </Link>
                <Link to="/Calendar">
                    <p className="shadow bg-violeta-ciba transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-verde-ciba duration-300 focus:shadow-outline focus:outline-none text-white font-koulen py-2 px-4 rounded">Calendario</p>
                </Link>
                <Buttonpopup />
            </div>
        </div>
    )
}
export default Header;