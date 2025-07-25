import Link from "next/link"

export interface MenuItemProps {
    texto: string
    url: string
}

export default function MenuItemProps(props: MenuItemProps) {
    return (
        <Link href={props.url}>
            <span className="text-zinc-500 hover:text-zinc-300 transition duration-300">{props.texto}</span>
        </Link>
    )
}