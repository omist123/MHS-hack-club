import { useState } from "react";
import "../Styles/home.css";
// for image slider https://www.youtube.com/watch?v=tXlZCW26bto&t=187s&ab_channel=CodeCommerce 
function Home() {
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      url: "https://images.unsplash.com/photo-1661956602153-23384936a1d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      url: "https://images.unsplash.com/photo-1682686580003-22d3d65399a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60 ",
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1669868116752-acd4bc7bc6a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9yaXpvbnRhbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      url: "https://images.unsplash.com/photo-1598449356475-b9f71db7d847?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG9yaXpvbnRhbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
  ];
  return (
    <>
      <div className="flex flex-col justify-center items-center sm:flex-row sm:justify-evenly sm:items-center overflow-auto">
        <div className="flex flex-col self-start text-center sm:text-left">
          <h1 className="text-red-500 pt-20 lg:text-5xl sm:text-6xl ml-7">
            Melrose High School Hack Club
          </h1>
          <p className="text-white lg:text-4xl sm:text-2xl sm:pt-20 lg:pt-40 ml-7 custom-w-class overflow-hidden">
            Welcome! Thanks for dropping by!
            <br />
            <br />
            MHS &nbsp;
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">
              Hack Club
            </span>
            &nbsp; is a space where students of all levels of experience gather
            to collaborate and create cool things - for example, this website.
          </p>
        </div>
        <img
          className="pt-20 mx-auto sm:mr-20 sm:ml-0 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-80 lg:h-96"
          src="https://jgpr.net/wp-content/uploads/2019/12/melrose-logo-1-300x300.png"
          alt=""
        />
      </div>
      <h1 className="text-red-500 lg:text-5xl sm:text-6xl flex flex-col justify-center items-center h-screen ">
        hello
      </h1>
    </>
  );
}
export default Home;
