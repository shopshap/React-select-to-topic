import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Your Fear</span>
        <span className="headerTitleLg">Story</span>
      </div>
      <img
        className="headerImg"
        src="https://files.fm/thumb_show.php?i=bzsrhpp7m"
        alt=""
      />
    </div>
  );
}
