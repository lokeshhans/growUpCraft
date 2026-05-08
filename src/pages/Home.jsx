import Hero from "../components/Hero";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";
import HowWeWork from "../components/HowWeWork";
import TrustBar from "../components/TrustBar";

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Projects />
      <TrustBar/>
      <Testimonials />
      <HowWeWork/>
    </>
  );
};

export default Home;