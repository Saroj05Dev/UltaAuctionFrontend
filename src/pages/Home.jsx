import { useNavigate } from "react-router-dom";
import AuctionImage from "../assets/auction-hero.png"; // Add a suitable auction-related image in assets
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
        {/* Left Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-gradient-to-r from-blue-600 to-blue-300 bg-clip-text mb-4">
            Discover Unique Deals
          </h1>
          <p className="text-gray-700 mb-6 text-lg md:text-xl">
            Join the live auctions, place the lowest unique bid, and win
            products at unbelievable prices.
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
            width={600} // increase width prop
            height={600} // increase height prop
            className="w-[500px] h-[500px] object-contain rounded-lg mask-fade-edge"
          />
        </div>
      </section>

      {/** Auction Section */}
      <section className="py-4 mt-6 bg-gradient-to-l from-slate-50 to-slate-200">
        <div className="container flex flex-col md:flex-row">
          <div className="flex flex-col items-center rounded-lg lg:w-1/2">
            <img
              src={AuctionImage2}
              width={500}
              height={900}
              alt="Auction Image"
              className="rounded-lg w-[500px] h-[800px] object-contain"
            />
          </div>
          <div className="flex flex-col flex-wrap text-center lg:py-6 lg:w-1/2 lg:pl-12 lg:text-left font-sans">
            <div className="flex flex-col items-center lg:items-start">
              <div>
                <h2 className="mb-4 text-5xl font-extrabold text-transparent title-font bg-gradient-to-l from-blue-300 to-blue-500 bg-clip-text">
                  Place the Smartest Bid, Win the Best Deals!
                </h2>
                <p className="text-base leading-relaxed text-gray-600">
                  Step into the world of strategic bidding where only the most
                  unique bid wins. Experience the thrill of auctions like never
                  before.
                </p>
              </div>
            </div>

            <div className="w-full p-1">
              <div className="flex items-center h-full p-2 text-xl rounded">
                <span className="font-semibold text-gray-800">
                  🧠 Lowest Unique Bid Wins
                </span>
              </div>
            </div>

            <div className="w-full p-1">
              <div className="flex items-center h-full p-2 text-xl rounded">
                <span className="font-semibold text-gray-800">
                  ⚡ Real-Time Bidding Updates
                </span>
              </div>
            </div>

            <div className="w-full p-1">
              <div className="flex items-center h-full p-2 text-xl rounded">
                <span className="font-semibold text-gray-800">
                  🏆 Fair & Transparent Auctions
                </span>
              </div>
            </div>

            <div className="w-full p-1">
              <div className="flex items-center h-full p-2 text-xl rounded">
                <span className="font-semibold text-gray-800">
                  🔒 Secure Participation
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-6 justify-center md:justify-between mr-6 mt-5">
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center p-3 shadow-md rounded-2xl bg-gradient-to-br from-yellow-50 to-white md:w-1/4">
                <div className="flex items-center justify-center w-20 h-20 mb-4 bg-yellow-100 rounded-full">
                  <img src={PlaceBid} alt="Place Bid" className="w-10 h-10" />
                </div>
                <h2 className="mb-2 text-xl font-semibold text-gray-800">
                  Place Your Bid
                </h2>
                <p className="text-base text-gray-600">
                  Choose your number wisely. The lowest unique bid gets the
                  prize!
                </p>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center text-center p-3 shadow-md rounded-2xl bg-gradient-to-br from-yellow-50 to-white md:w-1/4">
                <div className="flex items-center justify-center w-20 h-20 mb-4 bg-yellow-100 rounded-full">
                  <img
                    src={TrackAuction}
                    alt="Track Auction"
                    className="w-10 h-10"
                  />
                </div>
                <h2 className="mb-2 text-xl font-semibold text-gray-800">
                  Track the Auction
                </h2>
                <p className="text-base text-gray-600">
                  Monitor real-time updates and stay ahead of other bidders.
                </p>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center text-center p-3 shadow-md rounded-2xl bg-gradient-to-br from-yellow-50 to-white md:w-1/4">
                <div className="flex items-center justify-center w-20 h-20 mb-4 bg-yellow-100 rounded-full">
                  <img
                    src={WinAuction}
                    alt="Win Auction"
                    className="w-10 h-10"
                  />
                </div>
                <h2 className="mb-2 text-xl font-semibold text-gray-800">
                  Win the Deal
                </h2>
                <p className="text-base text-gray-600">
                  Be the smartest bidder and grab your favorite item at an
                  unbeatable price!
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
