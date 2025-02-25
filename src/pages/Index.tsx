
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";

type FormData = {
  email: string;
  instagram: string;
  hasBusinesss: string;
};

const Index = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const { register, handleSubmit, watch } = useForm<FormData>();

  const watchAllFields = watch();
  
  const calculateProgress = () => {
    const fields = [watchAllFields.email, watchAllFields.instagram, watchAllFields.hasBusinesss];
    const filledFields = fields.filter(Boolean).length;
    return (filledFields / 3) * 100;
  };

  const handleClick = () => {
    navigate("/loading");
  };

  const onSubmit = (data: FormData) => {
    console.log(data);
    setProgress(100);
  };

  // Update progress when form fields change
  React.useEffect(() => {
    setProgress(calculateProgress());
  }, [watchAllFields]);

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-8 animate-fade-up opacity-0 [animation-delay:300ms] tracking-tight [text-shadow:0_4px_8px_rgba(255,255,255,0.2)]" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.1)" }}>
        USE A FILOSOFIA AO SEU FAVOR PARA ESCALAR SUAS VENDAS
      </h1>
      
      <p className="text-gray-400 text-lg md:text-xl mb-8 text-center animate-fade-up opacity-0 [animation-delay:600ms]">
        Falta pouco para receber seu livro!
      </p>

      <div className="relative w-64 h-64 mb-12 animate-fade-up opacity-0 [animation-delay:900ms]">
        {/* Circular Progress */}
        <svg className="absolute w-full h-full -rotate-90">
          <circle
            cx="50%"
            cy="50%"
            r="48%"
            stroke="rgba(234, 179, 8, 0.2)"
            strokeWidth="8"
            fill="none"
            className="transition-all duration-300"
          />
          <circle
            cx="50%"
            cy="50%"
            r="48%"
            stroke="#EAB308"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            className="transition-all duration-300"
            style={{
              strokeDasharray: `${2 * Math.PI * 48}%`,
              strokeDashoffset: `${2 * Math.PI * 48 * (1 - progress / 100)}%`,
            }}
          />
        </svg>
        
        {/* Book Image */}
        <img
          src="https://i.postimg.cc/fWcBvRn7/A-vibrant-book-cover-design-for-a-philosophy-book-titled-Logica-showcasing-a-silhouetted-portrait-o.png"
          alt="Capa do livro"
          className="absolute inset-4 rounded-lg object-cover"
        />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md space-y-6 animate-fade-up opacity-0 [animation-delay:1200ms]">
        <div className="space-y-2">
          <label htmlFor="email" className="block text-white text-sm font-medium">Email</label>
          <input
            {...register("email")}
            type="email"
            id="email"
            required
            className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            placeholder="seu@email.com"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="instagram" className="block text-white text-sm font-medium">Instagram Profissional</label>
          <input
            {...register("instagram")}
            type="text"
            id="instagram"
            required
            className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            placeholder="@seuperfil"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-white text-sm font-medium mb-2">Você tem um negócio?</label>
          <div className="flex gap-4">
            <label className="flex items-center space-x-2">
              <input
                {...register("hasBusinesss")}
                type="radio"
                value="yes"
                className="w-4 h-4 text-yellow-500 border-gray-700 focus:ring-yellow-500"
              />
              <span className="text-white">Sim</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                {...register("hasBusinesss")}
                type="radio"
                value="no"
                className="w-4 h-4 text-yellow-500 border-gray-700 focus:ring-yellow-500"
              />
              <span className="text-white">Não</span>
            </label>
          </div>
        </div>

        <button
          type="button"
          onClick={handleClick}
          disabled={progress < 100}
          className={`w-full bg-yellow-500 text-black font-bold py-4 px-8 rounded-xl transform transition-all duration-300 ${
            progress === 100 ? 'hover:bg-yellow-400 hover:scale-105 active:scale-95' : 'opacity-50 cursor-not-allowed'
          } shadow-[0_8px_16px_rgba(245,158,11,0.3)]`}
        >
          Saber mais
        </button>
      </form>
    </div>
  );
};

export default Index;
