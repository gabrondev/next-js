import Filme from "@/components/Filme";
import Pagina from "@/components/Pagina";
import filmes from "@/data/filmes";

export function getStaticProps() {
    return {
        props: { filme: filmes[0] }
    }
}

export default function PaginaFilme(props: any) {
    return (
        <Pagina>
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