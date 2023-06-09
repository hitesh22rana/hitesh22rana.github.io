export const SectionWrapper = ({ id, heading, subheading, children }) => {
    return (
        <section id={id} className="flex flex-col items-start justify-center w-full h-full border-t-[1px] border-gray-400 sm:px-10 px-0 sm:py-24 py-16 mx-auto max-w-5xl gap-10 reveal-animation">
            <h3 className="relative sm:text-3xl text-2xl font-semibold uppercase border-black after:absolute after:bottom-0 after:left-0 after:w-6 after:h-[3px] after:bg-black after:content-[''] hover:after:w-full after:transition-all after:delay-100 cursor-pointer after:ease-in-out">{heading}</h3>
            {
                subheading && (
                    <h4 className="sm:text-xl text-lg font-medium mb-4 -mt-2">{subheading}</h4>
                )
            }
            {children}
        </section>
    )
}