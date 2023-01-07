import Button from "./Button";
import logo from "../assets/images/logo.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="container header-flex">
        <div className="logo">
          <img src={logo} alt="Huddle Logo" />
        </div>
        <Button background="#fff" color="#111" text="Try it Free" />
      </div>
    </div>
  );
};

export default Header;
