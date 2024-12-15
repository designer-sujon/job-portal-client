import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";

const SocialLogin = () => {
  const { signInWithGoogle } = useContext(AuthContext);

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="divider">OR</div>
      <button onClick={handleGoogleSignIn} className="btn">
        Sign In with Google
      </button>
    </div>
  );
};

export default SocialLogin;
