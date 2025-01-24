import React, { useState } from "react";
import { Hexagon, Compass, Codepen, Framer, Chrome, Send } from "lucide-react";

const QuantumAIPlatform = () => {
  const [activeVisualization, setActiveVisualization] = useState("quantum");

  const visualizations = {
    quantum: {
      title: "Quantum Neural Mesh",
      description:
        "Hyperdimensional computational networks transcending classical computing paradigms through probabilistic quantum entanglement algorithms.",
      color: "bg-gradient-to-r from-indigo-600 to-pink-500",
    },
    decentralized: {
      title: "Distributed Intelligence Grid",
      description:
        "Self-evolving autonomous systems creating adaptive cognitive architectures through decentralized machine learning protocols.",
      color: "bg-gradient-to-r from-emerald-600 to-teal-400",
    },
    cryptographic: {
      title: "Cryptographic Intelligence Protocol",
      description:
        "Advanced encryption frameworks integrating neural network predictive modeling with blockchain-verified computational trust mechanisms.",
      color: "bg-gradient-to-r from-amber-500 to-orange-600",
    },
  };

  return (
    <div className="min-h-screen bg-[#020817] text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black/60 to-black/80 opacity-75"></div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <div className="flex justify-center items-center mb-6">
            <Hexagon className="w-16 h-16 text-cyan-400 mr-4" />
            <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
              Quantum AI Nexus
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pioneering computational intelligence through transformative
            technological convergence
          </p>
        </header>

        <section className="mb-16">
          <div className="grid md:grid-cols-3 gap-6">
            {Object.keys(visualizations).map((key) => (
              <div
                key={key}
                onClick={() => setActiveVisualization(key)}
                className={`p-6 rounded-2xl cursor-pointer transition-all transform hover:scale-105 ${
                  activeVisualization === key
                    ? visualizations[key].color + " scale-105 shadow-2xl"
                    : "bg-gray-800/50 hover:bg-gray-800/70"
                }`}
              >
                <h3 className="text-2xl font-bold mb-3">
                  {visualizations[key].title}
                </h3>
                <p className="text-gray-200">
                  {visualizations[key].description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className="text-center space-y-8">
          <div className="flex justify-center space-x-8">
            <Compass className="w-12 h-12 text-blue-400 animate-pulse" />
            <Codepen className="w-12 h-12 text-green-400 animate-spin" />
            <Framer className="w-12 h-12 text-purple-400 animate-bounce" />
          </div>

          <button className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-4 px-8 rounded-full text-xl flex items-center justify-center mx-auto space-x-3 group">
            <span>Enter Quantum Realm</span>
            <Send className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <footer className="text-center text-gray-500 mt-16 text-sm opacity-50">
          © 2024 Quantum AI Nexus Technologies. All Dimensional Rights Reserved.
        </footer>
      </div>
    </div>
  );
};

export default QuantumAIPlatform;
