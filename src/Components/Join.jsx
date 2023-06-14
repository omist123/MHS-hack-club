import React from "react";
import one from "../assets/1.svg";
import two from "../assets/2.svg";
import three from "../assets/3.svg";

function Join() {
  return (
    <div className="mx-20">
      <div className="flex flex-col items-start justify-center">
        <h1 className="text-white text-4xl py-14 items-start">Join us</h1>
        <p className="text-white text-3xl pb-14 items-start">
          Thinking of joining MHS Hack Club? Great! Unsure if we’re the club for
          you? Here’s a three-point thesis statement explaining why you should
          join us:
        </p>
      </div>
      <div className="flex flex-col items-start text-white text-3xl">
        <div className="flex">
          <div className="flex flex-col items-start">
            <img
              className="lg:pb-14 pb-[10rem] self-start w-[200px] h-[200px]"
              src={one}
              alt=""
            />
            <img
              className="lg:pb-14 pb-[7rem] self-start w-[200px] h-[200px]"
              src={two}
              alt=""
            />
            <img
              className="lg:pb-14 pb-[10rem] self-start w-[200px] h-[200px]"
              src={three}
              alt=""
            />
          </div>
          <div className="flex flex-col items-start">
            <p className="pl-10">
              Beginners can learn basic computer science skills without the
              pressure of a traditional class.
            </p>
            <p className="pl-10 pt-10 md:pt-24 lg:pt-20">
              Experienced programmers can connect and collaborate on more
              advanced projects.
            </p>
            <p className="pl-10 pt-10 md:pt-20 lg:pt-20">
              Free. Stickers. Need we say more?
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-10">
        <a
          target="_blank"
          href="https://docs.google.com/forms/d/e/1FAIpQLSe95N_MxtiiWM3XZB49AK-lUFF0Y6b0I-0jZr0JJScSPsBtmw/viewform?usp=sf_link"
        >
          <button className="bg-red-500 hover:bg-red-400 text-white text-4xl font-bold py-8 px-10 rounded-[3rem]">
            Join Now
          </button>
        </a>
      </div>
    </div>
  );
}

export default Join;
