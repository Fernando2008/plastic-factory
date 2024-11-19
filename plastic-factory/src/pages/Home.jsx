import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import video from "../assets/final_light.mp4";
import "../css/Home.css";

const Home = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    AOS.init({ duration: 300 });

    setWindowWidth(window.innerWidth);
  }, [windowWidth]);

  const videoRef = useRef();
  const [almostEnded, setAlmostEnded] = useState(false);

  const handleTimeUpdate = () => {
    const currentTime = videoRef.current.currentTime;
    const duration = videoRef.current.duration;

    if (currentTime >= (5 * duration) / 9 && !almostEnded) {
      setAlmostEnded(true);
    }
  };

  return (
    <>
      <div className="home">
        <div className="home-video">
          <video
            autoPlay
            muted
            playsInline
            ref={videoRef}
            onTimeUpdate={handleTimeUpdate}
          >
            <source src={video} type="video/mp4" />
            Il tuo browser non supporta il video.
          </video>
        </div>
        <div
          className={
            almostEnded && windowWidth >= 769
              ? "home-body is-visible"
              : windowWidth <= 769
              ? "home-body is-visible"
              : "home-body not-visible"
          }
        >
          <p>
            Welcome to Plastic Factory Films!
            <br />
            Your gateway to the fascinating universe of horror, thriller and
            sci-fi cinema.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
