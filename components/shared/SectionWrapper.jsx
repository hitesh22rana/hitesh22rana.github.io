export const SectionWrapper = ({ id, heading, children }) => {
    return (
        <section id={id} className="flex flex-col items-start justify-center w-full h-full border-t-[1px] border-gray-400 sm:px-10 px-0 sm:py-24 py-16 mx-auto max-w-5xl gap-10 reveal-animation">
            <h3 className="sm:text-3xl text-2xl font-semibold uppercase border-b-2 border-black">{heading}</h3>
            {children}
        </section>
    )
}