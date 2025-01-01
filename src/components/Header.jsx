import { LOGO_URL } from "../utils/constants";

const Header = () => (
  <header>
    <img className="logo" src={LOGO_URL} />
    <ul>
      <li>About</li>
      <li>Contact Us</li>
      <li>Account</li>
      <li>Cart</li>
    </ul>
  </header>
);

export default Header;
