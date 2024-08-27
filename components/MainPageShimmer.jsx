import React from "react";
import "../src/shimmer.css";
import ShimmerCard from "./ShimmerCard";

export default function MainPageShimmer() {
  return (
    <div>
      <div className='main-shimmer-wrapper wrapper'>
        <div className='search-shimmer-wrapper'>
          <div className='search-input search-shimmer'></div>
          <div className='selected-wrapper select-shimmer'></div>
        </div>
        <div className="shimmer-wrapper country-list-wrapper">
            <ShimmerCard />
        </div>
      </div>
    </div>
  );
}
