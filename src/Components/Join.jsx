function Join() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-red-500 pt-[5rem] text-3xl">
        Fill out this form to join!
      </h1>
      <a
        className=" text-red-500 pt-10 text-3xl visible lg:invisible underline hover:text-red-400"
        href="https://docs.google.com/forms/d/e/1FAIpQLSe95N_MxtiiWM3XZB49AK-lUFF0Y6b0I-0jZr0JJScSPsBtmw/viewform?usp=sf_link"
      >
        Here is the link
      </a>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSe95N_MxtiiWM3XZB49AK-lUFF0Y6b0I-0jZr0JJScSPsBtmw/viewform?embedded=true"
        width="640"
        height="1431"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        className="invisible lg:visible"
      >
        Loading…
      </iframe>
    </div>
  );
}
export default Join;
