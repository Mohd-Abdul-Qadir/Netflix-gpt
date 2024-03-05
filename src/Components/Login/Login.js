import React, { useState } from "react";
import Header from "../Header/Header";

const Login = () => {
  const [islogin, setIslogin] = useState(true);

  const signUpButton = () => {
    setIslogin(!islogin);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="Background-image"
        />
      </div>
      <form className="absolute bg-black bg-opacity-75 rounded flex justify-center flex-col box-border my-36 mx-auto right-0 left-0 min-h-96 py-[60px] px-[68px] w-[450px] text-white">
        <h1 className=" text-3xl font-medium mb-7">
          {islogin ? "Sign In" : "Sign Up"}
        </h1>

        {!islogin && (
          <input
            type="text"
            autoComplete="off"
            placeholder="First Name"
            className="m-2 bg-[#333] rounded h-12 p-4 w-full "
          />
        )}
        <input
          type="email"
          autoComplete="off"
          placeholder="Email or Phone Number"
          className="m-2 bg-[#333] rounded h-12 p-4 w-full "
        />
        <input
          autoCapitalize="off"
          type="password"
          placeholder="Password"
          className="p-2 m-2 bg-[#333] rounded h-12 w-full"
        />
        <button className="p-4 m-1 w-full bg-[#e50914] rounded font-medium text-[16px] mt-6 ">
          {islogin ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-4 text-[#8c8c8c]">
          New to Netflix?
          <span className="text-blue-700 cursor-pointer" onClick={signUpButton}>
            {islogin ? " Sign Up Now" : " Sign In"}
          </span>
        </p>
        <p className="p-4 text-[#8c8c8c]">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
        </p>
      </form>
    </div>
  );
};

export default Login;
