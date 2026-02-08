import "../styles/theme.css";
import "../styles/auth.css";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function UserRegister() {
  const navigate =  useNavigate()
  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();

      const name = e.target.name.value;
      const password = e.target.password.value;
      const email = e.target.email.value;

      console.log(name, password, email);

      const response = await axios.post(
        "http://localhost:3000/api/user/register",
        { name, password, email },{
          withCredentials : true
        }
      );

      if (response.data.success) {
        toast.success("Registration Successfully created");
        navigate("/")
      } else {
        toast.error(response.data.message);
      }

      e.target.name.value = "";
      e.target.password.value = "";
      e.target.email.value = "";


    } catch (error) {
      toast.error(response.data.error)
    }
  };
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Register as a User</h2>

        <form onSubmit={onSubmitHandler}>
          <input type="text" placeholder="User Name" name="name" />
          <input type="password" placeholder="Password" name="password" />
          <input type="email" placeholder="email" name="email" />
          <button>Create Account</button>
        </form>

        <div className="auth-footer">
          <p>
            Already a User Account ? <a href="/user/login">Login</a>
          </p>
          <p>
            Want to register as a food partner ?{" "}
            <a href="/food-partner/register">Create Food Partner Account</a>
          </p>
        </div>
      </div>
    </div>
  );
}
