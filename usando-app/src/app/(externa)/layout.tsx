import Cabecalho from "./shared/Cabecalho"
import Rodape from "./shared/Rodape"

export default function Layout(props: any) {
    return (
        <div className="flex flex-col">
            <Cabecalho />
            <main className="flex mt-[64px]">
                {props.children}
            </main>
            <Rodape />
        </div>
    )
}