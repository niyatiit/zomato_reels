import "../styles/theme.css";
import "../styles/auth.css";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const UserLogin = () => {
  const navigate = useNavigate();
  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();

      const email = e.target.email.value;
      const password = e.target.password.value;
      console.log(email, password);

      const response = await axios.post(
        "http://localhost:3000/api/user/login",
        { email, password },
        { withCredentials: true },
      );
      // console.log(response);
      if (response.data.success) {
        toast.success("Login Successfully");
        navigate("/");
      } else {
        toast.error(response.data.message);
      }
      e.target.password.value = "";
      e.target.email.value = "";
    } catch (error) {
      toast.error(response.data.message);
    }
  };
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Welcome Back User</h2>

        <form onSubmit={onSubmitHandler}>
          <input type="email" placeholder="Email address" name="email" />
          <input type="password" placeholder="Password" name="password" />
          <button>Login</button>
        </form>

        <div className="auth-footer">
          <p>
            Don’t have a user account?{" "}
            <a href="/user/register">Create Account</a>
          </p>
          <p>
            Are you a food partner? <a href="/food-partner/login">Login here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
