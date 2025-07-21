import Pagina from "@/components/Pagina";

export async function getServerSideProps() {
    const resposta = await fetch('http://localhost:3000/api/produtos')
    const produtos = await resposta.json()
    const data = new Date().toLocaleTimeString('pt-br')
    return {
        props: { produtos, data }
    }
}

export default function PaginaISR({ produtos, data }: any) {
    return (
        <Pagina>
            <h1>Renderização no Servidor (SSR)</h1>
            <h2>Gerado em {data}</h2>
            <ul>
                {produtos.map((produto: any) => {
                    return (
                        <li key={produto.id} className="text-lg">
                            {produto.id} - {produto.nome} - {produto.preco}
                        </li>
                    )
                })}
            </ul>
        </Pagina>
    )
}