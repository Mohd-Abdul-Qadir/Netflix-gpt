import React, { useEffect } from "react";
import { auth } from "../../Utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../../Utils/userSlice";
import { toggleGptSearchView } from "../../Utils/getSlice";
import { SUPPORTED_LANGUAGES } from "../../Utils/constants";
import lang from "../../Utils/languageContains";
import { changeLanguage } from "../../Utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    // Unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleGptSearchLink = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="absolute w-screen bg-gradient-to-b from-black z-10 flex justify-around item-center pt-3">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo-netflix"
      />

      <div className="flex h-12 gap-3 ">
        {showGptSearch && (
          <select
            className="p-2 bg-gray-900 text-white"
            onChange={handleLanguageChange}
          >
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>
        )}
        <button
          className="py-2 px-4 m-1 bg-white text-black rounded-lg font-bold"
          onClick={handleGptSearchLink}
        >
          {showGptSearch ? "Home Page" : "GPT Search"}
        </button>
        <img src="/image/netflix-profile.jpg" alt="User Icon" width={50} />
        <button onClick={handleSignOut} className="font-bold ">
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Header;
