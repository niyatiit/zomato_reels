import "../styles/theme.css";
import "../styles/auth.css";

export default function FoodPartnerRegister() {
  return (
     <div className="auth-container">
    <div className="auth-card">
      <h2>Register as a Food Partner</h2>

      <form>
        <input type="text" placeholder="Restaurant / Partner name" />
        <input type="email" placeholder="Business email" />
        <input type="password" placeholder="Password" />
        <button>Create Partner Account</button>
      </form>

      <div className="auth-footer">
        <p>
          Already a partner? <a href="/food-partner/login">Login</a>
        </p>
        <p>
          Want to order food instead?{" "}
          <a href="/user/register">Create User Account</a>
        </p>
      </div>
    </div>
    </div>
  );
}
