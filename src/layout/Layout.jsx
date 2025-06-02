import { Link, useNavigate } from "react-router-dom";
import AuctionLogo from "../assets/AucionLogo.jpg";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/slices/AuthSlice";
import { useState } from "react";

function Layout({ children }) {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const [menuOpen, setMenuOpen] = useState(false);

  async function handleLogout(e) {
    e.preventDefault();
    dispatch(logout());
    setMenuOpen(false);
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-screen-xl mx-auto px-4 py-4 flex justify-around items-center">
          {/* Logo & Title */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <p className="text-xl font-semibold text-black">UltaAuction</p>
            <img
              src={AuctionLogo}
              alt="UltaAuction Logo"
              className="h-10 w-auto rounded-full"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 text-lg text-gray-600">
            <Link to="/auctions" className="hover:text-blue-500">
              Auctions
            </Link>
            <Link to="/how-it-works" className="hover:text-blue-500">
              How It Works
            </Link>
            <Link to="/about" className="hover:text-blue-500">
              About
            </Link>
            <div className="ml-40">
              {isLoggedIn ? (
                <button
                  onClick={handleLogout}
                  className="hover:text-blue-500 cursor-pointer"
                >
                  Logout
                </button>
              ) : (
                <Link
                  to="/login"
                  className="hover:text-blue-500 cursor-pointer"
                >
                  Login
                </Link>
              )}
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="text-gray-700 focus:outline-none"
            >
              <svg
                className="w-6 h-6 cursor-pointer"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="md:hidden px-4 pb-4 flex flex-col gap-2 text-lg">
            <Link
              to="/auctions"
              onClick={() => setMenuOpen(false)}
              className="hover:text-blue-500"
            >
              Auctions
            </Link>
            <Link
              to="/how-it-works"
              onClick={() => setMenuOpen(false)}
              className="hover:text-blue-500"
            >
              How It Works
            </Link>
            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="hover:text-blue-500"
            >
              About
            </Link>
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="text-left hover:text-blue-500"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="hover:text-blue-500"
              >
                Login
              </Link>
            )}
          </div>
        )}
      </nav>

      {/* Main content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Layout;
