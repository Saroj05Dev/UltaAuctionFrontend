import { useNavigate } from "react-router-dom";
import AuctionImage from "../assets/AuctionImg1.jpg";
import AuctionImage2 from "../assets/auction2.jpg";
import PlaceBid from "../assets/place-your-bid.svg";
import TrackAuction from "../assets/track-the-auction.svg";
import WinAuction from "../assets/win-the-deal.svg";
import Layout from "../layout/Layout";

function Home() {
  const navigate = useNavigate();

  return (
    <Layout>
      <div>
        {/* Hero Section */}
        <section className="flex flex-col-reverse items-center justify-between px-6 py-12 gap-10 md:flex-row bg-gradient-to-br from-[#1f1f1f] via-[#2e2e2e] to-[#1f1f1f] text-white relative overflow-hidden">
          {/* Floating Glow Effect */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,215,0,0.1),transparent)] pointer-events-none"></div>

          {/* Left Content */}
          <div className="w-full md:w-1/2 text-center md:text-left z-10">
            <h1 className="text-4xl md:text-5xl font-black text-yellow-400 drop-shadow-md mb-4 animate-pulse">
              🎲 Welcome to UltaAuctions 🎰
            </h1>
            <p className="text-gray-300 mb-6 text-lg md:text-xl">
              Join the most thrilling auction floor. Lowest unique bid wins. Are
              you lucky tonight?
            </p>
            <button
              onClick={() => navigate("/auctions")}
              className="px-6 py-3 bg-yellow-500 text-black font-bold rounded-xl shadow-lg hover:bg-yellow-400 transition-all transform hover:scale-105"
            >
              Try Your Luck 🔥
            </button>
          </div>

          {/* Right Image with Glow */}
          <div className="w-full md:w-1/2 flex justify-center z-10">
            <img
              src={AuctionImage}
              alt="Auction Hero"
              className="w-full max-w-[500px] h-auto object-contain rounded-lg shadow-2xl border-4 border-yellow-400"
            />
          </div>
        </section>

        {/* Live Featured Auction */}
        <section className="bg-black py-10 px-4 text-center text-white relative">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/casino-light-bg.svg')] bg-cover opacity-10 pointer-events-none"></div>
          <p className="text-xl font-semibold text-yellow-400 mb-2 animate-bounce">
            🔥 Featured Auction
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-2 text-white tracking-wide">
            Win a Brand New iPhone 15 📱
          </h2>
          <p className="text-gray-300 mb-4 text-lg">
            Starting at just ₹50. Lowest unique bid takes it home. Test your
            fate now!
          </p>
          <button
            onClick={() => navigate("/auctions")}
            className="bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold transition-all transform hover:scale-105"
          >
            Enter Auction Room 🎟️
          </button>
        </section>

        {/* Auction Strategy Section */}
        <section className="py-14 px-4 bg-gradient-to-tr from-black via-[#111] to-black text-white">
          <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-10">
            {/* Left Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <img
                src={AuctionImage2}
                alt="Auction Strategy"
                className="w-full max-w-md lg:max-w-[500px] h-auto object-contain rounded-2xl border-4 border-yellow-400 shadow-xl"
              />
            </div>

            {/* Right Text Content */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-yellow-300">
                Bid Smart. Win Big. 💡
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                Experience a strategic thrill! It's not about the highest bid.
                It's about the rarest one.
              </p>

              <ul className="space-y-3 text-lg font-semibold text-yellow-200">
                <li>🧠 Unique Bids, Real Prizes</li>
                <li>⏱️ Real-Time Leaderboards</li>
                <li>🎯 Transparent Winning Logic</li>
                <li>🔐 Secure Payments & User Safety</li>
              </ul>

              {/* Step-by-step */}
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Step 1 */}
                <div className="bg-gradient-to-br from-[#222] to-[#111] p-5 rounded-2xl shadow-md text-center border border-yellow-500">
                  <div className="w-16 h-16 mx-auto mb-4 bg-yellow-100 flex items-center justify-center rounded-full shadow-md">
                    <img src={PlaceBid} alt="Place Bid" className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-yellow-300 mb-2">
                    1️⃣ Place Bid
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Pick your lucky number! Only the most unique bid will win.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="bg-gradient-to-br from-[#222] to-[#111] p-5 rounded-2xl shadow-md text-center border border-yellow-500">
                  <div className="w-16 h-16 mx-auto mb-4 bg-yellow-100 flex items-center justify-center rounded-full shadow-md">
                    <img
                      src={TrackAuction}
                      alt="Track Auction"
                      className="w-8 h-8"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-yellow-300 mb-2">
                    2️⃣ Track It
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Stay updated. Monitor your bid in real-time as others place
                    theirs.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="bg-gradient-to-br from-[#222] to-[#111] p-5 rounded-2xl shadow-md text-center border border-yellow-500">
                  <div className="w-16 h-16 mx-auto mb-4 bg-yellow-100 flex items-center justify-center rounded-full shadow-md">
                    <img
                      src={WinAuction}
                      alt="Win Auction"
                      className="w-8 h-8"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-yellow-300 mb-2">
                    3️⃣ Claim Victory
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Your time to shine! Win the product at a jaw-dropping price!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default Home;
