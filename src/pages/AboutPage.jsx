import Layout from "../layout/Layout";

function About() {
  return (
    <Layout>
    <div className="max-w-5xl mx-auto px-4 py-12 font-mono text-gray-700">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-700">
        About UltaAuction
      </h1>

      <section className="space-y-6">
        <p className="text-lg">
          <strong>UltaAuction</strong> is a unique auction platform that offers a twist to traditional bidding systems. Instead of the highest bid, the **lowest unique bid** wins the auction. This adds strategy, excitement, and fairness to the process—making every auction thrilling and competitive.
        </p>

        <p className="text-lg">
          Our mission is to create a transparent and engaging auction experience for everyone. Whether you’re a buyer looking for great deals or a seller aiming to reach more customers, UltaAuction is built to serve both sides efficiently.
        </p>

        <p className="text-lg">
          The platform is powered by the modern <strong>MERN Stack</strong> (MongoDB, Express, React, Node.js) and is designed with scalability, speed, and user experience in mind.
        </p>

        <div className="bg-blue-50 p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold mb-2 text-blue-700">
            Key Features:
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Lowest unique bid wins</li>
            <li>Live auction tracking</li>
            <li>Simple user interface</li>
            <li>Role-based access (Admin/User)</li>
            <li>Cloud image uploads</li>
            <li>Secure authentication</li>
          </ul>
        </div>

        <p className="text-lg">
          UltaAuction is more than just a project—it's a step towards innovative solutions in e-commerce and auction systems. We're constantly improving, and your feedback drives our development forward.
        </p>
      </section>
    </div>
    </Layout>
  );
}

export default About;
