import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  SearchX, 
  Home, 
  ArrowLeft, 
  Compass, 
  AlertCircle,
  Zap,
  Star,
  Target
} from "lucide-react";

function NotFound() {
  const navigate = useNavigate();

  const quickLinks = [
    { name: "Home", path: "/", icon: Home },
    { name: "Auctions", path: "/auctions", icon: Target },
    { name: "How It Works", path: "/how-it-works", icon: Compass },
    { name: "About", path: "/about", icon: Star }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 relative overflow-hidden flex items-center justify-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Error Badge */}
        <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-8">
          <Zap size={18} className="animate-pulse" />
          Page Not Found
        </div>

        {/* Main Error Content */}
        <div className="bg-gradient-to-br from-slate-800/80 to-gray-800/80 backdrop-blur-xl p-12 rounded-3xl border border-white/10 shadow-2xl">
          {/* Error Icon */}
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-2xl"></div>
            <div className="relative inline-flex p-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full border border-blue-500/30">
              <SearchX size={80} className="text-blue-400" />
              <AlertCircle size={32} className="absolute -top-2 -right-2 text-yellow-400 animate-bounce" />
            </div>
          </div>

          {/* Error Code */}
          <div className="mb-8">
            <h1 className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-2 leading-none">
              404
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          {/* Error Message */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-white mb-4">Oops! Page Not Found</h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              The page you're looking for seems to have vanished into thin air. 
              It might have been moved, deleted, or you may have entered the wrong URL.
            </p>
            
            {/* Search Suggestion */}
            <div className="bg-gradient-to-r from-slate-700/50 to-gray-700/50 p-6 rounded-2xl border border-gray-600 mb-8">
              <div className="flex items-start gap-3">
                <Compass size={24} className="text-blue-400 flex-shrink-0 mt-1" />
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-white mb-2">What you can do:</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                      Check the URL for any typing errors
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                      Go back to the previous page
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                      Visit our homepage to start fresh
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-white mb-4">Quick Navigation</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="group p-4 bg-gradient-to-r from-slate-700/50 to-gray-700/50 hover:from-blue-600/20 hover:to-purple-600/20 rounded-xl border border-gray-600 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex flex-col items-center gap-2">
                    <link.icon size={24} className="text-gray-400 group-hover:text-blue-400 transition-colors" />
                    <span className="text-gray-300 group-hover:text-white text-sm font-medium">{link.name}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate(-1)}
              className="group px-8 py-4 bg-gradient-to-r from-gray-600 to-slate-600 hover:from-gray-500 hover:to-slate-500 text-white font-semibold rounded-xl shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              Go Back
            </button>
            
            <button
              onClick={() => navigate('/')}
              className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-400 hover:to-purple-400 text-white font-bold rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
            >
              <Home size={20} className="group-hover:scale-110 transition-transform" />
              Go to Home
            </button>
          </div>

          {/* Help Text */}
          <div className="mt-8 pt-6 border-t border-gray-700">
            <p className="text-gray-400 text-sm">
              Still can't find what you're looking for?{" "}
              <span className="text-blue-400 cursor-pointer hover:text-blue-300 transition-colors">
                Contact our support team
              </span>{" "}
              for assistance.
            </p>
          </div>
        </div>

        {/* Floating Animation Elements */}
        <div className="absolute top-20 left-20 w-16 h-16 border border-blue-500/20 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-20 right-20 w-12 h-12 border border-purple-500/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-40 w-8 h-8 bg-blue-400/10 rounded-full animate-bounce"></div>
      </div>
    </div>
  );
}

export default NotFound;