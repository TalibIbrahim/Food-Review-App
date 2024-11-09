import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import "./Login.css";
import loginFoodPic from "../Assets/food.jpeg"; // Make sure the image path is correct
import { FaArrowRight } from "react-icons/fa"; // For a sliding arrow icon
import BytersLogo from "../Assets/BYTE_logo.png";

const Login = () => {
  const [email, setEmail] = useState(""); // State to hold the email input
  const [password, setPassword] = useState(""); // State to hold the password input
  const navigate = useNavigate(); // Navigate hook

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({
        top: 120, // Adjust the scroll position as needed
        behavior: "smooth", // Smooth scroll effect
      });
    }, 100); // Delay of 100 milliseconds
  }, []);

  // Handle login logic
  const handleLogin = (e) => {
    e.preventDefault(); // Prevent form submission

    console.log("Login:", email, password); // For now, just log the email and password

    // Here, you can add API call or validation logic for login

    navigate("/home"); // Navigate to home page after successful login
  };

  // Navigate to signup page
  const handleSignup = () => {
    navigate("/signup"); // Navigate to signup page with sliding animation
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="flex w-full max-w-4xl bg-white rounded-2xl overflow-hidden shadow-2xl login-card">
        <div className="w-1/2 p-8 flex flex-col justify-center">
          <div className="mb-6 flex justify-center">
            {/* <h1 className="text-4xl font-semibold text-gray-800">Byters</h1>{" "} */}
            <img
              src={BytersLogo}
              alt="brand-logo"
              className={"h-14 custom-inverted-logo"}
            />
          </div>
          <h2 className="text-2xl font-bold mb-2 text-center">WELCOME BACK</h2>{" "}
          {/* Main Heading */}
          <p className="text-gray-600 mb-6 text-center">
            Please enter your details
          </p>{" "}
          {/* Subheading */}
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded focus:outline-none custom-focus-ring"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded focus:outline-none custom-focus-ring"
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="backgrnd-clr text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Login
              </button>
            </div>
          </form>
          {/* Forgot Password link */}
          <div className="mt-4 text-center">
            <a
              href="/forgot-password"
              className="text-sm text-blue-600 hover:underline"
            >
              Forgot Password?
            </a>
          </div>
          {/* Sign Up Button */}
          <div className="mt-6 text-center">
            <button
              onClick={handleSignup}
              className="text-blue-600 hover:underline flex items-center justify-center gap-2"
            >
              <span>Sign Up</span> <FaArrowRight />
            </button>
          </div>
        </div>

        <div
          className="w-1/2 bg-cover bg-center login-image"
          style={{
            backgroundImage: `url(${loginFoodPic})`,
            height: "100%", // Ensure the image takes the full height of the parent container
          }}
        ></div>
      </div>
    </div>
  );
};

export default Login;
