import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Toaster } from "./components/ui/sonner";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="relative flex flex-col text-white overflow-hidden min-h-screen bg-slate-950 from-slate-900 to-slate-950">
      <Navbar />
      <div className="px-3 sm:px-10 md:px-15 lg:px-20 pb-10 mt-10">
        <Home />
      </div>
      <Toaster />
      <Footer />
    </div>
  );
};

export default App;
