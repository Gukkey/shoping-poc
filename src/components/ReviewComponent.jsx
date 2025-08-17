import React from "react";
import Stars from "./Stars";

function ReviewComponent({ key, rating = 4.5 }) {
  return (
    <div
      className="h-50 w-90 rounded-lg bg-[#fef5e4] p-4 flex flex-col"
      id={key}
    >
      <div id="review-text-wrapper" className="flex gap-2 flex-col">
        <p className="text-[#fb3866] text-4xl font-bold">Guhan</p>
        <p className="text-[#554241]">
          I like buying cakes from them since they deliver on time and they are
          very good
        </p>
      </div>
      <Stars rating={rating} size={24} className="mt-auto" />
    </div>
  );
}

export default ReviewComponent;
