import { IconArrowsJoin2, IconBug, IconLoader, IconRoute, IconRoute2 } from "@tabler/icons-react";
import Titulo from "../shared/Titulo";
import Exercicio from "./Exercicio";

export default function Page() {
    return (
        <div>
            <Titulo
                texto="Área do Aluno"
                legenda="Lista de todos os exercícios implementados"
            />
            <div className="grid grid-cols-4 gap-5 mt-10">
                <Exercicio url="/loading" titulo="Loading" icone={<IconLoader />} />
                <Exercicio url="/erro" titulo="Erro" icone={<IconBug />} />
                <Exercicio url="/dinamica/blog/123?filtro=inativos" titulo="Rota Dinâmica #1" icone={<IconRoute />} />
                <Exercicio url="/dinamica/curso/html-basico?esconderAulasConcluidas=true" titulo="Rota Dinâmica #2" icone={<IconRoute2 />} />
                <Exercicio url="/paralelas" titulo="Rotas Paralelas" icone={<IconArrowsJoin2 />} />
            </div>
        </div>
    )
}