import React from "react";
import "./loader.css"

export default function Loading() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
      }}
    >
     <div className="boxes">
    <div className="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div className="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div className="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div className="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
</div>
    </div>
  );
}
