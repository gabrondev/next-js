import Link from "next/link";

export default function Links() {
    function renderizarLink(texto: string, url: string) {
        return (
            <Link href={url} className="
                text-zinc-500 text-sm hover:text-zinc-300
                transition duration-300
            ">
                {texto}
            </Link>
        )
    }

    return (
        <div className="flex gap-16">
            <div className="flex flex-col gap-5">
                <h3>Recursos</h3>
                <div className="flex flex-col gap-2">
                    {renderizarLink('Docs', '/')}
                    {renderizarLink('Aprenda', '/')}
                    {renderizarLink('Blog', '/')}
                </div>
            </div>

            <div className="flex flex-col gap-5">
                <h3>Sobre</h3>
                <div className="flex flex-col gap-2">
                    {renderizarLink('História', '/')}
                    {renderizarLink('GitHub', '/')}
                    {renderizarLink('Twitter', '/')}
                </div>
            </div>

            <div className="flex flex-col gap-5">
                <h3>Mais</h3>
                <div className="flex flex-col gap-2">
                    {renderizarLink('Ação Social', '/')}
                    {renderizarLink('Projetos Antigos', '/')}
                    {renderizarLink('Esporte & Lazer', '/')}
                    {renderizarLink('Saúde', '/')}
                </div>
            </div>

            <div className="flex flex-col gap-5">
                <h3>Legal</h3>
                <div className="flex flex-col gap-2">
                    {renderizarLink('Político de Privacidade', '/')}
                    {renderizarLink('Termo de Uso', '/')}
                    {renderizarLink('Proteção de Dados', '/')}
                </div>
            </div>
        </div>
    )
}