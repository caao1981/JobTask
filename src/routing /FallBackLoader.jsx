import React from "react";
import ThreeDotsLoader from "./../components/Loaders/ThreeDots";

const Loader = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backdropFilter: "blur(4px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ThreeDotsLoader />
    </div>
  );
};

export default Loader;
