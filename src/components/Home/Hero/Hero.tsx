import React from "react";

const Hero: React.FC = () => {
  const scrollToTweetGenerator = () => {
    const element = document.getElementById("tweet-generator");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col items-center space-y-8">
      {/* Hero Heading */}
      <h2 className="lg:text-7xl text-5xl sm:text-6xl font-semibold text-center text-white">
        Generate <span className="text-sky-400 glow">Tweets</span> With <br />
        <span className="text-sky-400 glow">Human</span> Tone In Seconds
      </h2>

      {/* Dark-Themed Tweet-like Component */}
      <div className="w-full max-w-lg p-6 bg-slate-900 shadow-lg rounded-lg border border-slate-700">
        <div className="flex items-center space-x-4">
          {/* Profile Picture */}
          <div className="w-12 h-12 rounded-full bg-neutral-600"></div>
          {/* User Info */}
          <div>
            <p className="font-semibold text-white">AI Tweet Generator</p>
            <p className="text-sm text-neutral-400">@AITweetGen</p>
          </div>
        </div>
        {/* Tweet Content */}
        <p className="mt-4 text-neutral-300">
          "Crafting tweets with a human touch has never been easier. Try our AI-powered tweet generator today!"
        </p>
        {/* Tweet Actions */}
        <div className="mt-4 flex justify-between text-neutral-500 text-sm">
          <span>10:45 AM · Apr 5, 2025</span>
          <div className="flex space-x-4">
            <span>💬 12</span>
            <span>🔁 34</span>
            <span>❤️ 56</span>
          </div>
        </div>
      </div>

      {/* Call-to-Action Button */}
      <button
        className="py-3 px-10 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform"
        onClick={scrollToTweetGenerator}
      >
        Try It Now
      </button>
    </div>
  );
};

export default Hero;