import growTogetherSvg from "../assets/images/illustration-grow-together.svg";

const GrowTogether = () => {
  return (
    <section className="card grow-together">
      <div className="card-text">
        <h2>Grow Together</h2>
        <p>
          Generate meaningful discussions with your audience and build a strong,
          loyal community. Think of the insightful conversations you miss out on
          with a feedback form.
        </p>
      </div>
      <div className="card-image">
        <img src={growTogetherSvg} alt="Grow Together" />
      </div>
    </section>
  );
};

export default GrowTogether;
