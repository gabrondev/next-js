import Principal from "./landing/Principal";
import Recursos from "./shared/Recursos";
import Titulo from "./shared/Titulo";

export default function Page() {
    return (
        <div className="flex flex-col">
            <Principal />
            <Titulo
                texto="Nossos Recursos"
                legenda="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                className="mb-7"
            />
            <Recursos />
        </div>
    )
}