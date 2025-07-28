import Titulo from "@/app/(interna)/shared/Titulo";

export default function Page(props: any) {
    return (
        <div>
            <Titulo
                texto="Rota Dinâmica #1"
                legenda="Exibindo os parâmetros passados na rota"
            />
            <div className="flex flex-col gap-5 mt-10">
                <span className="text-3xl font-black">Id: {props.params.id}</span>
                <code>
                    <pre className="
                        text-2xl bg-black p-5 rounded-lg
                    ">
                        {JSON.stringify(props, null, 4)}
                    </pre>
                </code>
            </div>
        </div>
    )
}