import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download } from "lucide-react";

export default function InstaFBDownloader() {
  const [link, setLink] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    if (!link) return;
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: link })
      });
      const data = await res.json();
      setResult(data);
    } catch (error) {
      alert("Failed to download the video. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
        InstaFB Video Downloader
      </h1>
      <p className="text-gray-300 mb-8 text-center max-w-xl">
        Download Facebook and Instagram videos in HD quality. Paste your video link below:
      </p>
      <Card className="w-full max-w-2xl bg-gray-800 shadow-2xl rounded-2xl">
        <CardContent className="p-6 flex flex-col md:flex-row gap-4">
          <Input
            className="flex-1 bg-gray-700 text-white"
            placeholder="Paste Facebook or Instagram video link..."
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
          <Button onClick={handleDownload} disabled={loading} className="bg-blue-600 hover:bg-blue-700 text-white">
            <Download className="mr-2" /> {loading ? "Loading..." : "Download"}
          </Button>
        </CardContent>
      </Card>

      {result && result.title && (
        <div className="mt-6 w-full max-w-2xl bg-gray-700 p-4 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-2">{result.title}</h2>
          {result.formats.map((format, idx) => (
            <a
              key={idx}
              href={format.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-blue-400 hover:underline text-sm my-1"
            >
              {format.quality} ({format.ext}) Download
            </a>
          ))}
        </div>
      )}

      <p className="mt-8 text-sm text-gray-500">This service is free and secure.</p>
    </div>
  );
}
