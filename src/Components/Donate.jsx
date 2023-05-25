function Donate() {
  return (
    <>
      <div className="flex flex-col items-center justify-center overflow-auto h-screen">
      <p className="w-1/2 text-red-500 text-2xl">Feeling generous? MHS Hack Club is
currently accepting donations!

Any funds received will be used for Hack
Club purposes only. Examples of
expenditures include purchasing
hardware, software subscriptions, or
snacks for those slow days.

Donations are in no way expected, but
are greatly appreciated! Thank you!</p>
        <iframe
          src="https://bank.hackclub.com/donations/start/melrose-high-school-hack-club"
          style={{ border: "none" }}
          name="donateFrame"
          scrolling="no"
          frameBorder="0"
          marginHeight="0px"
          marginWidth="0px"
          height="100%"
          width="100%"
          allowFullScreen
        ></iframe>
        <div className="gap-10"></div>
      </div>
    </>
  );
}

export default Donate;
