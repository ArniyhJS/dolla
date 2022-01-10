import Hero from "components/Hero";
import { Layout } from "layout/Layout";
import Projects from "components/Projects";
import Timeline from "components/TimeLine";
import Technologies from "components/Technologies";
import Acomplishments from "components/Acomplishments";
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
      <Timeline />
      <Acomplishments />
      <Certifications />
    </Layout>
  );
};

export default Home;
