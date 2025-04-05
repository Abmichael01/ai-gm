import Hero from "@/components/Home/Hero/Hero";
import TweetGenerator from "@/components/Home/TweetGenerator/TweetGenerator";
import React from "react";

const Home: React.FC = () => {
  return (
    <div className="space-y-12">
      <Hero />
      <TweetGenerator />
    </div>
  );
};

export default Home;