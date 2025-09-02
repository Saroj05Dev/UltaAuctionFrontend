import { LogInIcon, Mail, Phone, Lock, Eye, EyeOff, Zap, Shield } from "lucide-react";
import { useState } from "react";
import SignInIllustration from "../../../assets/signin.svg";
import { Link } from "react-router-dom";
import Layout from "../../../layout/Layout";

function LoginPresentation({ handleFormSubmit, handleUserInput, loading, loginData }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Layout>
      <section className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-yellow-500/5 to-orange-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center min-h-screen max-w-7xl mx-auto px-6 py-12 gap-16">
          {/* Left Illustration */}
          <div className="hidden md:block md:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-3xl blur-2xl transform rotate-3"></div>
              <img
                src={SignInIllustration}
                alt="Sign In Illustration"
                className="relative w-full max-w-[500px] h-auto object-contain rounded-3xl shadow-2xl border border-white/10 transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Login Form */}
          <div className="w-full md:w-1/2 lg:w-2/5 max-w-md">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-yellow-400 text-sm font-medium mb-6">
                <Zap size={18} className="animate-pulse" />
                Welcome Back
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                Sign In to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                  UltaAuctions
                </span>
              </h1>
              <p className="text-gray-300">Access your account and continue bidding</p>
            </div>

            {/* Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleFormSubmit(e);
              }}
              className="bg-gradient-to-br from-slate-800/80 to-gray-800/80 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/10 space-y-6"
            >
              {/* Email Input */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Email Address <span className="text-red-400">*</span>
                </label>
                <div className="relative group">
                  <Mail size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-yellow-400 transition-colors" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={handleUserInput}
                    placeholder="you@example.com"
                    className="w-full pl-12 pr-4 py-4 bg-slate-700/50 text-white border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/50 transition-all duration-300 placeholder-gray-400"
                  />
                </div>
              </div>

              {/* OR Divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-600"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-gradient-to-r from-slate-800 to-gray-800 text-gray-400 font-medium">
                    OR
                  </span>
                </div>
              </div>

              {/* Phone Input */}
              <div className="space-y-2">
                <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-300">
                  Phone Number <span className="text-red-400">*</span>
                </label>
                <div className="relative group">
                  <Phone size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-yellow-400 transition-colors" />
                  <input
                    type="tel"
                    id="mobileNumber"
                    name="mobileNumber"
                    value={loginData.mobileNumber}
                    onChange={handleUserInput}
                    placeholder="+91 00000 00000"
                    className="w-full pl-12 pr-4 py-4 bg-slate-700/50 text-white border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/50 transition-all duration-300 placeholder-gray-400"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                  Password <span className="text-red-400">*</span>
                </label>
                <div className="relative group">
                  <Lock size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-yellow-400 transition-colors" />
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={loginData.password}
                    onChange={handleUserInput}
                    placeholder="••••••••"
                    className="w-full pl-12 pr-12 py-4 bg-slate-700/50 text-white border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/50 transition-all duration-300 placeholder-gray-400"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-yellow-400 transition-colors"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-gray-300 cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="w-4 h-4 rounded border-gray-600 bg-slate-700 text-yellow-400 focus:ring-yellow-400/50 focus:ring-2" 
                  />
                  Remember me
                </label>
                <Link to="/forgot-password" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                  Forgot password?
                </Link>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 transform ${
                  loading
                    ? "bg-gray-600 cursor-not-allowed text-gray-400"
                    : "bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-black shadow-2xl hover:shadow-yellow-500/25 hover:scale-105"
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
                    Signing you in...
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-3">
                    <LogInIcon size={24} className="group-hover:rotate-12 transition-transform" />
                    Sign In to Account
                  </div>
                )}
              </button>

              {/* Security Badge */}
              <div className="flex items-center justify-center gap-2 text-green-400 text-sm mt-4">
                <Shield size={16} />
                <span>Your data is protected with 256-bit encryption</span>
              </div>

              {/* Signup Link */}
              <div className="text-center pt-6 border-t border-gray-700">
                <p className="text-gray-300">
                  Don't have an account?{" "}
                  <Link
                    to="/signup"
                    className="text-yellow-400 hover:text-yellow-300 font-semibold underline decoration-2 underline-offset-2 hover:decoration-yellow-300 transition-all"
                  >
                    Create Account
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

export default LoginPresentation;