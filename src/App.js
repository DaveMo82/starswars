import { useDispatch, useSelector } from "react-redux";
//import { increment, decrement } from "./store/counterSlice";
import "./app.css";
import Carousel from "./carousel";

export default function App() {
  const count = useSelector((state) => state.counter.value);
  //const dispatch = useDispatch();

  return (
    <body>
    <header>
      <div className="top-bar">
        <div className="social-icon">
          <a href="#"><img src="tiktok.svg" alt="tiktok" className="tiktok_icon"/></a>
          <a href="#"><img src="instagram.png" alt="instgram" className="instagram_icon"/></a>
          <a href="#"><img src="twitter.png" alt="twitter" className="twitter_icon"/></a>
          <a href="#"><img src="facebook.svg" alt="facebook" className="facebook_icon"/></a>
          <a href="#"><img src="youtube.svg" alt="youtube" className="youtube_icon"/></a>
          <a href="#"><img src="kids.svg" alt="kids" className="kids_icon"/></a>
        </div>
      <div className="auth">
        <a href="#">🔍 SEARCH</a>
        <a href="#">👤 LOG IN</a>
      </div>
        </div>

        <div className="logo">
          <img src="stars_wars_logo.png" alt="Stars Wars Logo" />
        </div>

      <nav>
        <ul>
           <li><a href="#">NEWS + FEATURES</a></li>
                <li><a href="#">VIDEO</a></li>
                <li><a href="#">FILMS</a></li>
                <li><a href="#">SERIES</a></li>
                <li><a href="#">GAMES + INTERACTIVE</a></li>
                <li><a href="#">DATABANK</a></li>
                <li><a href="#">DISNEY+</a></li>
        </ul>
      </nav>
    </header>

    <main>
      <section>
        <div className="title_carousel"><a href="#">stars wars on disney+</a></div>
        <Carousel />
      </section>
      <section className="battle">
        <div className="darkmaul">
          <img src="star-wars-darth-maul.jpg"/>
        </div>
        <div className="obiWan">
          <img src="Obi-Wan-Kenobi.jpg"/>
        </div>
      </section>
    </main>

    <footer>
      <p>Copyright 2025</p>
    </footer>
    </body>
  );
}
