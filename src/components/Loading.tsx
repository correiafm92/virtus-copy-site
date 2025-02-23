
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Loading = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "https://drive.google.com/file/d/1IiOZrxfWkUT_D_EQ0yUU2lhyEfGEpXGz/view?usp=drive_link";
    }, 7000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
      <div className="text-white text-2xl mb-8 animate-fade-in">
        Preparando seu conteúdo...
      </div>
      <div className="w-64 h-1 bg-neutral-800 rounded-full overflow-hidden">
        <div className="h-full bg-yellow-500 rounded-full animate-loader" />
      </div>
    </div>
  );
};

export default Loading;
