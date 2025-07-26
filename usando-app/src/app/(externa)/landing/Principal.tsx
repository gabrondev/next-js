import Botao from "@/app/shared/Botao";

export default function Principal() {
    return (
        <div className="
            flex flex-col justify-center items-center h-[450px]
            gap-10 text-center
            ">
            <h1 className='
                font-black text-6xl leading-[70px]
                bg-clip-text text-transparent
                bg-gradient-to-b from-zinc-200 to-zinc-400
            '>
                Landing Page com Next.js
            </h1>
            <h2 className="text-zinc-500 w-3/4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                In iaculis ultrices dui, accumsan feugiat massa sagittis vestibulum.
                Morbi tristique libero eget vulputate lacinia.
            </h2>
            <div className="flex gap-3">
                <Botao url="/home" destacado maior>Iniciar Aqui</Botao>
                <Botao url="/home" maior>Sobre Nós</Botao>
            </div>
        </div>
    )
}