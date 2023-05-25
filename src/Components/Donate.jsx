function Donate() {
  return (
    <>
      <div className="flex flex-col items-center justify-center overflow-auto h-screen">
        <p className="w-1/2 text-white text-3xl pt-10 ">
          Feeling generous? MHS Hack Club is currently accepting donations!{" "}
          <br />
          <br />
          Any funds received will be used for Hack Club purposes only. Examples
          of expenditures include purchasing{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">
            hardware
          </span>
          , software{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">
            subscriptions
          </span>
          , or{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">
            snacks{" "}
          </span>
          for those slow days. <br />
          <br />
          Donations are in no way expected, but are greatly appreciated! Thank
          you!
        </p>

        <iframe
          src="https://bank.hackclub.com/donations/start/melrose-high-school-hack-club"
          style={{ border: "none" }}
          name="donateFrame"
          scrolling="yes"
          frameBorder="0"
          marginHeight="0px"
          marginWidth="0px"
          height="100%"
          width="100%"
          allowFullScreen
          className="h-screen overflow-y-scrolling"
        ></iframe>
      </div>
    </>
  );
}

export default Donate;
