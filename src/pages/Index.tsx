
import { useState, useEffect } from "react";

const Index = () => {
  const [isClicking, setIsClicking] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    hours: 7,
    minutes: 0,
    seconds: 0
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Animation trigger
    const animationTimeout = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    // Timer logic
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

    // Cleanup the intervals on component unmount
    return () => {
      clearInterval(timer);
      clearTimeout(animationTimeout);
    };
  }, []);

  const handleClick = () => {
    setIsClicking(true);
    
    // Track button click with Meta Pixel
    if (window.fbq) {
      window.fbq('track', 'Lead');
    }
    
    window.location.href = "https://form.typeform.com/to/AgikNJjy";
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      <h1 
        className={`text-4xl md:text-6xl font-bold text-white text-center mb-8 tracking-tight [text-shadow:0_4px_8px_rgba(255,255,255,0.2)] transition-all duration-1000 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 transform translate-y-6'}`} 
        style={{ WebkitTextStroke: "1px rgba(255,255,255,0.1)" }}
      >
        USE A FILOSOFIA AO SEU FAVOR PARA ESCALAR SUAS VENDAS
      </h1>
      
      <p 
        className={`text-gray-400 text-lg md:text-xl mb-8 text-center transition-all duration-1000 delay-300 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 transform translate-y-6'}`}
      >
        ‼️Se prepare: ao final deste vídeo, você não apenas entenderá o jogo, mas estará pronto para jogá-lo como um verdadeiro empresário(a)‼️
      </p>

      <div 
        className={`relative w-full max-w-3xl mb-12 aspect-video transition-all duration-1000 delay-500 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 transform translate-y-6'}`}
      >
        <iframe 
          src="https://www.youtube.com/embed/iqsZuTRzT3o?si=AiHFwZRg54EoLfl7" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowFullScreen
          className="w-full h-full rounded-lg shadow-xl"
        ></iframe>
      </div>

      <button
        onClick={handleClick}
        disabled={isClicking}
        className={`w-full max-w-md bg-yellow-500 text-black font-bold py-4 px-8 rounded-xl transform transition-all duration-1000 delay-700 ease-out
          ${!isClicking ? 'hover:bg-yellow-400 hover:scale-105 active:scale-95' : 'opacity-50 cursor-not-allowed'}
          shadow-[0_8px_16px_rgba(245,158,11,0.3)] ${isVisible ? 'opacity-100' : 'opacity-0 transform translate-y-6'}`}
      >
        {isClicking ? 'Redirecionando...' : 'Diagnóstico gratuito'}
      </button>

      {/* Countdown timer - now smaller and below the button */}
      <div className={`mt-8 transition-all duration-1000 delay-900 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 transform translate-y-6'}`}>
        <div className="flex items-center justify-center space-x-2 text-white">
          <div className="text-center">
            <div className="text-xl md:text-2xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</div>
            <div className="text-xs uppercase text-gray-400">h</div>
          </div>
          <div className="text-xl md:text-2xl font-bold">:</div>
          <div className="text-center">
            <div className="text-xl md:text-2xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</div>
            <div className="text-xs uppercase text-gray-400">m</div>
          </div>
          <div className="text-xl md:text-2xl font-bold">:</div>
          <div className="text-center">
            <div className="text-xl md:text-2xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</div>
            <div className="text-xs uppercase text-gray-400">s</div>
          </div>
        </div>
        <p className="text-center text-yellow-500 mt-1 text-sm font-medium">Para encerrar a oferta</p>
      </div>
    </div>
  );
};

export default Index;
