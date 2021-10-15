import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT THIS WEBSITE</span>
        <img
          className="sidebarImg"
          src="https://files.fm/thumb_show.php?i=e9dhs79p8"
          alt=""
        />
        <p>
        This is a website where you can share and read horror experiences or you can create your own horror stories. 
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <a href="https://www.facebook.com/shopshop.kurukuru/"><i className="sidebarIcon fab fa-facebook-square"></i></a>
          <a href="https://www.instagram.com/_shopshap_/"><i className="sidebarIcon fab fa-instagram-square"></i></a>
        </div>
      </div>
    </div>
  );
}
