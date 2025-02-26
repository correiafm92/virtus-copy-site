
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { createClient } from '@supabase/supabase-js';
import { toast } from "sonner";

type FormData = {
  email: string;
  hasBusinesss: "yes" | "no";
  businessInstagram?: string;
};

// Criando o cliente Supabase
const supabase = createClient(
  'https://exntispzyiegclwrvoqt.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV4bnRpc3B6eWllZ2Nsd3J2b3F0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA3OTc2NDQsImV4cCI6MjAyNjM3MzY0NH0.wGuFt35kQWo7lz5ziWNq95W8s8ukr3qhOcU-5UAp3HE'
);

const Index = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, watch, formState: { isValid } } = useForm<FormData>({
    mode: "onChange"
  });

  const hasBusinesss = watch("hasBusinesss");
  const showInstagramField = hasBusinesss === "yes";

  const onSubmit = async (data: FormData) => {
    try {
      setIsSubmitting(true);

      const { error } = await supabase
        .from('leads')
        .insert([
          {
            'email (text)': data.email,
            has_business: data.hasBusinesss === 'yes',
            business_instagram: data.hasBusinesss === 'yes' ? data.businessInstagram : null,
            created_at: new Date().toISOString()
          }
        ]);

      if (error) {
        console.error('Erro ao salvar:', error);
        throw new Error('Falha ao salvar os dados');
      }

      navigate("/loading");
    } catch (error) {
      console.error(error);
      toast.error("Erro ao salvar seus dados. Por favor, tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-8 tracking-tight [text-shadow:0_4px_8px_rgba(255,255,255,0.2)]" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.1)" }}>
        USE A FILOSOFIA AO SEU FAVOR PARA ESCALAR SUAS VENDAS
      </h1>
      
      <p className="text-gray-400 text-lg md:text-xl mb-8 text-center">
        Falta pouco para receber seu livro!
      </p>

      <div className="relative w-64 h-64 mb-12">
        <img
          src="https://i.postimg.cc/fWcBvRn7/A-vibrant-book-cover-design-for-a-philosophy-book-titled-Logica-showcasing-a-silhouetted-portrait-o.png"
          alt="Capa do livro"
          className="w-full h-full rounded-lg object-cover shadow-xl"
        />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md space-y-6">
        <div className="space-y-2">
          <label htmlFor="email" className="block text-white text-sm font-medium">
            Email
          </label>
          <input
            {...register("email", { required: true })}
            type="email"
            className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            placeholder="seu@email.com"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-white text-sm font-medium">
            Você tem um negócio?
          </label>
          <div className="flex gap-4">
            <label className="flex items-center space-x-2">
              <input
                {...register("hasBusinesss", { required: true })}
                type="radio"
                value="yes"
                className="w-4 h-4 text-yellow-500 border-gray-700 focus:ring-yellow-500"
              />
              <span className="text-white">Sim</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                {...register("hasBusinesss", { required: true })}
                type="radio"
                value="no"
                className="w-4 h-4 text-yellow-500 border-gray-700 focus:ring-yellow-500"
              />
              <span className="text-white">Não</span>
            </label>
          </div>
        </div>

        {showInstagramField && (
          <div className="space-y-2">
            <label htmlFor="businessInstagram" className="block text-white text-sm font-medium">
              Qual é o @ do seu negócio?
            </label>
            <input
              {...register("businessInstagram", { required: showInstagramField })}
              type="text"
              className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              placeholder="@seunegocio"
            />
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting || !isValid}
          className={`w-full bg-yellow-500 text-black font-bold py-4 px-8 rounded-xl transform transition-all duration-300
            ${!isSubmitting && isValid ? 'hover:bg-yellow-400 hover:scale-105 active:scale-95' : 'opacity-50 cursor-not-allowed'}
            shadow-[0_8px_16px_rgba(245,158,11,0.3)]`}
        >
          {isSubmitting ? 'Enviando...' : 'Receber livro'}
        </button>
      </form>
    </div>
  );
};

export default Index;
