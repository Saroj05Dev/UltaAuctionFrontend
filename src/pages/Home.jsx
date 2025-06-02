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
        <section className="flex flex-col-reverse items-center justify-between px-6 py-10 gap-10 md:flex-row bg-gradient-to-l from-slate-50 to-slate-200">
          {/* Left Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-gradient-to-r from-blue-600 to-blue-300 bg-clip-text mb-4">
              Discover Unique Deals
            </h1>
            <p className="text-gray-700 mb-6 text-base sm:text-lg md:text-xl">
              Join the live auctions, place the lowest unique bid, and win products at unbelievable prices.
            </p>
            <button
              onClick={() => navigate("/auctions")}
              className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all font-semibold"
            >
              Start Bidding 🔨
            </button>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={AuctionImage}
              alt="Auction Hero"
              className="w-full max-w-[500px] h-auto object-contain rounded-lg"
            />
          </div>
        </section>

        {/* Featured Auction */}
        <section className="bg-white py-10 px-4 text-center">
          <p className="text-lg text-gray-700 mb-2 font-semibold">🔥 Featured Auction</p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-800">
            Win a Brand New iPhone 15!
          </h2>
          <p className="text-gray-600 mb-4 text-base sm:text-lg">
            Starting at just ₹50. Lowest unique bid wins. Don't miss out!
          </p>
          <button
            onClick={() => navigate("/auctions")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold"
          >
            View Auctions
          </button>
        </section>

        {/* Auction Strategy Section */}
        <section className="py-10 px-4 bg-gradient-to-l from-slate-50 to-slate-200">
          <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-10">
            {/* Left Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <img
                src={AuctionImage2}
                alt="Auction"
                className="w-full max-w-md lg:max-w-[500px] h-auto object-contain rounded-lg"
              />
            </div>

            {/* Right Text Content */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl sm:text-4xl font-extrabold mb-6 text-transparent bg-gradient-to-l from-blue-300 to-blue-500 bg-clip-text text-center lg:text-left">
                Place the Smartest Bid, Win the Best Deals!
              </h2>
              <p className="text-gray-600 text-base sm:text-lg mb-6 text-center lg:text-left">
                Step into the world of strategic bidding where only the most unique bid wins.
                Experience the thrill of auctions like never before.
              </p>

              <ul className="space-y-4 text-base sm:text-lg text-gray-800 font-semibold mb-8">
                <li>🧠 Lowest Unique Bid Wins</li>
                <li>⚡ Real-Time Bidding Updates</li>
                <li>🏆 Fair & Transparent Auctions</li>
                <li>🔒 Secure Participation</li>
              </ul>

              {/* Steps Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Step 1 */}
                <div className="bg-gradient-to-br from-yellow-50 to-white p-4 rounded-xl shadow-md text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-yellow-100 flex items-center justify-center rounded-full">
                    <img src={PlaceBid} alt="Place Bid" className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Place Your Bid</h3>
                  <p className="text-gray-600 text-sm">
                    Choose your number wisely. The lowest unique bid gets the prize!
                  </p>
                </div>

                {/* Step 2 */}
                <div className="bg-gradient-to-br from-yellow-50 to-white p-4 rounded-xl shadow-md text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-yellow-100 flex items-center justify-center rounded-full">
                    <img src={TrackAuction} alt="Track Auction" className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Track the Auction</h3>
                  <p className="text-gray-600 text-sm">
                    Monitor real-time updates and stay ahead of other bidders.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="bg-gradient-to-br from-yellow-50 to-white p-4 rounded-xl shadow-md text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-yellow-100 flex items-center justify-center rounded-full">
                    <img src={WinAuction} alt="Win Auction" className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Win the Deal</h3>
                  <p className="text-gray-600 text-sm">
                    Be the smartest bidder and grab your favorite item at an unbeatable price!
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
