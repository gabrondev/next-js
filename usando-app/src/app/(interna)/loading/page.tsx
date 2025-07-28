import Titulo from "../shared/Titulo"

function carregarNumeroPesado(): Promise<number> {
    return new Promise((resolve) => {
        setTimeout(() => resolve(100), 2000)
    })
}

export default async function Page() {
    const numeroPesado = await carregarNumeroPesado()
    return (
        <div>
            <Titulo
                texto="Página de Loading"
                legenda="Demonstrando o uso de loading em uma página"
            />
            <div className="flex flex-col justify-center items-center h-96">
                <span className="text-7xl font-black">{numeroPesado}</span>
                <span className="text-zinc-500">Demorou 2 segundos</span>
            </div>
        </div>
    )
}