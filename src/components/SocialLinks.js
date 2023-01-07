import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="socials">
      <div className="social-links">
        <FaFacebookF className="icon" />
        <FaTwitter className="icon" />
        <FaInstagram className="icon" />
      </div>
      <p>&copy; Copyright 2018 Huddle. All rights reserved.</p>
    </div>
  );
};

export default SocialLinks;
