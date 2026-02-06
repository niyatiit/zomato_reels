import "../styles/theme.css";
import "../styles/auth.css";

const UserLogin = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Welcome Back</h2>

        <form>
          <input type="email" placeholder="Email address" />
          <input type="password" placeholder="Password" />
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
