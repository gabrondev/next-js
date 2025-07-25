import Logo from "@/app/shared/Logo";
import Menu from "./Menu";
import Botao from "@/app/shared/Botao";

export default function Cabecalho() {
    return (
        <header className="
            flex justify-center items-center h-[64px]
            fixed top-0 left-0 right-0
            border-b border-zinc-800 bg-black/50 backdrop-blur-sm
        ">
            <div className="flex items-center w-[1400px] h-full gap-12">
                <Logo />
                <Menu />
                <div className="flex flex-1"></div>
                <div className="flex gap-4">
                    <Botao url="/home">Entrar</Botao>
                    <Botao url="/home" destacado>Registrar</Botao>
                </div>
            </div>
        </header>
    )
}