import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../Store/auth-context";

const Profile = () => {
  const authCtx = useContext(AuthContext);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      if (!authCtx.uid) {
        return;
      }

      try {
        const response = await fetch(
          `https://food-review-db0dd-default-rtdb.firebaseio.com/users/${authCtx.uid}.json?auth=${authCtx.token}`
        );
        if (!response.ok) throw new Error("Failed to fetch user data.");

        const data = await response.json();
        setUserData(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData(); //defined fetchUserData function inside useEffect then called it
  }, [authCtx.uid, authCtx.token]);

  return (
    <div className="p-20">
      <h1 className="text-3xl font-bold text-center">My Account</h1>
      {userData ? (
        <div className="text-center p-10">
          <div className="py-2">
            <span className="font-semibold pr-2">Username:</span>
            <span>{`@${userData.userName}`}</span>
          </div>
          <div className="py-2">
            <span className="font-semibold pr-2">Name:</span>
            <span>{`${userData.firstName}  ${userData.lastName}`}</span>
          </div>
          <div className="py-2">
            <span className="font-semibold pr-2">Email:</span>
            <span>{userData.email}</span>
          </div>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default Profile;
