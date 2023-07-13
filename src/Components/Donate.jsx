function Donate() {
  return (
    <div className="flex lg:flex-row lg:items-center lg:justify-center h-screen flex-col ">
      <p className="lg:w-[52rem] text-white lg:text-4xl lg:ml-28 lg:self-start lg:mt-[5rem] lg:mb-20 mt-10 text-2xl mx-5">
        Feeling generous? MHS Hack Club is currently accepting donations! <br />
        <br />
        Any funds received will be used for Hack Club purposes only. Examples of
        expenditures include purchasing{" "}
        <span classNa me="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">
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
        style={{ border: "none", height: "100%", width: "100%" }}
        name="donateFrame"
        scrolling="yes"
        frameBorder="0"
        marginHeight="0px"    
        marginWidth="0px"
        allowFullScreen
        className="mr-0 "
      ></iframe>
    </div>
  );
}

export default Donate;
