import SignInIllustration from "../../assets/signin.svg";
import { Link } from "react-router-dom";

function LoginPresentation({ handleFormSubmit, handleUserInput, loading }) {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#1A1A40] to-[#0F0F1C] text-white font-mono">
      <div className="flex flex-col md:flex-row items-center justify-center h-full max-w-6xl mx-auto px-4 py-12 gap-10">
        {/* Illustration */}
        <div className="hidden md:block md:w-1/2">
          <img
            src={SignInIllustration}
            alt="Sign In Illustration"
            className="w-full max-h-[500px] object-contain animate-pulse"
          />
        </div>

        {/* Login Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleFormSubmit(e);
          }}
          className="bg-[#222233] p-8 rounded-2xl shadow-lg w-full md:w-1/2 lg:w-1/3 border border-purple-600"
        >
          <h2 className="text-3xl font-bold text-center text-yellow-300 mb-6">
            🚪 Sign In
          </h2>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm mb-1 text-purple-300">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleUserInput}
              required
              placeholder="you@example.com"
              className="w-full p-3 rounded-lg bg-[#1E1E2F] text-white border border-purple-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm mb-1 text-purple-300">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleUserInput}
              required
              placeholder="••••••••"
              className="w-full p-3 rounded-lg bg-[#1E1E2F] text-white border border-purple-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-lg text-black font-bold transition ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700"
            }`}
          >
            {loading ? (
              <div className="flex items-center justify-center gap-2">
                <svg
                  className="animate-spin h-5 w-5 text-black"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8z"
                  ></path>
                </svg>
                Logging you in...
              </div>
            ) : (
              "Login"
            )}
          </button>

          <p className="mt-4 text-sm text-center text-gray-300">
            Don’t have an account?{" "}
            <Link
              to="/signup"
              className="text-yellow-400 hover:text-yellow-500 font-semibold underline"
            >
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}

export default LoginPresentation;
