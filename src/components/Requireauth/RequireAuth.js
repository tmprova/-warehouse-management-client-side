import React from "react";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../firebase/firebase.init";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Loading from "../Loading/Loading";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const [sendEmailVerification, sending] = useSendEmailVerification(auth);
  const location = useLocation();

  if (loading || sending) {
    return <Loading />;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if (!user.emailVerified) {
    return (
      <div className="text-center mt-5 py-5 section">
        <div>
          <h4 className="text-red-600">Email is not verified!!</h4>
          <h5 className="text-white"> Please Verify your email</h5>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          onClick={async () => {
            await sendEmailVerification();
            toast("Verification email sending");
          }}
        >
          {" "}
          Send Again
        </button>
      </div>
    );
  }

  return children;
};

export default RequireAuth;
