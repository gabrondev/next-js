'use client'

import { IconApi, IconArrowsJoin2, IconBug, IconDatabase, IconLayoutDashboard, IconLoader, IconRoute, IconRoute2 } from "@tabler/icons-react";
import MenuItem from "./MenuItem";
import MenuGrupo from "./MenuGrupo";
import { usePathname } from "next/navigation";

export default function Menu() {
    const url = usePathname()

    return (
        <nav className="flex flex-col gap-4">
            <MenuItem
                url="/home"
                texto="Início"
                icone={<IconLayoutDashboard />}
                selecionado={url === '/home'}
            />
            <MenuGrupo titulo="Exercícios">
                <MenuItem
                    url="/loading"
                    texto="Loading"
                    icone={<IconLoader />}
                    selecionado={url === '/loading'}
                />
                <MenuItem
                    url="/erro"
                    texto="Erro"
                    icone={<IconBug />}
                    selecionado={url === '/erro'}
                />
                <MenuItem
                    url="/dinamica/blog/abc"
                    texto="Rota Dinâmica #1"
                    icone={<IconRoute />}
                    selecionado={url === '/dinamica/blog/abc'}
                />
                <MenuItem
                    url="/dinamica/curso/react/config-ambiente/123"
                    texto="Rota Dinâmica #2"
                    icone={<IconRoute2 />}
                    selecionado={url === '/dinamica/curso/react/config-ambiente/123'}
                />
                <MenuItem
                    url="/paralelas"
                    texto="Rotas Paralelas"
                    icone={<IconArrowsJoin2 />}
                    selecionado={url === '/paralelas'}
                />
                <MenuItem
                    url="/estado"
                    texto="Usando Estado"
                    icone={<IconDatabase />}
                    selecionado={url === '/estado'}
                />
                <MenuItem
                    url="/dados"
                    texto="Usando API"
                    icone={<IconApi />}
                    selecionado={url === '/dados'}
                />
            </MenuGrupo>
        </nav>
    )
}