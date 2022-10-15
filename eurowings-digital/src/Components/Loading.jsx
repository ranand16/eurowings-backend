import React from "react";
import { getImageRoute } from "../utility/functions";

export function Loading() {
  return <p 
        className="loadingGif d-flex align-items-center justify-content-center"
    >
        <img src={getImageRoute("loading.gif")} alt={"Loading..."} />                
    </p>;
}
  