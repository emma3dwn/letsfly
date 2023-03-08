function Signup() {
  return (
    <div className="w-5/6 lg:w-4/6 py-2 px-4 rounded-full border-solid border-2 border-white bg-white flex">
      <input
        type="email"
        className="w-full bg-white border-none focus:outline-none text-black placeholder-black "
        placeholder="Enter your email"
      />

      <button className="border-none focus:outline-none" type="submit">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 fill-black"
        >
          <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
        </svg>
      </button>
    </div>
  );
}

export default Signup;
