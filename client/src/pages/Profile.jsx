import "../styles/profile.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Profile() {
  const { id } = useParams();

  const [profile, setProfile] = useState(null);
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/food-partner/${id}`,
          { withCredentials: true }
        );

        // console.log("FULL RESPONSE 👉", response.data);

        setProfile(response.data.foodPartner);
        setFoods(response.data.foods || []);
      } catch (error) {
        console.error("Profile fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [id]);

  if (loading) {
    return <div className="profile-wrapper">Loading...</div>;
  }

  if (!profile) {
    return <div className="profile-wrapper">Profile not found</div>;
  }

  return (
    <div className="profile-wrapper">
      <div className="profile-box">
        {/* HEADER */}
        <div className="profile-header">
          <div className="header-top">
            <div className="avatar"></div>

            <div className="header-text">
              <h3>{profile.name}</h3>
              <p>{profile.address}</p>
            </div>
          </div>

          <div className="header-stats">
            <div>
              <span>Total meals</span>
              <strong>{foods.length}</strong>
            </div>
            <div>
              <span>Customers served</span>
              <strong>—</strong>
            </div>
          </div>
        </div>

        {/* VIDEOS GRID */}
        <div className="media-grid">
          {foods.length === 0 ? (
            <p>No videos uploaded</p>
          ) : (
            foods.map((food, i) =>
              food.video.map((videoUrl, j) => (
                <video
                  key={`${i}-${j}`}
                  src={videoUrl}
                  controls
                  className="media-card"
                />
              ))
            )
          )}
        </div>
      </div>
    </div>
  );
}
