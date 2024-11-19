// import { useState } from "react";
// import FullImage from "../components/FullImage";
import bounByMotion from "../assets/bound-by-motion.jpeg";
import video from "../assets/Bound_by_Motion_TEASER_v3.mp4";
import img1 from "../assets/image-1.jpeg";
import img2 from "../assets/image-2.jpeg";
import img3 from "../assets/image-3.jpeg";
import img4 from "../assets/image-4.jpeg";
import img5 from "../assets/image-5.jpeg";
import img6 from "../assets/image-6.jpeg";
import img7 from "../assets/image-7.jpeg";
import img8 from "../assets/image-8.jpeg";
import img9 from "../assets/image-9.jpeg";
import "../css/Productions.css";

const Productions = () => {
  // const [fullImage, setFullImage] = useState(false);

  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

  return (
    <>
      <div className="production">
        <div className="production-left">
          <img
            src={bounByMotion}
            alt="Bound By Motion Image"
            id="bound-by-motion"
          />
          <div className="production-central">
            <p>
              A young woman wakes up in a confined, windowless room, wearing a
              homemade motion capture suit. Controlled by a mysterious captor
              who calls himself “Cowboy,” she must navigate his bizarre demands
              to get free and uncover the truth behind her imprisonment.
            </p>
            <div className="production-video">
              <video controls>
                <source src={video} type="video/mp4" />
                Il tuo browser non supporta il video.
              </video>
            </div>
            <div className="production-images">
              {Object.entries(images).map(([index, item]) => {
                return (
                  <div key={index} className="p-images-grid">
                    <img
                      src={item}
                      alt={`IMAGE ${index}`}
                      // onClick={() => setFullImage(true)}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Productions;
