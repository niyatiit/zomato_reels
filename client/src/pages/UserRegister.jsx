import "../styles/theme.css";
import "../styles/auth.css";
import axios from "axios";

export default function UserRegister() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const fullname = e.target.fullname.value;
    const contactName = e.target.contactName.value;
    const phone = e.target.phone.value;
    const address = e.target.address.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(fullname) //first fullname for just check the code is run in the console.log or not

    const response = await axios.post(
      "http://localhost:3000/api/user/register",
      fullname,
      contactName,
      phone,
      address,
      email,
      password

    );
  };
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Create Your Account</h2>

        <form onSubmit={handleSubmit}>
          <input type="text" name="fullname" placeholder="Full Name" />
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
            Already have an account? <a href="/user/login">Login</a>
          </p>
          <p>
            Want to register as a food partner?{" "}
            <a href="/food-partner/register">Click here</a>
          </p>
        </div>
      </div>
    </div>
  );
}
