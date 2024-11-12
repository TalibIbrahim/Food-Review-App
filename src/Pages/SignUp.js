import { FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import BytersLogo from "../Assets/BYTE_logo.png";
import loginFoodPic from "../Assets/food.jpeg";

const SignUp = () => {
  const navigate = useNavigate();

  const apiKey = process.env.REACT_APP_FIREBASE_API_KEY;

  const emailInputRef = useRef(null);
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const userNameRef = useRef(null);
  const passwordInputRef = useRef(null);
  const confirmPasswordInputRef = useRef(null);

  const [error, setError] = useState(""); // New state for storing error messages

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");

    const enteredEmail = emailInputRef.current.value;
    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const userName = userNameRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const confirmPassword = confirmPasswordInputRef.current.value;

    // check if the passwords match
    if (enteredPassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // response body for Firebase Authentication API
    const firebaseAuthData = {
      email: enteredEmail,
      password: enteredPassword,
      returnSecureToken: true,
    };

    try {
      // send request to Firebase Authentication API to create a new user
      const res = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(firebaseAuthData),
        }
      );

      // handle response from Firebase
      if (res.ok) {
        const data = await res.json();

        const userUid = data.localId; // Firebase provides a unique UID for each user
        const idToken = data.idToken; // Firebase ID token

        // Save user data in Firestore (or Realtime Database)
        const userData = {
          firstName,
          lastName,
          userName,
          email: enteredEmail,
          uid: userUid,
          reviews: [],
        };

        const saveUserDataRes = await fetch(
          `https://food-review-db0dd-default-rtdb.firebaseio.com/users/${userUid}.json?auth=${idToken}`,
          {
            method: "PUT", // Use PUT to store the data at the specified path
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userData), // Store the user data
          }
        );

        console.log(saveUserDataRes);

        if (saveUserDataRes.ok) {
          console.log("User data saved to the database successfully!");
          navigate("/login");
        } else {
          throw new Error("Failed to save user data to the database");
        }
      } else {
        const data = await res.json();

        // handle errors based on the response data
        if (data.error && data.error.message === "EMAIL_EXISTS") {
          setError("This email is already in use.");
        } else if (data.error && data.error.message.includes("WEAK_PASSWORD")) {
          setError("Password should be at least 6 characters.");
        } else {
          setError("Failed to sign up. Please try again.");
        }
      }
    } catch (error) {
      // catch any errors that occur during the fetch process
      console.error("Error during sign-up:", error);
      setError("Something went wrong. Please try again.");
    }

    console.log({
      name: `${firstName} ${lastName}`,
      email: enteredEmail,
      username: userName,
    });
  };

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({
        top: 120, // Adjust the scroll position as needed
        behavior: "smooth", // Smooth scroll effect
      });
    }, 100); // Delay of 100 milliseconds
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="flex w-full max-w-5xl h-1/3   bg-white rounded-2xl overflow-hidden shadow-2xl ">
        <div
          className="w-1/2 bg-cover bg-center login-image"
          style={{
            backgroundImage: `url(${loginFoodPic})`,
          }}
        />
        <div className="w-1/2 p-8 flex flex-col justify-center">
          <div className="mb-6 flex justify-center">
            <img
              src={BytersLogo}
              alt="brand-logo"
              className={"h-14 custom-inverted-logo"}
            />
          </div>
          <h2 className="text-2xl font-bold mb-2 text-center">
            WELCOME TO BYTERS
          </h2>
          <p className="text-gray-600 mb-6 text-center">
            Please enter your details
          </p>

          {error && <p className="text-red-500 text-center mb-4">{error}</p>}

          <form onSubmit={handleSignUp}>
            <div className="flex flex-row items-center justify-between pb-5">
              <div>
                <label className="block text-gray-700 text-sm custom-font mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  ref={firstNameRef}
                  className="w-full px-3 py-2 border rounded focus:outline-none custom-focus-ring "
                  placeholder="First Name"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm custom-font mb-2 ">
                  Last Name
                </label>
                <input
                  type="text"
                  ref={lastNameRef}
                  className="w-full px-3 py-2 border rounded focus:outline-none custom-focus-ring"
                  placeholder="Last Name"
                  required
                />
              </div>
            </div>
            <div className="pb-5">
              <label className="block text-gray-700 text-sm custom-font mb-2">
                Email
              </label>
              <input
                type="email"
                ref={emailInputRef}
                className="w-full px-3 py-2 border rounded focus:outline-none custom-focus-ring"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="pb-5">
              <label className="block text-gray-700 text-sm custom-font mb-2">
                Username
              </label>
              <input
                type="text"
                ref={userNameRef}
                className="w-full px-3 py-2 border rounded focus:outline-none custom-focus-ring"
                placeholder="Enter username"
                required
              />
            </div>

            <div className="pb-5">
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
              <label className="block text-gray-700 text-sm custom-font mb-2 pt-5">
                Confirm Password
              </label>
              <input
                type="password"
                ref={confirmPasswordInputRef}
                className="w-full px-3 py-2 border rounded focus:outline-none custom-focus-ring"
                placeholder="Enter your password again"
                required
              />
            </div>

            <div className="flex items-center justify-end">
              <button
                type="submit"
                className="backgrnd-clr text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline  transition-all ease-in-out duration-300"
              >
                Sign Up
              </button>
            </div>
          </form>
          <div className="mt-6 text-center ">
            <Link
              to={"/login"}
              className="text-blue-600 hover:underline flex items-center justify-end gap-2 transition-all ease-in-out duration-500"
            >
              <FaArrowLeft />
              <span>Already have an account? Login</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
