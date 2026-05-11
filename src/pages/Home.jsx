import Hero from "../components/Hero";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";
import HowWeWork from "../components/HowWeWork";
import TrustBar from "../components/TrustBar";
import Contact from "../components/Contact";


const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Projects />
      <TrustBar/>
      <Testimonials />
      <HowWeWork/>
      <Contact/>
    </>
  );
};

export default Home;