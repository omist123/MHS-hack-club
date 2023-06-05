import one from "../assets/1.svg";
import two from "../assets/2.svg";
import three from "../assets/3.svg";

function Join() {
  return (
    <div className="">
      <div className="flex flex-col items-start justify-center w-[65rem]">
        <h1 className="text-white text-4xl py-14 items-start ml-10">Join us</h1>
        <p className="text-white text-3xl pb-14 items-start ml-10">
          Thinking of joining MHS Hack Club? Great! Unsure if we’re the club for
          you? Here’s a three-point thesis statement explaining why you should
          join us:
        </p>
      </div>
      <div className="flex flex-col items-start text-white text-3xl ">
        <div className="flex">
          <div className="flex flex-col items-start">
            <img className="px-10 pb-14 self-start" src={one} alt="" />
            <img className="px-10 pb-14 self-start" src={two} alt="" />
            <img className="px-10 pb-14 self-start" src={three} alt="" />
          </div>
          <div className="flex flex-col items-start w-[55rem]">
            <p className="pl-5">
              Beginners can learn basic computer science skills without the
              pressure of a traditional class.
            </p>
            <p className="pl-5 pt-10">
              Experienced programmers can connect and collaborate on more
              advanced projects.
            </p>
            <p className="pl-5 pt-10">Free. Stickers. Need we say more?</p>
          </div>
          <div className="flex items-start justify-center ml-[20rem]">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-8 px-10 rounded-[3rem]">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Join;
