import { Link } from "react-router-dom";
import SignUpIllustration from "../../assets/signup.jpg";

function SignupPresentation({ handleUserInput, handleFormSubmit }) {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#1A1A40] to-[#0F0F1C] text-white font-mono">
      <div className="flex flex-col md:flex-row items-center justify-center h-full max-w-6xl mx-auto px-4 py-12 gap-10">
        {/* Left Illustration */}
        <div className="hidden md:block md:w-1/2">
          <img
            src={SignUpIllustration}
            alt="Sign Up Illustration"
            className="w-full max-h-[500px] object-contain animate-fadeIn"
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
            📝 Create Account
          </h2>

          {/* First Name */}
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-sm mb-1 text-purple-300">
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
            <label htmlFor="lastName" className="block text-sm mb-1 text-purple-300">
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
            <label htmlFor="email" className="block text-sm mb-1 text-purple-300">
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
            <label htmlFor="mobileNumber" className="block text-sm mb-1 text-purple-300">
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

          {/* Password */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm mb-1 text-purple-300">
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
            className="w-full py-3 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 rounded-lg text-black font-bold hover:from-yellow-500 hover:to-yellow-700 transition"
          >
            Create Account
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

export default SignupPresentation;
