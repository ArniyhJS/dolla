import Hero from "@/components/Hero";
import { Layout } from "@/layout/Layout";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Technologies from "@/components/Technologies";
import Acomplishments from "@/components/Acomplishments";
import Certifications from "@/components/Certifications";
import BgAnimation from "@/components/BackgroundAnimation";

import { Section } from "styles/GlobalComponents";

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Projects />
      <Technologies />
      <Experience />
      <Acomplishments />
      <Certifications />
    </Layout>
  );
};

export default Home;
