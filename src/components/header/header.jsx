import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitlesm">React & Node</span>
        <span className="headerTitlelg">Blog</span>
      </div>
      <img
        className="headerImage"
        src="https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg"
        alt=""
      ></img>
    </div>
  );
}
