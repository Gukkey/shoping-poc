import React from "react";
import strawberryCake from "../assets/strawberry-cake-3.png";
import ReviewComponent from "../components/ReviewComponent";
import ScrollingCarousel from "../components/ScrollingCarousel";

function HomePage() {
  return (
    <div className="h-[calc(100vh-96px)] overflow-y-auto flex flex-col">
      <div
        className="flex md:flex-row flex-col gap-20 bg-[#fef5e4] pb-10 flex-1 min-h-0"
        id="intro-wrapper"
      >
        <img
          src={strawberryCake}
          alt="strawberry-cake"
          className="block max-w-[600px] max-h-[600px] w-auto h-auto"
          id="strawberry-cake"
        />
        <div
          className="flex flex-col gap-6 text-[#f93a61] max-w-2xl justify-center"
          id="intro-text-wrapper"
        >
          <p className=" text-5xl font-bold">Do you like cakes?</p>
          <p className="text-lg font-semibold text-[#b8a090] ">
            Then you are the right place! We offer wide variety of cakes for you
            to choose from. We have served over 100+ customers and we are still
            going strong.
          </p>
        </div>
      </div>
      <div
        id="reviews-container"
        className="bg-[#ffc5c4] flex flex-col md:flex-row gap-2 p-4 flex-shrink-0"
      >
        <div
          id="reviews-text-wrapper"
          className="text-[#fefcfd] flex flex-col gap-6 pl-20 max-w-[40%]"
        >
          <p className="text-5xl font-bold">
            Here's what our customers say about our cakes
          </p>
          <p className="text-lg font-semibold text-[#c08783]">
            100% honest reviews.
          </p>
        </div>
        <ScrollingCarousel direction="left" className="flex-1">
          {Array.from({ length: 6 }).map((_, index) => (
            <ReviewComponent key={index} />
          ))}
        </ScrollingCarousel>
      </div>
    </div>
  );
}

export default HomePage;
