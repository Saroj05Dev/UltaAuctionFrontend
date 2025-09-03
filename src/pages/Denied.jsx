import { useNavigate } from "react-router-dom";
import { 
  ShieldX, 
  Home, 
  AlertTriangle, 
  Lock,
  ArrowLeft,
  Zap
} from "lucide-react";

function Denied() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 relative overflow-hidden flex items-center justify-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-red-500/5 to-orange-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        {/* Error Badge */}
        <div className="inline-flex items-center gap-3 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full text-red-400 text-sm font-medium mb-8">
          <Zap size={18} className="animate-pulse" />
          Access Restricted
        </div>

        {/* Main Error Content */}
        <div className="bg-gradient-to-br from-slate-800/80 to-gray-800/80 backdrop-blur-xl p-12 rounded-3xl border border-white/10 shadow-2xl">
          {/* Error Icon */}
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full blur-2xl"></div>
            <div className="relative inline-flex p-8 bg-gradient-to-r from-red-600/20 to-orange-600/20 rounded-full border border-red-500/30">
              <ShieldX size={80} className="text-red-400" />
              <Lock size={32} className="absolute -top-2 -right-2 text-orange-400 animate-bounce" />
            </div>
          </div>

          {/* Error Code */}
          <div className="mb-6">
            <h1 className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500 mb-2">
              403
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full"></div>
          </div>

          {/* Error Message */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Access Denied</h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              You don't have permission to access this resource. This area is restricted 
              and requires special authorization.
            </p>
            
            {/* Additional Info */}
            <div className="bg-gradient-to-r from-slate-700/50 to-gray-700/50 p-6 rounded-2xl border border-gray-600 mb-8">
              <div className="flex items-start gap-3">
                <AlertTriangle size={24} className="text-yellow-400 flex-shrink-0 mt-1" />
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-white mb-2">Possible Reasons:</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                      You need to be logged in as an administrator
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                      Your account doesn't have the required permissions
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                      This page is temporarily restricted
                    </li>
                  </ul>
                </div>
              </div>
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
              className="group px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-black font-bold rounded-xl shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
            >
              <Home size={20} className="group-hover:scale-110 transition-transform" />
              Go to Home
            </button>
          </div>

          {/* Help Text */}
          <div className="mt-8 pt-6 border-t border-gray-700">
            <p className="text-gray-400 text-sm">
              Need help? Contact our{" "}
              <span className="text-yellow-400 cursor-pointer hover:text-yellow-300 transition-colors">
                support team
              </span>{" "}
              for assistance.
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 border border-red-500/20 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 border border-orange-500/20 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
}

export default Denied;