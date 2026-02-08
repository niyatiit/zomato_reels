import "../styles/theme.css";
import "../styles/auth.css";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function FoodPartnerRegister() {
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const name = e.target.name.value;
      const contactName = e.target.contactName.value;
      const phone = e.target.phone.value;
      const address = e.target.address.value;
      const email = e.target.email.value;
      const password = e.target.password.value;
      // console.log(fullname) //first fullname for just check the code is run in the console.log or not

      const response = await axios.post(
        "http://localhost:3000/api/food-partner/register",
        { name, contactName, phone, address, email, password },
        { withCredentials: true },
      );
      console.log(response);

      if (response.data.success) {
        toast.success("Food Partner Registration Successfully");
        navigate("/food-partner")
      } else {
        toast.error(response.data.message);
      }

      e.target.name.value = "";
      e.target.contactName.value = "";
      e.target.phone.value = "";
      e.target.address.value = "";
      e.target.email.value = "";
      e.target.password.value = "";


    } catch (error) {
      toast.error(response.data.error);
    }
  };
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Create Your Account</h2>

        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Full Name" />
          <input
            type="text"
            name="contactName"
            placeholder="Contact Person Name"
          />
          <input type="tel" name="phone" placeholder="Phone Number" />
          <input type="text" name="address" placeholder="Address" />
          <input type="email" name="email" placeholder="Email Address" />
          <input type="password" name="password" placeholder="Password" />

          <button type="submit">Register</button>
        </form>

        <div className="auth-footer">
          <p>
            Already have an account? <a href="/food-partner/login">Login</a>
          </p>
          <p>
            Want to register as a User? <a href="/user/register">Click here</a>
          </p>
        </div>
      </div>
    </div>
  );
}
