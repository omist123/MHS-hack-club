import { useState } from "react";

function Home() {
  return (
    <div className="flex flex-col spcae-between justify-between items-center overflow-auto ">
      <h1 className="text-red-500 pt-20 text-3xl">
        Melrose High School Hack Club
      </h1>

      <img
        className="pt-20 w-52 h-54"
        src="https://jgpr.net/wp-content/uploads/2019/12/melrose-logo-1-300x300.png"
        alt=""
      />
      <p className="text-white text-2xl p-20">
        A place for students at MHS who having an interest in programming to
        work together and create amazing projects.
      </p>
    </div>
  );
}
export default Home;
    