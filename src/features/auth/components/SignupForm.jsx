import { Link } from "react-router-dom";
import RegisterIllustration from "../../../assets/Register.svg";
import { SiGnuprivacyguard } from "react-icons/si";

function SignupForm({
  handleUserInput,
  handleFormSubmit,
  loading,
  sendOtpHandler,
  otp,
  setOtp,
  isOTPSent,
}) {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#1A1A40] to-[#0F0F1C] text-white font-mono">
      <div className="flex flex-col md:flex-row items-center justify-center h-full max-w-6xl mx-auto px-4 py-12 gap-10">
        {/* Left Illustration */}
        <div className="hidden md:block md:w-1/2">
          <img
            src={RegisterIllustration}
            alt="Sign Up Illustration"
            className="w-full max-h-[450px] object-contain animate-fadeIn"
          />
        </div>

        {/* Signup Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleFormSubmit(e);
          }}
          className="bg-[#222233] p-8 rounded-2xl shadow-xl w-full md:w-1/2 lg:w-1/3 border border-purple-600"
        >
          <h2 className="text-3xl font-bold text-center text-yellow-300 mb-6">
            <SiGnuprivacyguard size={35} className="inline"/> Create Account
          </h2>

          {/* First Name */}
          <div className="mb-4">
            <label
              htmlFor="firstName"
              className="block text-sm mb-1 text-purple-300"
            >
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              minLength={3}
              placeholder="John"
              onChange={handleUserInput}
              className="w-full p-3 bg-[#1E1E2F] text-white border border-purple-500 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Last Name */}
          <div className="mb-4">
            <label
              htmlFor="lastName"
              className="block text-sm mb-1 text-purple-300"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              minLength={3}
              placeholder="Doe"
              onChange={handleUserInput}
              className="w-full p-3 bg-[#1E1E2F] text-white border border-purple-500 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm mb-1 text-purple-300"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="john@example.com"
              onChange={handleUserInput}
              className="w-full p-3 bg-[#1E1E2F] text-white border border-purple-500 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Mobile Number */}
          <div className="mb-4">
            <label
              htmlFor="mobileNumber"
              className="block text-sm mb-1 text-purple-300"
            >
              Mobile Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="mobileNumber"
              name="mobileNumber"
              required
              maxLength={12}
              placeholder="10-digit number"
              onChange={handleUserInput}
              className="w-full p-3 bg-[#1E1E2F] text-white border border-purple-500 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {isOTPSent ? (
            <div className="mb-4">
              <label
                htmlFor="otp"
                className="block text-sm mb-1 text-purple-300"
              >
                OTP <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="otp"
                name="otp"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full p-3 bg-[#1E1E2F] text-white border border-purple-500 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
          ) : (
            <button
              type="button"
              onClick={sendOtpHandler}
              className="w-full py-2 bg-yellow-500 hover:bg-yellow-600 text-black rounded font-semibold mb-4"
            >
              Send OTP
            </button>
          )}

          {/* Password */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm mb-1 text-purple-300"
            >
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              placeholder="••••••••"
              onChange={handleUserInput}
              className="w-full p-3 bg-[#1E1E2F] text-white border border-purple-500 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Submit Button */}
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
                Creating...
              </div>
            ) : (
              "Create Account"
            )}
          </button>

          {/* Redirect to Login */}
          <p className="mt-4 text-sm text-center text-gray-300">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-yellow-400 hover:text-yellow-500 font-semibold underline"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}

export default SignupForm;
