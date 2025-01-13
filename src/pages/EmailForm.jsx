function EmailForm() {
  return (
    <div className="min-h-screen flex flex-col text-black">
      <main className="container mx-auto px-6 pt-12 flex-1 text-center">
        <h2 className="text-2xl md:text-4xl lg:text-6xl uppercase">
          Welcome To
        </h2>

        <h1 className="text-3xl md:text-6xl lg:text-8xl uppercase font-black mb-8">
          Fabricate AI
        </h1>

        <div
          className="text-2xl md:text-2xl lg:text-3xl py-2 px-4 md:py-4 md:px-10 lg:py-6 lg:px-12
        bg-white bg-opacity-45 w-fit mx-auto mb-8 rounded-full"
        >
          2,771 members
        </div>

        <form
          action="https://gmail.us15.list-manage.com/subscribe/post"
          method="POST"
        >
          <input type="hidden" name="u" value="29245d7029f249cab19a0858d" />
          <input type="hidden" name="id" value="b126aae1ee" />

          <div className="flex flex-col my-12 md:flex-row justify-center mb-4">
            <input
              type="email"
              autocapitalize="off"
              autocorrect="off"
              size="25"
              placeholder="Email Address"
              name="MERGE0"
              id="MERGE0"
              className="text-lg md:text-2xl placeholder:text-gray-400 placeholder:italic py-4
                px-6 md:px-10 lg:py-6 lg:px-12 bg-white bg-opacity-10
                focus:bg-opacity-20 duration-150 rounded-full outline-none
                md:rounded-tr-none md:rounded-br-none mb-4 md:mb-0"
            />

            <button
              type="submit"
              className="bg-primary rounded-full md:rounded-tl-none md:rounded-bl-none
                text-lg md:text-2xl py-4 px-6 md:px-10 lg:py-6 lg:px-12
                cursor-pointer hover:opacity-75 duration-150"
            >
              Join Waitlist
            </button>
          </div>

          <div className="opacity-75 italic">
            By subscribing you agree with Fabricate AI's
            <a href="termsOfService" className="hover:opacity-80 duration-150">
              {" "}
              Term's of Service
            </a>{" "}
            and
            <a href="privacy" className="hover:opacity-80 duration-150">
              {" "}
              Privacy Policy.
            </a>
          </div>
        </form>
      </main>

      <footer className="container mx-auto p-6 flex flex-col md:flex-row items-center justify-between">
        <p>Made with ❤️</p>

        <div className="flex -mx-6">
          <a href="#" className="mx-3 hover:opacity-80 duration-150">
            About Us
          </a>
          <a href="#" className="mx-3 hover:opacity-80 duration-150">
            Privacy
          </a>
          <a href="#" className="mx-3 hover:opacity-80 duration-150">
            Contact
          </a>
        </div>
      </footer>
    </div>
  );
}

export default EmailForm;
