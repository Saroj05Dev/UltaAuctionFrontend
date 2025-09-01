import { useNavigate } from "react-router-dom";
import AuctionImage from "../assets/AuctionImg1.jpg";
import AuctionImage2 from "../assets/auction2.jpg";
import Layout from "../layout/Layout";
import { 
  Gavel, 
  Smartphone, 
  Flame, 
  Brain, 
  Clock, 
  Target, 
  Shield, 
  FileText, 
  Activity, 
  Trophy,
  Zap,
  Star,
  CheckCircle
} from "lucide-react";

function Home() {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-yellow-500/5 to-orange-500/5 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
            <div className="flex flex-col-reverse items-center justify-between gap-12 lg:flex-row">
              {/* Left Content */}
              <div className="w-full lg:w-1/2 text-center lg:text-left space-y-8">
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-yellow-400 text-sm font-medium">
                  <Zap size={18} className="animate-pulse" />
                  Live Auctions Available
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                  Welcome to{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                    UltaAuctions
                  </span>
                </h1>
                
                <p className="text-xl text-gray-300 max-w-xl leading-relaxed">
                  Experience the most thrilling auction platform where strategy meets luck. 
                  The lowest unique bid wins incredible prizes at unbelievable prices.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 items-center lg:items-start">
                  <button
                    onClick={() => navigate("/auctions")}
                    className="group relative px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold rounded-xl shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="flex items-center gap-3">
                      <Gavel size={24} className="group-hover:rotate-12 transition-transform" />
                      Start Bidding Now
                      <Flame size={20} className="text-red-400 animate-bounce" />
                    </div>
                  </button>
                  
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <CheckCircle size={16} className="text-green-400" />
                    <span>No hidden fees</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-700">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-400">1000+</div>
                    <div className="text-sm text-gray-400">Active Users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-400">₹50L+</div>
                    <div className="text-sm text-gray-400">Prizes Won</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-400">24/7</div>
                    <div className="text-sm text-gray-400">Live Support</div>
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="w-full lg:w-1/2 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-2xl blur-2xl transform rotate-6"></div>
                  <img
                    src={AuctionImage}
                    alt="Auction Hero"
                    className="relative w-full max-w-[500px] h-auto object-contain rounded-2xl shadow-2xl border border-white/10 backdrop-blur-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Auction Section */}
        <section className="relative py-20 px-6 bg-gradient-to-r from-slate-800 to-gray-800">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmYmJmMjQiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full text-red-400 text-sm font-medium mb-6 animate-pulse">
              <Flame size={18} />
              Featured Live Auction
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Win a Brand New{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                iPhone 15 Pro
              </span>
            </h2>
            
            <div className="flex justify-center mb-6">
              <Smartphone size={80} className="text-gray-300" />
            </div>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Starting at just ₹50. Place your strategic bid and win this premium device 
              at an incredible price. The lowest unique bid takes it all!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 items-center justify-center mb-8">
              <div className="bg-gradient-to-r from-slate-700 to-gray-700 px-6 py-3 rounded-lg border border-gray-600">
                <div className="flex items-center gap-2 text-yellow-400">
                  <Clock size={20} />
                  <span className="font-mono text-xl">23:45:12</span>
                </div>
                <div className="text-sm text-gray-400">Time Remaining</div>
              </div>
              
              <div className="bg-gradient-to-r from-slate-700 to-gray-700 px-6 py-3 rounded-lg border border-gray-600">
                <div className="flex items-center gap-2 text-green-400">
                  <Activity size={20} />
                  <span className="font-mono text-xl">147</span>
                </div>
                <div className="text-sm text-gray-400">Active Bidders</div>
              </div>
            </div>
            
            <button
              onClick={() => navigate("/auctions")}
              className="group relative px-10 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold rounded-xl shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-center gap-3">
                <Trophy size={24} className="group-hover:rotate-12 transition-transform" />
                Enter Auction Room
                <Star size={20} className="text-yellow-300 animate-spin" />
              </div>
            </button>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 px-6 bg-gradient-to-br from-slate-900 to-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              {/* Left Image */}
              <div className="w-full lg:w-1/2">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl transform -rotate-6"></div>
                  <img
                    src={AuctionImage2}
                    alt="Auction Strategy"
                    className="relative w-full max-w-lg h-auto object-contain rounded-3xl shadow-2xl border border-white/10"
                  />
                </div>
              </div>

              {/* Right Content */}
              <div className="w-full lg:w-1/2 space-y-8">
                <div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                    Bid Smart.{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                      Win Big.
                    </span>
                  </h2>
                  <p className="text-xl text-gray-300 leading-relaxed">
                    Our unique auction system rewards strategy over deep pockets. 
                    It&apos;s not about the highest bid—it&apos;s about finding that perfect, unique number.
                  </p>
                </div>

                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { icon: Brain, title: "Unique Bid System", desc: "Lowest unique bid wins" },
                    { icon: Clock, title: "Real-Time Updates", desc: "Live leaderboards & tracking" },
                    { icon: Target, title: "Fair & Transparent", desc: "Open winning algorithm" },
                    { icon: Shield, title: "Secure Platform", desc: "Protected payments & data" }
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-slate-800/50 rounded-xl border border-gray-700 hover:border-yellow-500/50 transition-colors">
                      <div className="p-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-lg">
                        <feature.icon size={24} className="text-yellow-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                        <p className="text-gray-400 text-sm">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Process Steps */}
            <div className="mt-20">
              <h3 className="text-3xl font-bold text-center text-white mb-12">
                How to Win in 3 Simple Steps
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    step: "01",
                    icon: FileText,
                    title: "Place Your Bid",
                    description: "Choose your lucky number strategically. Remember, uniqueness is key to victory.",
                    color: "from-blue-500 to-cyan-500"
                  },
                  {
                    step: "02",
                    icon: Activity,
                    title: "Track Progress",
                    description: "Monitor your bid status in real-time as other participants place their bids.",
                    color: "from-purple-500 to-pink-500"
                  },
                  {
                    step: "03",
                    icon: Trophy,
                    title: "Claim Victory",
                    description: "Win amazing products at incredible prices when your bid is the lowest unique one.",
                    color: "from-yellow-500 to-orange-500"
                  }
                ].map((step, index) => (
                  <div key={index} className="relative group">
                    <div className="bg-gradient-to-br from-slate-800 to-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                      {/* Step Number */}
                      <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        {step.step}
                      </div>
                      
                      {/* Icon */}
                      <div className={`inline-flex p-4 bg-gradient-to-r ${step.color} bg-opacity-20 rounded-2xl mb-6`}>
                        <step.icon size={40} className="text-white" />
                      </div>
                      
                      {/* Content */}
                      <h4 className="text-2xl font-bold text-white mb-4">{step.title}</h4>
                      <p className="text-gray-300 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default Home;