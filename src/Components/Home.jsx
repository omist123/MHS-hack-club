import { useState } from "react";
import "../Styles/home.css";
function Home() {
  return (
    <div className="flex flex-col justify-center items-center sm:flex-row sm:justify-evenly sm:items-center">
      <div className="flex flex-col self-start text-center sm:text-left">
        <h1 className="text-red-500 pt-20 lg:text-5xl sm:text-6xl ml-7">
          Melrose High School Hack Club
        </h1>
        <p className="text-white lg:text-4xl sm:text-2xl sm:pt-20 lg:pt-32 ml-7 custom-w-class overflow-hidden">
          Welcome! Thanks for dropping by!
          <br />
          <br />
          MHS &nbsp;
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">
            Hack Club
          </span>
          &nbsp; is a space where students of all levels of experience gather to
          collaborate on and create cool things - for example, this website.
        </p>
      </div>
      <img
        className="pt-20 mx-auto sm:mr-20 sm:ml-0 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-80 lg:h-96"
        src="https://jgpr.net/wp-content/uploads/2019/12/melrose-logo-1-300x300.png"
        alt=""
      />
    </div>
  );
}
export default Home;
