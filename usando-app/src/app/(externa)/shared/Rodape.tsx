import Logo from "@/app/shared/Logo";
import Links from "./Links";
import { IconBrandGithub, IconBrandTwitter } from "@tabler/icons-react";

export default function Rodape() {
    return (
        <footer className="
            flex justify-center
            border-t border-zinc-800
            py-7
        ">
            <div className="flex flex-col w-[1100px]">
                <div className="flex items-start gap-20">
                    <Logo />
                    <Links />
                </div>

                <div className="flex flex-col gap-3">
                    <span className="text-sm text-zinc-500">© {new Date().getFullYear()} Formação.DEV </span>
                    <div className="flex gap-2 text-zinc-400">
                        <IconBrandGithub stroke={1} />
                        <span className="text-zinc-700">|</span>
                        <IconBrandTwitter stroke={1} />
                    </div>
                </div>
            </div>
        </footer>
    )
}