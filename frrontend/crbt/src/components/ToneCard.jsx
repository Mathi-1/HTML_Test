export default function ToneCard({ tone, isActive, onSubscribe }) {
  return (
    <div className="tone-card">
      <h3>{tone.icon} {tone.name}</h3>
      <p>{tone.category}</p>
      <button onClick={onSubscribe} disabled={isActive}>
        {isActive ? "Subscribed" : "Subscribe"}
      </button>
    </div>
  );
}

