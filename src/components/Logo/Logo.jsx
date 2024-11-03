import { Link } from "react-router-dom";
import styles from "./Logo.module.css";
import LogoIcon from "../../../public/Icons/logo.png";

function Logo() {
  return (
    <Link to="/">
      <img src={LogoIcon} alt="WorldWise logo" className={styles.logo} />
    </Link>
  );
}

export default Logo;
