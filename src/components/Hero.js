import Header from "./Header";
import heroBg from "../assets/images/bg-hero-desktop.svg";
import CallToAction from "./CallToAction";

const Hero = () => {
  return (
    <div
      className="hero"
      style={{ background: `url(${heroBg}) no-repeat center center/cover` }}
    >
      <Header />
      <CallToAction />
    </div>
  );
};

export default Hero;
