function Join() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-red-500 pt-10 text-3xl">Fill out this form to join!</h1>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe95N_MxtiiWM3XZB49AK-lUFF0Y6b0I-0jZr0JJScSPsBtmw/viewform?embedded=true" width="640" height="1431" frameborder="0" marginheight="0" marginwidth="0" className="h-screen overflow-y-scrolling ">Loading…</iframe>
      </div>
    </>
    );
}
export default Join;
