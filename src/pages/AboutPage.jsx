import Layout from "../layout/Layout";
import { 
  Target, 
  Trophy, 
  Zap, 
  Shield, 
  Users, 
  Clock, 
  Brain, 
  Code, 
  Database, 
  Server, 
  Globe,
  CheckCircle,
  Star,
  Sparkles,
  ArrowRight,
  Activity
} from "lucide-react";

function About() {
  const techStack = [
    { name: "MongoDB", icon: Database, color: "from-green-600 to-emerald-600" },
    { name: "Express.js", icon: Server, color: "from-gray-600 to-slate-600" },
    { name: "React.js", icon: Code, color: "from-blue-600 to-cyan-600" },
    { name: "Node.js", icon: Globe, color: "from-green-500 to-lime-500" }
  ];

  const features = [
    {
      icon: Target,
      title: "Lowest Unique Bid System",
      description: "Revolutionary bidding mechanism where strategy beats deep pockets",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Activity,
      title: "Real-Time Tracking",
      description: "Live auction monitoring with instant updates and notifications",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Brain,
      title: "Strategic Gameplay",
      description: "Psychology meets technology in our intelligent auction system",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Secure & Transparent",
      description: "Advanced security with complete transparency in all transactions",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Users,
      title: "Role-Based Access",
      description: "Sophisticated user management for administrators and bidders",
      color: "from-red-500 to-rose-500"
    },
    {
      icon: Globe,
      title: "Cloud Integration",
      description: "Scalable cloud infrastructure for seamless user experience",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const stats = [
    { label: "Active Users", value: "10K+", icon: Users },
    { label: "Auctions Completed", value: "5K+", icon: Trophy },
    { label: "Success Rate", value: "99.9%", icon: CheckCircle },
    { label: "Average Win Value", value: "₹50K", icon: Star }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-yellow-400 text-sm font-medium mb-6">
              <Sparkles size={18} className="animate-pulse" />
              Learn About Us
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                UltaAuction
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Where strategy meets opportunity. We're revolutionizing online auctions with our 
              unique lowest-bid-wins system, creating fair chances for everyone to win big.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-slate-800/80 to-gray-800/80 backdrop-blur-xl p-6 rounded-2xl border border-white/10 hover:border-yellow-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl text-center">
                  <div className="inline-flex p-4 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-2xl mb-4">
                    <stat.icon size={32} className="text-yellow-400" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-3xl font-bold text-white">{stat.value}</p>
                    <p className="text-gray-400">{stat.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Left Column - Story */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-slate-800/80 to-gray-800/80 backdrop-blur-xl p-8 rounded-3xl border border-white/10">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <Target size={32} className="text-yellow-400" />
                  Our Mission
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  <strong className="text-yellow-400">UltaAuction</strong> is more than just an auction platform—it's a 
                  strategic gaming experience where intelligence triumphs over wealth. Our unique{" "}
                  <span className="text-green-400 font-semibold">lowest unique bid</span> system ensures 
                  that every participant has an equal opportunity to win, regardless of their budget.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  We believe in creating thrilling, transparent, and fair experiences for all users. 
                  Whether you're here to win incredible prizes or simply enjoy the strategic gameplay, 
                  UltaAuction delivers excitement with every bid.
                </p>
              </div>

              <div className="bg-gradient-to-br from-slate-800/80 to-gray-800/80 backdrop-blur-xl p-8 rounded-3xl border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <Zap size={28} className="text-blue-400" />
                  The Technology
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Built on the powerful <strong className="text-blue-400">MERN Stack</strong>, our platform 
                  delivers lightning-fast performance, real-time updates, and seamless scalability. 
                  Every component is engineered for reliability and user satisfaction.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  {techStack.map((tech, index) => (
                    <div key={index} className={`p-4 bg-gradient-to-r ${tech.color} bg-opacity-10 rounded-xl border border-white/10 flex items-center gap-3`}>
                      <tech.icon size={24} className="text-white" />
                      <span className="text-white font-medium">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Features */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                <Trophy size={32} className="text-yellow-400" />
                Key Features
              </h2>
              
              {features.map((feature, index) => (
                <div key={index} className="group">
                  <div className="bg-gradient-to-br from-slate-800/80 to-gray-800/80 backdrop-blur-xl p-6 rounded-2xl border border-white/10 hover:border-gray-600 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 bg-gradient-to-r ${feature.color} bg-opacity-20 rounded-xl flex-shrink-0`}>
                        <feature.icon size={24} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                        <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                      </div>
                      <ArrowRight size={20} className="text-gray-400 group-hover:text-yellow-400 transition-colors" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Vision Section */}
          <div className="bg-gradient-to-r from-slate-800/80 to-gray-800/80 backdrop-blur-xl p-12 rounded-3xl border border-white/10 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl mb-6">
                <Brain size={48} className="text-purple-400" />
              </div>
              
              <h2 className="text-3xl font-bold text-white mb-6">
                The Future of{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                  Strategic Auctions
                </span>
              </h2>
              
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                UltaAuction isn't just a platform—it's an evolving ecosystem that blends e-commerce, 
                psychology, and the thrill of strategic gameplay. We're constantly innovating, 
                adding new features, and refining the experience based on your valuable feedback.
              </p>
              
              <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-400" />
                  <span>Always Evolving</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-400" />
                  <span>User-Driven Development</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-400" />
                  <span>Community Focused</span>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-xl text-gray-300 mb-8">
              Ready to experience the future of strategic bidding?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold rounded-xl shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 transform hover:scale-105 flex items-center gap-3">
                <Target size={24} />
                Start Bidding Now
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default About;