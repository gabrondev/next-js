import Recurso from "./Recurso";

export default function Recursos() {
    return (
        <div className="grid grid-cols-3 gap-5">
            <Recurso
                titulo="300x mais rápido"
                texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non semper turpis. Etiam ultricies accumsan sapien, id malesuada risus sodales sit amet."
                imagem="https://picsum.photos/250/300?grayscale"
            />
            <Recurso
                titulo="Vanguarda em tecnologia"
                texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non semper turpis. Etiam ultricies accumsan sapien, id malesuada risus sodales sit amet."
                imagem="https://picsum.photos/250/301?grayscale"
            />
            <Recurso
                titulo="Suporte 24/7"
                texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non semper turpis. Etiam ultricies accumsan sapien, id malesuada risus sodales sit amet."
                imagem="https://picsum.photos/250/299?grayscale"
            />
            <Recurso
                titulo="Web Design Responsivo"
                texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non semper turpis. Etiam ultricies accumsan sapien, id malesuada risus sodales sit amet."
                imagem="https://picsum.photos/250/302?grayscale"
            />
            <Recurso
                titulo="SEO Otimizado"
                texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non semper turpis. Etiam ultricies accumsan sapien, id malesuada risus sodales sit amet."
                imagem="https://picsum.photos/250/298?grayscale"
            />
            <Recurso
                titulo="Yada yada"
                texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non semper turpis. Etiam ultricies accumsan sapien, id malesuada risus sodales sit amet."
                imagem="https://picsum.photos/250/303?grayscale"
            />
        </div>
    )
}