import React, { useState } from "react";
import Layout from "../layout/Layout";

const faqs = [
  {
    question: "What is UltaAuction?",
    answer:
      "UltaAuction is an online platform where users can place the lowest unique bid to win auctions. The user who places the lowest and unmatched bid wins the auction item.",
  },
  {
    question: "How does the bidding system work?",
    answer:
      "Each user can place a bid of their choice. At the end of the auction, the bid that is the lowest and not matched by any other bidder is declared the winner.",
  },
  {
    question: "Can I participate in multiple auctions?",
    answer:
      "Yes, once logged in, you can participate in multiple ongoing auctions and track them in your dashboard.",
  },
  {
    question: "Is there any bidding fee?",
    answer:
      "Some auctions may have a minimal bidding fee to ensure seriousness and fair competition. Details are mentioned in the auction info.",
  },
  {
    question: "What happens after I win an auction?",
    answer:
      "If you win, you'll be notified immediately. You will then proceed to payment and shipping details to receive your item.",
  },
];

function HowItWorks() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <Layout>
    <div className="max-w-4xl mx-auto px-4 py-12 font-mono">
      <h1 className="text-3xl font-bold text-center text-gray-700 mb-8">
        How It Works
      </h1>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-xl shadow-sm transition duration-300"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-medium text-gray-700 hover:text-blue-600 cursor-pointer"
            >
              <span>{faq.question}</span>
              <span>{activeIndex === index ? "−" : "+"}</span>
            </button>
            {activeIndex === index && (
              <div className="px-6 pb-4 text-gray-600">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    </Layout>
  );
}

export default HowItWorks;
