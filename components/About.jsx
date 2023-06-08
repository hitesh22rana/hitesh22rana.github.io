import { SectionWrapper } from "./shared/SectionWrapper"

export const About = () => {
    return (
        <SectionWrapper
            id="about"
            heading="About"
        >
            <div className="flex flex-col gap-5 sm:text-xl text-lg font-medium">
                <h4 className="sm:text-2xl text-xl font-semibold">Hey👋 I&apos;m Hitesh.</h4>
                <p>
                    Experienced Full Stack Developer and aspiring DevOps Engineer with a passion for hackathons and a track record of wins, including representing India at the East Asia Hackathon in Jakarta. A quick learner adept at building and mastering new technologies under tight deadlines.
                </p>
                <p>
                    Making things is one of my biggest obsessions, and improving them is even more of a passion for me. I create scalable, responsive, and user-friendly applications.
                </p>
                <p>
                    I have worked on a variety of projects and my ultimate
                    goal is to use my skills and experience to solve complex
                    problems and make a positive impact on the world through
                    technology.
                </p>
            </div>
        </SectionWrapper>
    )
}