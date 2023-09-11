import sprig from "../assets/sprig2.png";

function Contact() {
  return (
    <div className="flex flex-col md:flex-col lg:flex-row overflow-hidden">
      <div className="lg:w-3/4">
        <h1 className="text-white pt-20 text-3xl lg:text-5xl text-center lg:text-start lg:ml-14">
          Contact
        </h1>
        <p className="text-white pt-10 text-2xl lg:text-3xl m-5 lg:ml-14 lg:w-[52rem]">
          Have any burning questions for us?
          <br />
          <br /> Email Owen with general inquiries or questions about{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">
            developing
          </span>{" "}
          this website:
          <br />
          <span className="underline text-red-500">
            <a href="mailto:owenmistretta@gmail.com">
              owenmistretta@gmail.com
            </a>
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
            <a href="mailto:rachel.lana.lin@gmail.com">
              rachel.lana.lin@gmail.com
            </a>
          </span>{" "}
        </p>
        <p className="text-white pt-10 text-2xl lg:text-3xl m-5 lg:ml-14 lg:w-[52rem]">
          Follow our 
          <span className="underline text-red-500 ml-2">
            <a href="https://www.instagram.com/melrosehackclub/">
              Instagram
            </a>

          </span>{" "}
          account and join our 
          <span className="underline text-red-500 ml-2">
            <a href="https://discord.gg/JrThX7Nvw6">
              Discord
            </a>

          </span>{" "}
          server for further communication!
        </p>
      </div>

      <img className=" lg:h-[45rem]" src={sprig} alt="" />
    </div>
  );
}

export default Contact;
