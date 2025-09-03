import React, { useState } from "react";
import Layout from "../layout/Layout";
import {
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Lightbulb,
  Target,
  Users,
  CreditCard,
  Trophy,
  Zap,
  CheckCircle,
  ArrowRight,
  Brain,
  Clock,
  Shield,
  FileText,
  DollarSign,
  Star,
  Sparkles,
} from "lucide-react";

const faqs = [
  {
    question: "What is UltaAuction?",
    answer:
      "UltaAuction is an innovative online platform where users compete by placing the lowest unique bid to win amazing prizes. Unlike traditional auctions, the winner is determined by the lowest bid that was placed by only one person, making it a game of strategy rather than just spending power.",
    category: "basics",
    icon: Target,
  },
  {
    question: "How does the bidding system work?",
    answer:
      "Our unique system works in reverse - instead of the highest bid winning, the LOWEST UNIQUE bid takes the prize! Each participant can place multiple bids during the auction period. When time runs out, our algorithm identifies the lowest bid amount that was placed by exactly one person. That person wins the auction!",
    category: "bidding",
    icon: Brain,
  },
  {
    question: "Can I participate in multiple auctions?",
    answer:
      "Absolutely! You can join as many active auctions as you like simultaneously. Your personalized dashboard allows you to track all your bids across different auctions, monitor their status, and manage your participation effectively. There's no limit to how many auctions you can enter.",
    category: "participation",
    icon: Users,
  },
  {
    question: "Is there any bidding fee?",
    answer:
      "Some premium auctions may require a small participation fee to ensure serious bidders and maintain fair competition. Any fees are clearly displayed on the auction page before you place your bid. Many auctions are completely free to enter, while others may have minimal fees that help maintain platform quality.",
    category: "fees",
    icon: CreditCard,
  },
  {
    question: "What happens after I win an auction?",
    answer:
      "Congratulations! Once you win, you'll receive instant notifications via email and in your dashboard. You'll then need to complete the payment process for your winning bid amount and provide shipping details. After payment confirmation, we'll arrange delivery of your prize. The entire process is streamlined for your convenience.",
    category: "winning",
    icon: Trophy,
  },
  {
    question: "How do I know my bid is unique?",
    answer:
      "During the auction, you won't know if your bid is unique - that's part of the strategy! The system only reveals winning bids after the auction ends. However, you can see the total number of participants and get hints about the bidding activity to help guide your strategy.",
    category: "strategy",
    icon: Lightbulb,
  },
  {
    question: "Is the platform secure and fair?",
    answer:
      "Absolutely! We use advanced encryption for all transactions and employ transparent algorithms for determining winners. All auction results are publicly verifiable, and we maintain detailed logs of all bidding activity. Our platform is built with security and fairness as top priorities.",
    category: "security",
    icon: Shield,
  },
  {
    question: "How long do auctions typically last?",
    answer:
      "Auction durations vary depending on the prize value and type. Most auctions run for 24-72 hours, giving everyone ample time to participate and strategize. The exact end time is always clearly displayed on each auction page with a live countdown timer.",
    category: "timing",
    icon: Clock,
  },
  {
    question: "Can I change or cancel my bids?",
    answer:
      "Once a bid is placed, it cannot be modified or cancelled. This ensures fairness for all participants and maintains the integrity of the auction system. Make sure to think carefully about your bid amount before confirming it.",
    category: "bidding",
    icon: FileText,
  },
];

const steps = [
  {
    number: "01",
    title: "Choose Your Auction",
    description:
      "Browse through our exciting collection of live auctions featuring amazing prizes from electronics to luxury items.",
    icon: Target,
    color: "from-blue-500 to-cyan-500",
  },
  {
    number: "02",
    title: "Place Strategic Bids",
    description:
      "Think strategically and place your bids. Remember, you want the lowest unique amount - not the highest!",
    icon: Brain,
    color: "from-purple-500 to-pink-500",
  },
  {
    number: "03",
    title: "Wait for Results",
    description:
      "Monitor the auction countdown. When time expires, our system determines the lowest unique bid automatically.",
    icon: Clock,
    color: "from-orange-500 to-red-500",
  },
  {
    number: "04",
    title: "Claim Your Prize",
    description:
      "If you win, complete the payment and provide shipping details. We'll deliver your amazing prize right to your door!",
    icon: Trophy,
    color: "from-yellow-500 to-orange-500",
  },
];

function HowItWorks() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const categories = [
    { id: "all", label: "All Questions", icon: HelpCircle },
    { id: "basics", label: "Basics", icon: Target },
    { id: "bidding", label: "Bidding", icon: Brain },
    { id: "security", label: "Security", icon: Shield },
    { id: "fees", label: "Fees", icon: DollarSign },
  ];

  const filteredFaqs =
    selectedCategory === "all"
      ? faqs
      : faqs.filter((faq) => faq.category === selectedCategory);

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6">
              <Sparkles size={18} className="animate-pulse" />
              Learn the Game
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              How It{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Works
              </span>
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Master the art of strategic bidding with our revolutionary
              lowest-unique-bid system. It's not about spending more—it's about
              thinking smarter.
            </p>
          </div>

          {/* How It Works Steps */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Simple Steps to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                Victory
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative group">
                  <div
                    className="h-full flexbg-gradient-to-br from-slate-800/80 to-gray-800/80 backdrop-blur-xl 
  p-8 pt-12 rounded-2xl border border-white/10 hover:border-gray-600 
  transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                  >
                    {/* Step Number */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div
                      className={`inline-flex p-4 bg-gradient-to-r ${step.color} bg-opacity-20 rounded-2xl mb-6`}
                    >
                      <step.icon size={32} className="text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-white mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Arrow for connection (except last item) */}
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                        <ArrowRight size={24} className="text-gray-500" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-white mb-4">
              Frequently Asked{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                Questions
              </span>
            </h2>
            <p className="text-gray-300 text-center mb-8">
              Everything you need to know about our unique auction system
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-2 ${
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                      : "bg-slate-700/50 text-gray-300 hover:bg-slate-600/50 hover:text-white border border-gray-600"
                  }`}
                >
                  <category.icon size={18} />
                  {category.label}
                </button>
              ))}
            </div>

            {/* FAQ Accordion */}
            <div className="max-w-4xl mx-auto space-y-4">
              {filteredFaqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-800/80 to-gray-800/80 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden transition-all duration-300 hover:border-gray-600"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex justify-between items-center px-8 py-6 text-left hover:bg-slate-700/30 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg">
                        <faq.icon size={20} className="text-blue-400" />
                      </div>
                      <span className="text-lg font-semibold text-white">
                        {faq.question}
                      </span>
                    </div>
                    <div className="flex-shrink-0 ml-4">
                      {activeIndex === index ? (
                        <ChevronUp size={24} className="text-blue-400" />
                      ) : (
                        <ChevronDown size={24} className="text-gray-400" />
                      )}
                    </div>
                  </button>

                  {activeIndex === index && (
                    <div className="px-8 pb-6 border-t border-gray-700">
                      <div className="pt-6 text-gray-300 leading-relaxed text-lg">
                        {faq.answer}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* No results message */}
            {filteredFaqs.length === 0 && (
              <div className="text-center py-12">
                <HelpCircle size={64} className="mx-auto text-gray-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  No questions found
                </h3>
                <p className="text-gray-400">
                  Try selecting a different category
                </p>
              </div>
            )}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-br from-slate-800/80 to-gray-800/80 backdrop-blur-xl p-12 rounded-3xl border border-white/10">
              <div className="inline-flex p-4 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl mb-6">
                <CheckCircle size={48} className="text-green-400" />
              </div>

              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Start{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  Winning?
                </span>
              </h2>

              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Now that you understand how our unique auction system works,
                it's time to put your strategy to the test and win amazing
                prizes!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-400 hover:to-blue-400 text-white font-bold rounded-xl shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3">
                  <Target
                    size={24}
                    className="group-hover:rotate-12 transition-transform"
                  />
                  Browse Auctions
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>

                <button className="group px-8 py-4 bg-gradient-to-r from-slate-600 to-gray-600 hover:from-slate-500 hover:to-gray-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 border border-gray-600">
                  <HelpCircle size={20} />
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default HowItWorks;
