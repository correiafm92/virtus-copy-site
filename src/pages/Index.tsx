
import { useState } from "react";

const Index = () => {
  const [isClicking, setIsClicking] = useState(false);

  const handleClick = () => {
    setIsClicking(true);
    
    // Track button click with Meta Pixel
    if (window.fbq) {
      window.fbq('track', 'Lead');
    }
    
    window.location.href = "https://drive.google.com/file/d/1HXaWVWHJNIRgLv0uxL5BmDo0CfWV6IYz/view?usp=drive_link";
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-8 tracking-tight [text-shadow:0_4px_8px_rgba(255,255,255,0.2)]" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.1)" }}>
        USE A FILOSOFIA AO SEU FAVOR PARA ESCALAR SUAS VENDAS
      </h1>
      
      <p className="text-gray-400 text-lg md:text-xl mb-8 text-center">
        Clique abaixo para receber seu livro gratuito!
      </p>

      <div className="relative w-64 h-64 mb-12">
        <img
          src="https://i.postimg.cc/fWcBvRn7/A-vibrant-book-cover-design-for-a-philosophy-book-titled-Logica-showcasing-a-silhouetted-portrait-o.png"
          alt="Capa do livro"
          className="w-full h-full rounded-lg object-cover shadow-xl"
        />
      </div>

      <button
        onClick={handleClick}
        disabled={isClicking}
        className={`w-full max-w-md bg-yellow-500 text-black font-bold py-4 px-8 rounded-xl transform transition-all duration-300
          ${!isClicking ? 'hover:bg-yellow-400 hover:scale-105 active:scale-95' : 'opacity-50 cursor-not-allowed'}
          shadow-[0_8px_16px_rgba(245,158,11,0.3)]`}
      >
        {isClicking ? 'Redirecionando...' : 'Receber livro'}
      </button>
    </div>
  );
};

export default Index;
