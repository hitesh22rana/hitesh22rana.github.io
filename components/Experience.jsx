import { SectionWrapper } from './shared/SectionWrapper'

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
            <div className="md:relative flex items-start justify-start pt-0 pb-8 px-2">
                <div
                    className="absolute top-0 left-0 w-[2px] h-full bg-black"
                />

                <div
                    className="absolute top-0 left-0 w-4 h-4 bg-black rounded-full -translate-x-[7px] translate-y-4"
                />

                <div className="w-full h-min px-4 py-3 md:mx-2 mx-0 rounded-md hover:bg-hover-bg transition-colors delay-[50] cursor-pointer">
                    <h5 className="text-lg font-semibold">{position}</h5>
                    <a href={website} target='_blank' rel='noreferrer' className='text-tertiary font-semibold'>
                        {company}
                    </a>

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
        <SectionWrapper
            id="experience"
            heading="Experience"
        >
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
        </SectionWrapper>
    )
}