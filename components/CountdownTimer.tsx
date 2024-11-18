import { useEffect, useState } from 'react';

interface TimeLeft {
  dias: number;
  horas: number;
  minutos: number;
  segundos: number;
}

interface CountdownTimerProps {
  targetDate: Date;
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ dias: 0, horas: 0, minutos: 0, segundos: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
          horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutos: Math.floor((difference / 1000 / 60) % 60),
          segundos: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex justify-center gap-4 sm:gap-8 text-white mt-8">
      {Object.entries(timeLeft).map(([key, value]) => (
        <div key={key} className="flex flex-col items-center">
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 w-20 h-20 flex items-center justify-center mb-2 border border-rose-300/20 shadow-lg transform hover:scale-105 transition-transform">
            <span className="text-3xl font-bold animate-pulse">
              {value.toString().padStart(2, '0')}
            </span>
          </div>
          <span className="text-sm font-light capitalize">{key}</span>
        </div>
      ))}
    </div>
  );
}