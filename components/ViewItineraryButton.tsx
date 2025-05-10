'use client';
import { useState } from 'react';

export default function ViewItineraryButton({
  location,
  days,
}: {
  location: string;
  days: number;
}) {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [itinerary, setItinerary] = useState('');
  const [error, setError] = useState('');

  const handleGenerate = async () => {
    setVisible(true);
    setLoading(true);
    setError('');
    setItinerary('');

    try {
      const res = await fetch('/api/itinerary', {
        method: 'POST',
        body: JSON.stringify({ location, days }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || 'Unknown error');
      }

      const data = await res.json();
      setItinerary(data.itinerary);
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
      console.error('Itinerary Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-2">
      <button
        onClick={handleGenerate}
        className="text-sm text-blue-600 underline hover:text-blue-800"
      >
        View Suggested Itinerary
      </button>

      {visible && (
        <div className="mt-2 text-sm bg-gray-50 p-4 rounded whitespace-pre-wrap">
          {loading && 'Generating your itinerary...'}
          {error && <div className="text-red-600">❌ {error}</div>}
          {!loading && !error && itinerary}
        </div>
      )}
    </div>
  );
}
