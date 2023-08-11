import { useState } from "react";
import "../Styles/home.css";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import Logo from "../assets/Logo.svg";
import Q from "../assets/Q.svg";
import A from "../assets/A.svg";
import weatherSite from "../assets/weatherSite.png"
import sprigConsole from "../assets/sprigConsole.jpg";
import cubyVid from "../assets/cubyVid.gif";
import pacman from "../assets/pacman.png"
// for image slider https://www.youtube.com/watch?v=tXlZCW26bto&t=187s&ab_channel=CodeCommerce
function Home() {
  const slides = [
    {
      url: weatherSite,
      description: "This website uses a weather API to show location-based weather info"
    },
    {
      url: sprigConsole,
      description:"This is what the Sprig console looks like. To learn more about Sprig click the link below."
    },
    {
      url: cubyVid, 
      description: "This is a simple game we made in Unity named Cuby! "
    },
    {
      url: pacman,
      description: "This a pacman clone that we made in the Sprig console."
    }
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center sm:flex-row sm:justify-evenly sm:items-center overflow-auto">
        <div className="flex flex-col self-start text-center sm:text-left">
          <h1 className="text-white lg:pt-32 pt-10 lg:text-5xl text-3xl ml-7">
            Melrose High School{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">
              Hack Club
            </span>
          </h1>
          <p className="text-white lg:text-4xl text-2xl sm:pt-20 pt-10 lg:pt-20 m-5 custom-w-class overflow-hidden">
            Welcome! Thanks for dropping by!
            <br />
            <br />
            MHS Hack Club is a space where students can collaborate and create
            cool things—for example, this website—from all levels of experience.
            <br />
            <br />
            We meet Mondays after school in room 302. Feel free to stop by and
            say hello!
          </p>
        </div>  
        {/*} <img
          className="pt-20 mx-auto sm:mr-20 sm:ml-0 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-80 lg:h-96"
          src="https://jgpr.net/wp-content/uploads/2019/12/melrose-logo-1-300x300.png"
          alt=""
  /> **/}
        <img
          className="pt-20 mx-auto sm:mr-20 sm:ml-0 w-[25rem] h-[20rem] md:w-56 md:h-56 lg:w-[35rem] lg:h-96  "
          src={Logo}
          alt=""
        />
      </div>

      <div className="h-[400px]"></div>
      <h1 className="text-white lg:text-5xl text-3xl flex flex-row justify-center">
        Featured Projects
      </h1>
      <div className="max-w-[1400px] h-[780px] w-full m-auto my-2 py-16 px-4 relative group ">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover  duration-500 filter brightness-75"
      ></div>
       <div className="absolute top-[75%] left-1/2 transform -translate-y-1/2 -translate-x-1/2">
      <p className="text-white text-2xl">{slides[currentIndex].description}</p>
    </div>


        {/*left icon*/}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/*right icon*/}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className="flex top-4 justify-center py-2">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer"
            >
              <RxDotFilled className="text-white"></RxDotFilled>
            </div>
          ))}
        </div>
        
      </div>
          <a className="flex items-end justify-center  text-red-500 underline" href="https://sprig.hackclub.com/#:~:text=Sprig%3A%20a%20fantasy%20console%2C%20turned%20real&text=It%20comes%20disassembled%20and%20every,beginners%2C%20yet%20entertaining%20for%20masters.">Click here to learn more about Sprig</a>
      <div className="h-screen lg:max-w-[100rem] ">
        <h1 className="text-white text-4xl py-20 flex flex-col items-start ml-10">
          Frequently Asked Questions (FAQs)
        </h1>
        <div className="flex flex-row items-center ml-10">
          <img src={Q} alt="" />
          <p className="text-white text-3xl ml-10">
            I have never programmed before. Can I still join?{" "}
          </p>
        </div>
        <div className="flex flex-row items-center ml-10 pt-10">
          <img src={A} alt="" />
          <p className="text-white text-3xl ml-10">
            Of course! All MHS students interested in programming, regardless of
            prior experience, are welcome to join, learn, and create.
          </p>
        </div>
        <div className="flex flex-row items-center ml-10 pt-10">
          <img src={Q} alt="" />
          <p className="text-white text-3xl ml-10">
            Why is the club called “Hack Club”? Are you really “hacking”?{" "}
          </p>
        </div>
        <div className="flex flex-row items-center ml-10 pt-10">
          <img src={A} alt="" />
          <p className="text-white text-3xl ml-10">
            By hacking, we mean thriving on technological challenges and
            opportunities with creativity in the face of conformity. Read the{" "}
            <span className="underline text-red-500">
              {" "}
              <a href="https://gist.github.com/zachlatta/1dd27adfb5d067770b8e56be5d56df77">
                Hacker Manifesto{" "}
              </a>
            </span>{" "}
            for more.
          </p>
        </div>
        <div className="flex flex-row items-center ml-10 pt-10">
          <img src={Q} alt="" />
          <p className="text-white text-3xl ml-10">
            Can I use a Chromebook to code, or will I need another device?{" "}
          </p>
        </div>
        <div className="flex flex-row items-center ml-10 pt-10 pb-14">
          <img className="" src={A} alt="" />
          <p className="text-white text-3xl ml-10">
            Chromebook users can access many browser-based environments by
            default, such as Replit and GitHub Codespaces, so yes! Laptop people
            can bring those in as well.{" "}
          </p>
        </div>
      </div>
    </>
  );
}
export default Home;
