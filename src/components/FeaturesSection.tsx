import { GameIcon, DownloadIcon, SearchIcon } from "./IconFeatures";

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="features-card">
            <GameIcon />
            <h4 className="text-xl font-semibold mb-3">RPG Games</h4>
            <p>Play exciting role-playing games with S-BOT.</p>
          </div>

          <div className="features-card">
            <DownloadIcon />
            <h4 className="text-xl font-semibold mb-3">Downloader</h4>
            <p>Download videos from TikTok, Instagram, and more.</p>
          </div>

          <div className="features-card">
            <SearchIcon />
            <h4 className="text-xl font-semibold mb-3">Search</h4>
            <p>Find Song, content, and much more quickly!</p>
          </div>
        </div>
      </div>
    </section>
  );
}
