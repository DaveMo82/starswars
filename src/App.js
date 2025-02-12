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
          <a href="#"><img src="tiktok.svg" alt="tiktok" /></a>
          <a href="#"><img src="instagram.png" alt="instgram" /></a>
          <a href="#"><img src="twitter.webp" alt="twitter" /></a>
          <a href="#"><img src="facebook.webp" alt="facebook" /></a>
          <a href="#"><img src="youtube.png" alt="youtube" /></a>
          <a href="#"><img src="kids.svg" alt="kids" /></a>
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
        <Carousel />
      </section>
    </main>

    <footer>
      <p>Copyright 2025</p>
    </footer>
    </body>
  );
}
