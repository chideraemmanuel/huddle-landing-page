import locationIcon from "../assets/images/icon-location.svg";
import phoneIcon from "../assets/images/icon-phone.svg";
import emailIcon from "../assets/images/icon-email.svg";

const Contact = () => {
  return (
    <div className="contact">
      <div className="location contact-flex">
        <img src={locationIcon} alt="Icon" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
      </div>
      <div className="phone contact-flex">
        <img src={phoneIcon} alt="Icon" />
        <p>+1-543-123-4567</p>
      </div>
      <div className="email contact-flex">
        <img src={emailIcon} alt="Icon" />
        <p>example@huddle.com</p>
      </div>
    </div>
  );
};

export default Contact;
