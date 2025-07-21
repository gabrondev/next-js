import Filme from "@/components/Filme";
import Pagina from "@/components/Pagina";
import filmes from "@/data/filmes";

export function getStaticProps() {
    return {
        props: {
            filme: filmes[0],
            data: new Date().toLocaleTimeString('PT-BR')
        }
    }
}

export default function PaginaFilme(props: any) {
    return (
        <Pagina>
            <h1 className="text-4xl">Página Filme</h1>
            <h2 className="text-2xl">
                Hora de geração: {props.data}
            </h2>
            <Filme
                id={props.filme.id}
                descricao={props.filme.descricao}
                imagem={props.filme.imagem}
                subtitulo={props.filme.subtitulo}
                titulo={props.filme.titulo}
            />
        </Pagina>
    )
}