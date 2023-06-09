import Image from "next/image"

import { SectionWrapper } from "./shared/SectionWrapper"

import projects from "../lib/data/projects.json"

const Project = ({
    key,
    title,
    link,
    image,
    description
}) => {
    return (
        <a
            key={key}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex lg:flex-row flex-col cursor-pointer border-white hover:bg-hover-bg rounded-md p-2 justify-start items-start gap-2"
        >
            <Image
                src={image}
                alt={title}
                width={200}
                height={200}
                className="rounded-md object-contain lg:w-[200px] w-full"
            />
            <div className="flex flex-col items-start justify-center gap-2">
                <h5 className="text-lg font-semibold">{title}</h5>
                <span className="font-medium">{description}</span>
            </div>
        </a>
    )
}

export const Projects = () => {
    return (
        <SectionWrapper
            id="projects"
            heading="Projects"
            subheading="Putting my heart and soul into these endeavours has been an amazing pleasure. Check out these projects."
        >
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-5 w-full">
                {
                    projects?.map(({ title, link, image, description }, index) => (
                        <Project
                            key={index}
                            title={title}
                            link={link}
                            image={image}
                            description={description}
                        />
                    ))
                }
            </div>
        </SectionWrapper>
    )
}