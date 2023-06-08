import { Icon } from "./shared/Icon"

export const Navbar = () => {
    return (
        <nav className="flex sm:flex-row flex-col sm:items-start items-center justify-between">
            <div className="flex flex-col sm:items-start items-center justify-between">
                <h2 className="sm:text-3xl text-4xl font-semibold text-primary">Hitesh Rana</h2>
                <h3 className="sm:text-xl text-2xl font-normal text-secondary">Developer</h3>
            </div>
            <div className="relative flex flex-row items-center justify-between sm:gap-2 gap-0 sm:mt-0 mt-2">
                <Icon
                    href="https://drive.google.com/file/d/1YWTGBrAHzvwLpghdloFkaezPbqiv26wV/view?usp=share_link"
                    alt="Resume"
                    area_label="Hitesh's Resume"
                    width={28}
                    height={28}
                    src="/icons/resume.svg"
                />
                <Icon
                    href="https://github.com/hitesh22rana"
                    alt="Github"
                    area_label="Hitesh's Github"
                    width={28}
                    height={28}
                    src="/icons/github.svg"
                />
                <Icon
                    href="https://www.linkedin.com/in/hitesh22rana"
                    alt="LinkedIn"
                    area_label="Hitesh's LinkedIn"
                    width={28}
                    height={28}
                    src="/icons/linkedin.svg"
                />
                <Icon
                    href="https://twitter.com/hitesh22rana"
                    alt="Twitter"
                    area_label="Hitesh's Twitter"
                    width={24}
                    height={24}
                    src="/icons/twitter.svg"
                />
            </div>

            {/* <div className="fixed bottom-5 left-0 right-0 mx-auto z-50">
                <div className="flex flex-row items-center justify-center gap-12 bg-gradient-to-l from-gray-50 to-gray-100 w-fit mx-auto py-3 px-6 rounded-full backdrop-blur-2xl filter shadow">
                    <a href="#about" className="cursor-pointer">
                        <Image
                            src="/icons/about.png"
                            alt="about"
                            width={24}
                            height={24}
                            className="hover:bg-slate-500 w-full h-full p-2 rounded-full bg-cover"
                        />
                    </a>
                    <a href="#experience" className="cursor-pointer">
                        <Image
                            src="/icons/experience.png"
                            alt="experience"
                            width={24}
                            height={24}
                            className="hover:bg-slate-500 m-2 rounded-full"
                        />
                    </a>
                    <a href="" className="cursor-pointer">P</a>
                    <a href="" className="cursor-pointer">S</a>
                </div>
            </div> */}
        </nav>
    )
}