import { tones } from "../data/mockdata.js";
import ToneCard from "../components/ToneCard";

export default function BrowseTones({ activeTone, setActiveTone }) {
  return (
    <div className="p-6">
      <h2 className="text-xl mb-4">Browse Tones</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tones.map((tone) => (
          <ToneCard
            key={tone.id}
            tone={tone}
            isActive={activeTone?.id === tone.id}
            onSubscribe={() => setActiveTone(tone)}
          />
        ))}
      </div>
    </div>
  );
}
