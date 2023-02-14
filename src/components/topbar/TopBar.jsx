import { Link } from "react-router-dom";
import "./TopBar.css";

export default function TopBar() {
  return (
    <div className="top">
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/Settings" className="link">
              About Me
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/Post/:postId" className="link">
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
