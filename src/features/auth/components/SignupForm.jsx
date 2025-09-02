import { Link } from "react-router-dom";
import { useState } from "react";
import RegisterIllustration from "../../../assets/Register.svg";
import { 
  UserPlus, 
  User, 
  Mail, 
  Phone, 
  Lock, 
  Eye, 
  EyeOff, 
  Zap, 
  Shield, 
  Key, 
  CheckCircle,
  Send
} from "lucide-react";
import Layout from "../../../layout/Layout";

function SignupForm({
  handleUserInput,
  handleFormSubmit,
  loading,
  sendOtpHandler,
  otp,
  setOtp,
  isOTPSent,
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Layout>
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center min-h-screen max-w-7xl mx-auto px-6 py-12 gap-16">
        {/* Left Illustration */}
        <div className="hidden md:block md:w-1/2">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl transform -rotate-3"></div>
            <img
              src={RegisterIllustration}
              alt="Sign Up Illustration"
              className="relative w-full max-w-[500px] h-auto object-contain rounded-3xl shadow-2xl border border-white/10 transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Signup Form */}
        <div className="w-full md:w-1/2 lg:w-2/5 max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-6">
              <Zap size={18} className="animate-pulse" />
              Join the Community
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Create Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                Account
              </span>
            </h1>
            <p className="text-gray-300">Start winning auctions at incredible prices</p>
          </div>

          {/* Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleFormSubmit(e);
            }}
            className="bg-gradient-to-br from-slate-800/80 to-gray-800/80 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/10 space-y-6"
          >
            {/* Name Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* First Name */}
              <div className="space-y-2">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-300">
                  First Name <span className="text-red-400">*</span>
                </label>
                <div className="relative group">
                  <User size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-purple-400 transition-colors" />
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    minLength={3}
                    placeholder="John"
                    onChange={handleUserInput}
                    className="w-full pl-12 pr-4 py-4 bg-slate-700/50 text-white border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-purple-400/50 transition-all duration-300 placeholder-gray-400"
                  />
                </div>
              </div>

              {/* Last Name */}
              <div className="space-y-2">
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-300">
                  Last Name
                </label>
                <div className="relative group">
                  <User size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-purple-400 transition-colors" />
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    minLength={3}
                    placeholder="Doe"
                    onChange={handleUserInput}
                    className="w-full pl-12 pr-4 py-4 bg-slate-700/50 text-white border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-purple-400/50 transition-all duration-300 placeholder-gray-400"
                  />
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email Address <span className="text-red-400">*</span>
              </label>
              <div className="relative group">
                <Mail size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-purple-400 transition-colors" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  onChange={handleUserInput}
                  className="w-full pl-12 pr-4 py-4 bg-slate-700/50 text-white border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-purple-400/50 transition-all duration-300 placeholder-gray-400"
                />
              </div>
            </div>

            {/* Mobile Number & OTP Section */}
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-300">
                  Mobile Number <span className="text-red-400">*</span>
                </label>
                <div className="flex gap-3">
                  <div className="relative group flex-1">
                    <Phone size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-purple-400 transition-colors" />
                    <input
                      type="tel"
                      id="mobileNumber"
                      name="mobileNumber"
                      required
                      maxLength={12}
                      placeholder="10-digit number"
                      onChange={handleUserInput}
                      className="w-full pl-12 pr-4 py-4 bg-slate-700/50 text-white border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-purple-400/50 transition-all duration-300 placeholder-gray-400"
                    />
                  </div>
                  {!isOTPSent && (
                    <button
                      type="button"
                      onClick={sendOtpHandler}
                      className="px-6 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-medium rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                    >
                      <Send size={18} />
                      Send OTP
                    </button>
                  )}
                </div>
              </div>

              {/* OTP Input */}
              {isOTPSent && (
                <div className="space-y-2">
                  <label htmlFor="otp" className="block text-sm font-medium text-gray-300">
                    Enter OTP <span className="text-red-400">*</span>
                  </label>
                  <div className="relative group">
                    <Key size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-green-400 transition-colors" />
                    <input
                      type="text"
                      id="otp"
                      name="otp"
                      placeholder="Enter 6-digit OTP"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      maxLength={6}
                      className="w-full pl-12 pr-4 py-4 bg-slate-700/50 text-white border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400/50 focus:border-green-400/50 transition-all duration-300 placeholder-gray-400"
                    />
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                      <CheckCircle size={20} className="text-green-400" />
                    </div>
                  </div>
                  <p className="text-sm text-green-400 flex items-center gap-2">
                    <CheckCircle size={16} />
                    OTP sent successfully to your mobile
                  </p>
                </div>
              )}
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                Create Password <span className="text-red-400">*</span>
              </label>
              <div className="relative group">
                <Lock size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-purple-400 transition-colors" />
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  required
                  placeholder="••••••••"
                  onChange={handleUserInput}
                  className="w-full pl-12 pr-12 py-4 bg-slate-700/50 text-white border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-purple-400/50 transition-all duration-300 placeholder-gray-400"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-purple-400 transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              <p className="text-xs text-gray-400">
                Must be at least 8 characters with letters, numbers & symbols
              </p>
            </div>

            {/* Terms & Conditions */}
            <div className="flex items-start gap-3">
              <input 
                type="checkbox" 
                required
                className="w-4 h-4 rounded border-gray-600 bg-slate-700 text-purple-400 focus:ring-purple-400/50 focus:ring-2 mt-1" 
              />
              <p className="text-sm text-gray-300">
                I agree to UltaAuctions{" "}
                <Link to="/terms" className="text-purple-400 hover:text-purple-300 underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link to="/privacy" className="text-purple-400 hover:text-purple-300 underline">
                  Privacy Policy
                </Link>
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 transform ${
                loading
                  ? "bg-gray-600 cursor-not-allowed text-gray-400"
                  : "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white shadow-2xl hover:shadow-purple-500/25 hover:scale-105"
              }`}
            >
              {loading ? (
                <div className="flex items-center justify-center gap-3">
                  <svg
                    className="animate-spin h-6 w-6 text-gray-400"
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
                  Creating your account...
                </div>
              ) : (
                <div className="flex items-center justify-center gap-3">
                  <UserPlus size={24} className="group-hover:rotate-12 transition-transform" />
                  Create My Account
                </div>
              )}
            </button>

            {/* Security Badge */}
            <div className="flex items-center justify-center gap-2 text-green-400 text-sm">
              <Shield size={16} />
              <span>Your data is protected with 256-bit encryption</span>
            </div>

            {/* Login Link */}
            <div className="text-center pt-6 border-t border-gray-700">
              <p className="text-gray-300">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-purple-400 hover:text-purple-300 font-semibold underline decoration-2 underline-offset-2 hover:decoration-purple-300 transition-all"
                >
                  Sign In
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
    </Layout>
  );
}

export default SignupForm;