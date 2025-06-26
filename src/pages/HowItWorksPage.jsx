import React, { useState } from "react";
import Layout from "../layout/Layout";
import { GiCardJoker } from "react-icons/gi";

const faqs = [
  {
    question: "What is UltaAuction?",
    answer:
      "UltaAuction is an online platform where users place the lowest unique bid to win. The one with the lowest unmatched bid takes home the prize!",
  },
  {
    question: "How does the bidding system work?",
    answer:
      "Each participant can bid multiple times. When the auction ends, the system picks the lowest bid that was placed by only one person.",
  },
  {
    question: "Can I participate in multiple auctions?",
    answer:
      "Absolutely! You can join as many active auctions as you like and view all your bids from your user dashboard.",
  },
  {
    question: "Is there any bidding fee?",
    answer:
      "Some auctions require a small fee to ensure fair competition. The fee (if any) is always shown on the auction page before you bid.",
  },
  {
    question: "What happens after I win an auction?",
    answer:
      "You’ll be instantly notified! From there, complete your payment and confirm shipping details to claim your reward.",
  },
];

function HowItWorks() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-black to-gray-900 py-10 px-4">
      <div className="max-w-4xl mx-auto px-4 py-12 font-mono">
        <h1 className="text-4xl font-bold text-center text-yellow-400 mb-10 flex items-center justify-center gap-2">
          <GiCardJoker className="text-yellow-300 text-5xl" />
          How It Works
        </h1>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-yellow-500 rounded-xl shadow-md transition duration-300"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-semibold text-yellow-200 hover:text-white"
              >
                <span>{faq.question}</span>
                <span className="text-yellow-400 text-xl">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>
              {activeIndex === index && (
                <div className="px-6 pb-5 text-gray-300 text-sm tracking-wide">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      </div>
    </Layout>
  );
}

export default HowItWorks;
