import React, { useState } from "react";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { toast } from "sonner";

const tones = [
  'funny',
  'serious',
  'motivational',
  'viral',
  'informative',
  'sarcastic',
  'inspirational',
  'casual',
  'formal',
  'empathetic'
] as const;

const TweetGenerator: React.FC = () => {
  const [idea, setIdea] = useState("");
  const [tone, setTone] = useState<(typeof tones)[number]>("funny");
  const [tweet, setTweet] = useState("");
  const [loading, setLoading] = useState(false);

  const generateTweet = async () => {
    if (!idea.trim()) return;
    setLoading(true);

    const prompt = `Write a short and engaging tweet (max 280 characters) in a ${tone} tone about: "${idea}". Use simple, natural language that sounds like a real person. Make it easy to understand and relatable. Only give the tweet, nothing else.`;
    
    try {
      const res = await fetch("https://api.cohere.ai/v1/generate", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_COHERE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "command-light",
          prompt,
          max_tokens: 100,
          temperature: 0.9,
          stop_sequences: ["--"],
        }),
      });

      const data = await res.json();
      setTweet(data.generations?.[0]?.text.trim() || "No tweet generated.");
      toast("Tweet generated successfully!")
    } catch (error) {
      console.error("Error generating tweet:", error);
      setTweet("Failed to generate tweet. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(tweet);
    toast("Tweet copied to clipboard!");
  };

  const handleShareToX = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweet)}`;
    window.open(url, "_blank");
  };

  return (
    <div
      id="tweet-generator"
      className="flex flex-col items-center space-y-6 p-6 bg-slate-900 rounded-lg shadow-lg border border-slate-700 max-w-xl mx-auto"
    >
      {/* Textarea for User Idea */}
      <textarea
        className="w-full p-4 text-sm text-white bg-slate-800 rounded-lg border border-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-500"
        placeholder="Enter your idea here..."
        value={idea}
        onChange={(e) => setIdea(e.target.value)}
        rows={4}
      ></textarea>

      {/* Tone Selection */}
      <div className="w-full">
        <Select value={tone} onValueChange={(value) => setTone(value as (typeof tones)[number])}>
          <SelectTrigger className="w-full bg-slate-800 text-white border border-slate-600 rounded-lg">
            <SelectValue placeholder="Select a tone" />
          </SelectTrigger>
          <SelectContent className="bg-slate-900 border-slate-800">
            {tones.map((toneOption) => (
              <SelectItem key={toneOption} value={toneOption} className="text-white">
                {toneOption.charAt(0).toUpperCase() + toneOption.slice(1)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Generate Button */}
      <button
        className="w-full py-3 bg-sky-600 text-white font-semibold rounded-lg shadow-md hover:bg-sky-500 transition"
        onClick={generateTweet}
        disabled={loading}
      >
        {loading ? "Generating..." : "Generate Tweet"}
      </button>

      {/* Preview Section */}
      {tweet && (
        <div className="w-full p-4 bg-slate-800 rounded-lg border border-slate-600">
          <p className="text-neutral-300">{tweet}</p>
        </div>
      )}

      {/* Action Buttons */}
      {tweet && (
        <div className="flex space-x-4">
          <button
            className="px-4 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-500 transition"
            onClick={handleCopy}
          >
            Copy
          </button>
          <button
            className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-500 transition"
            onClick={handleShareToX}
          >
            Share to X
          </button>
        </div>
      )}
    </div>
  );
};

export default TweetGenerator;
