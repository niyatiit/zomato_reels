import "../styles/theme.css";
import "../styles/auth.css";

export default function FoodPartnerLogin() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Food Partner Portal</h2>

        <form>
          <input type="email" placeholder="Business email" />
          <input type="password" placeholder="Password" />
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
