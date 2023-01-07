import Button from "./Button";
import ctaImage from "../assets/images/illustration-mockups.svg";

const CallToAction = () => {
  return (
    <section className="cta">
      <div className="container cta-grid">
        <div className="cta-text">
          <h1>Build The Community Your Fans Will Love</h1>
          <p>
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>
          <Button
            background=" hsl(322, 100%, 66%)"
            color="#fff"
            text="Get Started For Free"
          />
        </div>
        <div className="cta-img">
          <img src={ctaImage} alt="Call to action" />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
