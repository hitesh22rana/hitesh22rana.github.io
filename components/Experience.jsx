import experiences from '../lib/data/experiences.json'


const Timeline = ({
    key,
    position,
    company,
    website,
    description
}) => {
    return (
        <div key={key} className="relative flex md:flex-row flex-col items-start justify-start w-full">
            <div className="flex-[1.5] items-center justify-center w-full md:px-0 px-6">
                <a href={website} target='_blank' rel='noreferrer' className="flex font-extralight md:px-4 px-2 my-2 py-[6px] bg-gray-950 text-white w-min rounded-tl-2xl rounded-br-2xl hover:rounded-br-none hover:rounded-tl-none hover:rounded-tr-2xl hover:rounded-bl-2xl hover:brightness-90 transition-all delay-75">
                    {company}
                </a>
            </div>

            <div className="md:relative flex-[8.5] items-start justify-start pt-0 pb-8 px-2">
                <div
                    className="absolute top-0 left-0 w-[2px] h-full bg-black"
                />

                <div
                    className="absolute top-0 left-0 w-4 h-4 bg-black rounded-full -translate-x-[7px] translate-y-4"
                />

                <div className="w-full h-min px-4 py-3 md:mx-2 mx-0 rounded-md hover:bg-gray-100 transition-colors delay-[50] cursor-pointer">
                    <h5 className="text-lg font-semibold">{position}</h5>

                    <ol className="flex flex-col items-start justify-start gap-2 my-5">
                        {
                            description?.map((point, index) => (
                                <div key={index} className='flex flex-row items-start justify-start'>
                                    <span
                                        className='h-1 bg-gray-800 rounded-[100%] p-[2px] my-2 mr-1'
                                    />
                                    <li>
                                        {point}
                                    </li>
                                </div>
                            ))
                        }
                    </ol>
                </div>
            </div>
        </div>
    )
}

export const Experience = () => {
    return (
        <section id="experience" className="flex flex-col items-start justify-center w-full h-full border-t-[1px] border-gray-400 sm:px-10 px-0 sm:py-24 py-16 mx-auto max-w-5xl gap-10 reveal-animation">
            <h3 className="sm:text-3xl text-2xl font-semibold uppercase border-b-2 border-black">Experience</h3>
            <div className="flex flex-col items-start justify-between w-full">
                {
                    experiences?.map((experience, index) => (
                        <Timeline
                            key={index}
                            position={experience.position}
                            company={experience.company}
                            website={experience.website}
                            description={experience.description}
                        />
                    ))
                }
            </div>
        </section>
    )
}