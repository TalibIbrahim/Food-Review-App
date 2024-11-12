import { useEffect, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import loginFoodPic from "../Assets/food.jpeg";
import { FaArrowRight } from "react-icons/fa";
import BytersLogo from "../Assets/BYTE_logo.png";
import { Link } from "react-router-dom";
import AuthContext from "../store/auth-context";

const Login = () => {
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const apiKey = process.env.REACT_APP_API_KEY;

  const authCtx = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({
        top: 120,
        behavior: "smooth",
      });
    }, 100);
  }, []);

  // Handle login logic
  const handleLogin = async (e) => {
    e.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    try {
      // Send login request to Firebase Authentication API
      const response = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true, // Ensure you get an ID token
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        // If login is successful, store the user token and navigate
        // console.log("Logged in:", data);
        // localStorage.setItem("token", data.idToken);
        authCtx.login(data.idToken);
        navigate("/");
        console.log("Logged in:", data);
      } else {
        // Handle errors (invalid email/password)
        alert(data.error.message);
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong, please try again!");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="flex w-full max-w-4xl bg-white rounded-2xl overflow-hidden shadow-2xl login-card">
        <div className="w-1/2 p-8 flex flex-col justify-center">
          <div className="mb-6 flex justify-center">
            <img
              src={BytersLogo}
              alt="brand-logo"
              className={"h-14 custom-inverted-logo"}
            />
          </div>
          <h2 className="text-2xl font-bold mb-2 text-center">WELCOME BACK</h2>{" "}
          <p className="text-gray-600 mb-6 text-center">
            Please enter your details
          </p>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm custom-font mb-2">
                Email
              </label>
              <input
                type="text"
                ref={emailInputRef}
                className="w-full px-3 py-2 border rounded focus:outline-none custom-focus-ring"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm custom-font mb-2">
                Password
              </label>
              <input
                type="password"
                ref={passwordInputRef}
                className="w-full px-3 py-2 border rounded focus:outline-none custom-focus-ring"
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="backgrnd-clr text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline  transition-all ease-in-out duration-300"
              >
                Login
              </button>
            </div>
          </form>
          <div className="mt-4 text-center">
            <Link
              to={"/forgot-password"}
              className="text-sm text-blue-600 hover:underline transition-all ease-in-out duration-500 "
            >
              Forgot Password?
            </Link>
          </div>
          <div className="mt-6 text-center">
            <Link
              to={"/signup"}
              className="text-blue-600 hover:underline flex items-center justify-start gap-2 transition-all ease-in-out duration-500"
            >
              <span>Sign Up</span>
              <FaArrowRight />
            </Link>
          </div>
        </div>

        <div
          className="w-1/2 bg-cover bg-center login-image"
          style={{
            backgroundImage: `url(${loginFoodPic})`,
            height: "100%",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Login;
