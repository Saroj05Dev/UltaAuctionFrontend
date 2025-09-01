import { Link, useNavigate } from "react-router-dom";
import AuctionLogo from "../assets/AucionLogo.jpg";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/slices/AuthSlice";
import { useState } from "react";
import { 
  Gavel, 
  HelpCircle, 
  Info, 
  LogIn, 
  LogOut, 
  FileText, 
  Menu, 
  X,
  Zap
} from "lucide-react";

function Layout({ children }) {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const role = useSelector((state) => state.auth?.role);
  const dispatch = useDispatch();
  const [menuOpen, setMenuOpen] = useState(false);

  async function handleLogout(e) {
    e.preventDefault();
    dispatch(logout());
    setMenuOpen(false);
  }

  const navLinks = [
    { to: "/auctions", icon: Gavel, label: "Auctions", color: "hover:text-yellow-400" },
    { to: "/how-it-works", icon: HelpCircle, label: "How It Works", color: "hover:text-blue-400" },
    { to: "/about", icon: Info, label: "About", color: "hover:text-purple-400" },
  ];

  if (isLoggedIn && role === "USER") {
    navLinks.push({ to: "/my-bids", icon: FileText, label: "My Bids", color: "hover:text-green-400" });
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-xl border-b border-gray-700/50 shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo & Title */}
            <div
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() => navigate("/")}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/50 to-orange-500/50 rounded-full blur-lg group-hover:blur-xl transition-all"></div>
                <img
                  src={AuctionLogo}
                  alt="UltaAuction Logo"
                  className="relative h-12 w-12 rounded-full border-2 border-yellow-500/80 group-hover:border-yellow-400 transition-all"
                />
              </div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent group-hover:from-yellow-300 group-hover:to-orange-400 transition-all duration-300">
                  UltaAuction
                </h1>
                <Zap size={20} className="text-yellow-500 animate-pulse" />
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <div className="flex items-center gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-gray-300 ${link.color} transition-all duration-300 hover:bg-white/5 group`}
                  >
                    <link.icon size={18} className="group-hover:scale-110 transition-transform" />
                    <span className="font-medium">{link.label}</span>
                  </Link>
                ))}
              </div>

              {/* Auth Button */}
              <div className="ml-6 pl-6 border-l border-gray-600">
                {isLoggedIn ? (
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600/80 to-red-700/80 hover:from-red-600 hover:to-red-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25"
                  >
                    <LogOut size={18} />
                    Logout
                  </button>
                ) : (
                  <Link
                    to="/login"
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600/80 to-emerald-600/80 hover:from-green-600 hover:to-emerald-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
                  >
                    <LogIn size={18} />
                    Login
                  </Link>
                )}
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300"
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-slate-900/98 backdrop-blur-xl border-b border-gray-700/50 shadow-2xl">
            <div className="px-6 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 ${link.color} transition-all duration-300 hover:bg-white/5`}
                >
                  <link.icon size={20} />
                  <span className="font-medium">{link.label}</span>
                </Link>
              ))}
              
              <div className="pt-4 border-t border-gray-700 mt-4">
                {isLoggedIn ? (
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-3 w-full px-4 py-3 rounded-lg text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-all duration-300"
                  >
                    <LogOut size={20} />
                    <span className="font-medium">Logout</span>
                  </button>
                ) : (
                  <Link
                    to="/login"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-green-400 hover:text-green-300 hover:bg-green-500/10 transition-all duration-300"
                  >
                    <LogIn size={20} />
                    <span className="font-medium">Login</span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Layout;