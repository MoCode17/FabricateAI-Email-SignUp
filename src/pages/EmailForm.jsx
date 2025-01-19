import React, { useState } from "react";
import Logo from "../assets/logo.svg";

function EmailForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError("");

    const form = event.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });
      window.location.href = "https://wn0lwsscu49.typeform.com/to/Oz0pRBTQ";
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Modern background with multiple layers */}
      <div className="fixed inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100"></div>

      {/* Mesh gradient overlay */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,107,44,0.1),transparent_50%)]"></div>

      {/* Animated subtle waves */}
      <div className="fixed inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 to-amber-300/10 blur-3xl transform -skew-y-12 translate-y-1/2"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-orange-400/10 to-amber-300/10 blur-3xl transform skew-y-12 -translate-y-1/2"></div>
      </div>

      {/* Main content */}
      <div className="relative min-h-screen flex flex-col text-gray-900">
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 flex-1 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-light tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400 mb-4">
              Welcome To
            </h2>

            <img
              src={Logo}
              alt="Fabricate AI Logo"
              className="w-full max-w-3xl mx-auto mb-8 hover:opacity-95 transition-opacity duration-200"
            />

            <div className="inline-block bg-white/80 backdrop-blur-lg rounded-2xl py-3 px-6 md:py-4 md:px-8 mb-12 shadow-lg border border-white/20">
              <span className="text-xl md:text-2xl font-medium bg-gradient-to-r from-orange-500 to-amber-500 text-transparent bg-clip-text">
                2,771 members
              </span>
            </div>

            <form
              action="https://gmail.us15.list-manage.com/subscribe/post"
              method="POST"
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <input type="hidden" name="u" value="29245d7029f249cab19a0858d" />
              <input type="hidden" name="id" value="b126aae1ee" />

              <div className="flex flex-col sm:flex-row justify-center max-w-2xl mx-auto gap-3">
                <div className="flex-1">
                  <input
                    type="email"
                    autoCapitalize="off"
                    autoCorrect="off"
                    placeholder="Enter your email address"
                    name="MERGE0"
                    id="MERGE0"
                    className="w-full text-lg px-6 py-4 rounded-xl border border-white/20 
                      bg-white/80 backdrop-blur-lg
                      placeholder:text-gray-400 focus:outline-none focus:ring-2 
                      focus:ring-orange-400 focus:border-transparent transition-all
                      shadow-lg"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className={`px-8 py-4 text-lg font-medium text-white 
                    bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl
                    transition-all duration-200 transform hover:scale-105
                    focus:outline-none focus:ring-2 focus:ring-offset-2 
                    focus:ring-orange-400 shadow-lg border border-white/20
                    ${
                      isLoading ? "opacity-75 cursor-wait" : "hover:opacity-90"
                    }`}
                >
                  {isLoading ? "Joining..." : "Join Waitlist"}
                </button>
              </div>

              {error && <div className="text-red-500 mt-2">{error}</div>}

              <div className="text-sm text-gray-600 mt-6">
                By subscribing you agree with Fabricate AI's{" "}
                <button className="hover:opacity-70">Terms of Service</button>{" "}
                and <button className="hover:opacity-70">Privacy Policy</button>
              </div>
            </form>
          </div>
        </main>

        <footer className="relative container mx-auto p-6 flex flex-col sm:flex-row items-center justify-between text-gray-500">
          <p className="mb-4 sm:mb-0">
            Made with <span className="text-red-500 animate-pulse">❤️</span>
          </p>

          <div className="space-x-6 hidden">
            <button className="hover:text-gray-700 transition-colors">
              About Us
            </button>
            <button className="hover:text-gray-700 transition-colors">
              Privacy
            </button>
            <button className="hover:text-gray-700 transition-colors">
              Contact
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default EmailForm;
