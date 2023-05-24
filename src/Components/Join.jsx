function Join() {
  return (
    <>
      <div className="flex flex-col items-center justify-center overflow-auto">
        <h1 className="text-red-500 pt-20 text-3xl">Fill out this form to join!</h1>
        <iframe className="pt-10 rounded-md" src="https://docs.google.com/forms/d/e/1FAIpQLScUtkN0THdFEJvHTnnC7pLSlpH7rUDlM8ojdDg5uyrREIk35Q/viewform?embedded=true" width="640" height="1248" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
      </div>
    </>
    );
}
export default Join;
