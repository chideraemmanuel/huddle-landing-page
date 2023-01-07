const Button = ({ background, color, text }) => {
  return (
    <a
      href="/"
      className="btn"
      style={{ backgroundColor: background, color: color }}
    >
      {text}
    </a>
  );
};

export default Button;
