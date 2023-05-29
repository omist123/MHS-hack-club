import sprig from "../assets/sprig.png";
import controller from "../assets/download.png";
function Contact() {
  return (
    <div>
      <h1 className="text-white pt-20 text-5xl flex flex-col justify-start ml-14">
        Contact
      </h1>
      <p className="text-white pt-20 text-3xl ml-14 w-[52rem]">
        Have any burning questions for us?
        <br />
        <br /> Email Owen with general inquiries or questions about{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">
          developing
        </span>{" "}
        this website:
        <br />
        <span className="underline text-red-500">
          owenmistretta@gmail.com
        </span>{" "}
        <br />
        <br />
        Email Rachel with general inquiries or questions about{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">
          designing
        </span>{" "}
        this website:
        <br />{" "}
        <span className="underline text-red-500">
          rachel.lana.lin@gmail.com
        </span>{" "}
      </p>
      <img className="w-[15rem] h-[20rem] absolute right-[20rem] top-36 rotate-[-10deg] " src={controller} alt="" />

      <img className="w-[50rem] h-[25rem] absolute right-36 rotate-6 bottom-1" src={sprig} alt="" />
    </div>
  );
}
export default Contact;
