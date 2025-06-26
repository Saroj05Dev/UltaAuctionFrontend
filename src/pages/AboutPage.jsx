import Layout from "../layout/Layout";
import { GiPokerHand } from "react-icons/gi";
import { FaTrophy } from "react-icons/fa";

function About() {
  return (
    <Layout>
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-black to-gray-900 py-10 px-4">
      <div className="max-w-5xl mx-auto px-4 py-12 font-mono text-gray-200">
        <h1 className="text-4xl font-extrabold text-center mb-10 text-yellow-400 flex items-center justify-center gap-3">
          <GiPokerHand className="text-yellow-300 text-5xl" />
          About UltaAuction
        </h1>

        <section className="space-y-6 bg-zinc-900 p-6 md:p-8 rounded-2xl shadow-lg border border-yellow-700">
          <p className="text-lg leading-relaxed">
            <strong className="text-yellow-300">UltaAuction</strong> is a unique, casino-inspired auction platform where strategy meets luck. Unlike traditional bidding, here the{" "}
            <span className="text-green-400 font-semibold">lowest unique bid</span> secures the win. It's not just about money—it's about making the smartest move.
          </p>

          <p className="text-lg leading-relaxed">
            Our mission is to deliver a thrilling and transparent experience for all users. Whether you're here to win big or sell smart, UltaAuction is built for action, excitement, and fairness.
          </p>

          <p className="text-lg leading-relaxed">
            The platform runs on the rock-solid <strong className="text-blue-400">MERN Stack</strong>—MongoDB, Express, React, and Node.js—ensuring smooth, fast, and scalable performance.
          </p>

          <div className="bg-black bg-opacity-50 p-6 rounded-xl shadow-inner border border-yellow-600">
            <h2 className="text-2xl font-semibold mb-3 text-yellow-300 flex items-center gap-2">
              <FaTrophy className="text-yellow-400" />
              Key Features
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>🎯 Lowest unique bid wins</li>
              <li>📡 Live auction tracking</li>
              <li>🧩 Simple yet elegant interface</li>
              <li>🔐 Role-based access (Admin/User)</li>
              <li>☁️ Cloud image uploads</li>
              <li>🛡️ Secure authentication system</li>
            </ul>
          </div>

          <p className="text-lg leading-relaxed">
            UltaAuction isn’t just a side project—it’s a growing ecosystem blending e-commerce, psychology, and a thrill of chance. We’re always leveling up. Your feedback is our cheat code.
          </p>
        </section>
      </div>
      </div>
    </Layout>
  );
}

export default About;
