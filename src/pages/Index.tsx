
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/loading");
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-8 animate-fade-up opacity-0 [animation-delay:300ms] tracking-tight [text-shadow:0_4px_8px_rgba(255,255,255,0.2)]" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.1)" }}>
        USE A FILOSOFIA AO SEU FAVOR PARA ESCALAR SUAS VENDAS
      </h1>
      
      <p className="text-gray-400 text-lg md:text-xl mb-8 text-center animate-fade-up opacity-0 [animation-delay:600ms]">
        Dê o play no vídeo para começar a assistir.
      </p>

      <div className="w-full max-w-2xl mb-12 rounded-2xl overflow-hidden shadow-2xl animate-fade-up opacity-0 [animation-delay:900ms]">
        <div className="relative pb-[56.25%] h-0">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/uIKUL1bzLn4"
            title="Virtus Copy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

      <button
        onClick={handleClick}
        className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 px-8 rounded-xl transform transition-all duration-300 hover:scale-105 animate-fade-up opacity-0 [animation-delay:1200ms] shadow-[0_8px_16px_rgba(245,158,11,0.3)] active:scale-95"
      >
        Saber mais
      </button>
    </div>
  );
};

export default Index;
