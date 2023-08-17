import { Link } from "react-router-dom";
import "./Logo.css";

function Logo() {
  return (
    <Link className="logo" to="/" title="На главную" />
  );
}

export default Logo;
