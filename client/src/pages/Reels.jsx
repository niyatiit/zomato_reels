import { useEffect, useRef, useState } from "react";
import "../styles/reels.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Reels = () => {
  const [foods, setFoods] = useState([]);
  const videoRefs = useRef([]);

  // 🔹 Fetch food reels
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/food", {
        withCredentials: true,
      })
      .then((res) => {
        console.log("API RESPONSE 👉", res.data);

        if (res.data.success) {
          setFoods(res.data.foodItems);
        }
      })
      .catch((err) => {
        console.error("Food fetch error:", err);
      });
  }, []);

  // 🔹 Play only ONE video at a time (Reels behavior)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;

          if (entry.isIntersecting) {
            video.play();
          } else {
            video.pause();
          }
        });
      },
      {
        threshold: 0.6, // 60% visible
      }
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => {
      videoRefs.current.forEach((video) => {
        if (video) observer.unobserve(video);
      });
    };
  }, [foods]);

  return (
    <div className="reels-container">
      {foods.map((item, index) => (
        <div className="reel" key={item._id}>
          <video
            ref={(el) => (videoRefs.current[index] = el)}
            src={item.video}
            className="reel-video"
            muted
            loop
            playsInline
          />

          <div className="reel-overlay">
            <p className="reel-description">
              {item.description || "Delicious food just for you 🍕🍔"}
            </p>

            <Link
              to={`/food-partner/${item.foodPartner}`}
              className="reel-button"
            >
              Visit Store
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reels;
