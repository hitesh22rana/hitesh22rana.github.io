import Image from "next/image"

export const Icon = ({ href, alt, area_label, width, height, src }) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria_label={area_label}
            className="text-xl font-normal text-secondary cursor-pointer rounded-full p-2 hover:bg-gray-100 group"
        >
            <Image
                src={src}
                width={width}
                height={height}
                alt={alt}
                className="sm:scale-100 scale-95"
            />
            <div className="hidden absolute group-hover:flex flex-row sm:right-0 right-1/4 items-center justify-center sm:gap-2 gap-1 top-12 fadeIn">
                <span className="sm:text-xl text-lg">{alt}</span>
                <Image
                    src="/icons/arrow.svg"
                    width={24}
                    height={24}
                    alt="arrow"
                    className="transform -rotate-90 sm:scale-100 scale-95"
                />
            </div>
        </a>
    )
}