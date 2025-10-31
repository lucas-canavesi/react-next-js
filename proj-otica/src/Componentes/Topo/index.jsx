import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/logo.png";
import estilos from "./Topo.module.css";

export default function Topo () {
    return (
        <header className={estilos.container_header}>
            <div className={estilos.logo_nav}>
                <Image src={Logo} alt="Logo da Empresa" className={estilos.logo}/>
                <nav className={estilos.nav_link}>
                    <Link href="">PRODUTOS</Link>
                    <Link href="">SOBRE</Link>
                    <Link href="">CONTATO</Link> 
                </nav>
            </div>
        </header>
    )
}