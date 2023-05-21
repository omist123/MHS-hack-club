import { useState } from "react";

function Home() {
  return (
    <div className="flex flex-row justify-evenly items-center">
      <div className="flex flex-col self-start">
        <h1 className="text-red-500 pt-20 text-4xl ml-7">
          Melrose High School Hack Club
        </h1>
        <p className="text-white text-2xl pt-20 ml-7 max-w-lg overflow-hidden">
          Welcome! Thanks for dropping by!
          <br />
          <br />
          MHS Hack Club is a space where students of all levels of experience
          gather to collaborate on and create cool things - for example, this
          website.
        </p>
      </div>
      <img
        className="pt-20 mr-20 w-72 h-70 "
        src="https://jgpr.net/wp-content/uploads/2019/12/melrose-logo-1-300x300.png"
        alt=""
      />
    </div>
  );
}
export default Home;
