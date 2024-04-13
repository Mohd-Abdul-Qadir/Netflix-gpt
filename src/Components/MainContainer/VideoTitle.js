import React from "react";
const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black w-screen aspect-square ">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="my-4 flex gap-2">
        <button className="bg-gray-500 py-2 px-12 text-white font-bold rounded text-lg bg-opacity-50">
          {"|> Play"}
        </button>
        <button className="bg-gray-500 py-2 px-12 text-white font-bold rounded text-lg bg-opacity-50">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
