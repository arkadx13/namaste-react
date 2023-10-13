const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl p-4 m-4 text-center">Contact Us</h1>
      <form className="flex flex-col w-6/12 items-stretch m-auto">
        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="name"
        />
        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="message"
        />
        <button className="bg-slate-500 text-white m-2 p-2 rounded-lg min-w-2/12 self-end">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
