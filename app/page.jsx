import { Wrapper } from "@/components/Wrapper";
import { Navbar } from "@/components/Navbar";
import { Spirograph } from '@/components/Spirograph';
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";

export default function Home() {
  return (
    <Wrapper>
      <Navbar />
      <Spirograph />
      <About />
      <Experience />
    </Wrapper>
  )
}
