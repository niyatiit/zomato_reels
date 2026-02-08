import "../styles/theme.css";
import "../styles/auth.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

export default function FoodPartnerLogin() {
  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    try {
      const email = e.target.email.value;
      const password = e.target.password.value;
      // console.log(email, password);

      const response = await axios.post(
        "http://localhost:3000/api/food-partner/login",
        { email, password },
        { withCredentials: true },
      );
      console.log(response)
      if(response.data.success){
        toast.success("Food Partner Login Successfully")
        navigate("/food-partner");
      }
      else(
        toast.error(response.data.message)
      )
      e.target.email.value = "";
      e.target.password.value = "";

    } catch (error) {
      toast.error(response.data.error);
    }
  };
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Food Partner Portal</h2>

        <form onSubmit={onSubmitHandler}>
          <input type="email" placeholder="Business email" name="email" />
          <input type="password" placeholder="Password" name="password" />
          <button>Login</button>
        </form>

        <div className="auth-footer">
          <p>
            New food partner? <a href="/food-partner/register">Register here</a>
          </p>
          <p>
            Looking for a user account?{" "}
            <a href="/user/register">Create User Account</a>
          </p>
        </div>
      </div>
    </div>
  );
}
