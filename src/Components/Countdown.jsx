
import React, { useEffect, useState } from "react";

export default function Countdown() {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-12-31T00:00:00");
    const difference = targetDate - new Date();

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-gray-900 text-white text-center">
      <h2 className="text-3xl md:text-5xl font-bold mb-6">Event Countdown</h2>
      <div className="flex justify-center space-x-6 text-2xl">
        {Object.keys(timeLeft).length ? (
          Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="flex flex-col items-center">
              <span className="text-4xl font-bold">{value}</span>
              <span className="uppercase text-sm">{unit}</span>
            </div>
          ))
        ) : (
          <p className="text-xl">The event has started!</p>
        )}
      </div>
    </section>
  );
}
