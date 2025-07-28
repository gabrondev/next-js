import Image from "next/image";

export default function Loading() {
    return (
        <div className="
            flex flex-col justify-center items-center
            h-96
        ">
            <Image
                src='/loading.gif'
                width={25}
                height={25}
                alt='loading'
            />
            <span>Carregando...</span>
        </div>
    )
}