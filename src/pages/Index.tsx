
import { useState, useEffect } from "react";

const Index = () => {
  const [isClicking, setIsClicking] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    hours: 7,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        // Calculate new time
        let newHours = prevTime.hours;
        let newMinutes = prevTime.minutes;
        let newSeconds = prevTime.seconds;

        if (newSeconds > 0) {
          newSeconds--;
        } else {
          if (newMinutes > 0) {
            newMinutes--;
            newSeconds = 59;
          } else {
            if (newHours > 0) {
              newHours--;
              newMinutes = 59;
              newSeconds = 59;
            } else {
              // Timer reached zero
              clearInterval(timer);
            }
          }
        }

        return {
          hours: newHours,
          minutes: newMinutes,
          seconds: newSeconds
        };
      });
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(timer);
  }, []);

  const handleClick = () => {
    setIsClicking(true);
    
    // Track button click with Meta Pixel
    if (window.fbq) {
      window.fbq('track', 'Lead');
    }
    
    window.location.href = "https://form.respondi.app/kPZ73POt";
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-8 tracking-tight [text-shadow:0_4px_8px_rgba(255,255,255,0.2)]" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.1)" }}>
        USE A FILOSOFIA AO SEU FAVOR PARA ESCALAR SUAS VENDAS
      </h1>
      
      <p className="text-gray-400 text-lg md:text-xl mb-8 text-center">
        Mais de 2 mil anos de conhecimento em um só video! Aperte o play no video
      </p>

      <div className="relative w-full max-w-3xl mb-12 aspect-video">
        <iframe 
          src="https://www.youtube.com/embed/iqsZuTRzT3o?si=AiHFwZRg54EoLfl7" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowFullScreen
          className="w-full h-full rounded-lg shadow-xl"
        ></iframe>
      </div>

      {/* Countdown timer */}
      <div className="mb-8">
        <div className="flex items-center justify-center space-x-4 text-white">
          <div className="text-center">
            <div className="text-3xl md:text-5xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</div>
            <div className="text-xs uppercase text-gray-400">horas</div>
          </div>
          <div className="text-2xl md:text-4xl font-bold">:</div>
          <div className="text-center">
            <div className="text-3xl md:text-5xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</div>
            <div className="text-xs uppercase text-gray-400">minutos</div>
          </div>
          <div className="text-2xl md:text-4xl font-bold">:</div>
          <div className="text-center">
            <div className="text-3xl md:text-5xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</div>
            <div className="text-xs uppercase text-gray-400">segundos</div>
          </div>
        </div>
        <p className="text-center text-yellow-500 mt-2 font-medium">Para encerrar a oferta</p>
      </div>

      <button
        onClick={handleClick}
        disabled={isClicking}
        className={`w-full max-w-md bg-yellow-500 text-black font-bold py-4 px-8 rounded-xl transform transition-all duration-300
          ${!isClicking ? 'hover:bg-yellow-400 hover:scale-105 active:scale-95' : 'opacity-50 cursor-not-allowed'}
          shadow-[0_8px_16px_rgba(245,158,11,0.3)]`}
      >
        {isClicking ? 'Redirecionando...' : 'Diagnóstico gratuito'}
      </button>
    </div>
  );
};

export default Index;
