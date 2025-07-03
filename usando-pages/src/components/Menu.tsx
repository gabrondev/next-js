import Link from "next/link"
import { useRouter } from "next/router"

export default function Menu() {
    const router = useRouter()

    function renderizarItem(url: string, texto: string, locale: string) {
        const ativo = router.asPath === url

        return (
            <li className={`
                ${ativo ? 'bg-purple-800' : 'bg-purple-500'}
                px-4 py-3 rounded-lg text-lg
            `}>
                <Link href={url} locale={locale}>{texto}</Link>
            </li>
        )
    }

    return (
        <ul className="flex gap-3">
            {renderizarItem('/rotas/basicas', 'Rota Básica', 'pt')}
            {renderizarItem('/rotas/basicas/aninhada', 'Rota Aninhada', 'pt')}
            {renderizarItem('/rotas/dinamicas/produto/3', 'Produto #3', 'pt')}
            {renderizarItem('/rotas/dinamicas/curso/react/123', 'Curso React', 'pt')}
            {renderizarItem('/rotas/dinamicas/consulta/html/css/js', 'Consulta', 'pt')}
            {renderizarItem('/rotas/i18n/saudacao', 'Saudação PT', 'pt')}
            {renderizarItem('/rotas/i18n/saudacao', 'Saudação EN', 'en')}
        </ul>
    )
}