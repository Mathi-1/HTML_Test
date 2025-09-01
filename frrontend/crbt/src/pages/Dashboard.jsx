export default function Dashboard({ user, activeTone }) {
  if (!user) {
    return <p className="p-6">Please login to view dashboard.</p>;
  }

  return (
    <div className="p-6">
      <h2 className="text-xl mb-4">Dashboard</h2>
      <p><strong>Mobile:</strong> {user.mobile}</p>
      {activeTone ? (
        <p><strong>Active Tone:</strong> {activeTone.icon} {activeTone.name}</p>
      ) : (
        <p>No active tone selected.</p>
      )}
    </div>
  );
}
