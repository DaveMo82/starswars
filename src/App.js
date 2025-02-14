import { useDispatch, useSelector } from "react-redux";
//import { increment, decrement } from "./store/counterSlice";
import "./app.css";
import Carousel from "./carousel";
import Bildercarousel from "./BilderCarousel";

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
        <a href="#"><img src="lupe.svg" alt="lupe" className="lupe"/> SEARCH</a>
        <a href="#"><img src="login_icon.jpg" alt="login" className="login"/> LOG IN</a>
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
      <section className="mainpeople">
        <div className="skywalker">
          <img src="Skywalker.webp"/>
        </div>
        <div className="darth">
          <img src="Darth_Vader.jpg"/>
        </div>
        <div className="leia">
          <img src="Leia.webp"/>
        </div>
      </section>
      <Bildercarousel />
    </main>

    <footer>
        <ul>
            <li><a href="#">Term of USe</a></li>
            <li><a href="#">Additional Content Information</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Children's Online Privacy Policy</a></li>
            <li><a href="#">Your US State Privacy Rights</a></li>
            <li><a href="#">Disney Store | Star Wars</a></li>
            <li><a href="#">Star Wars Helpdesk</a></li>
        </ul>
    </footer>
    </body>
  );
}
