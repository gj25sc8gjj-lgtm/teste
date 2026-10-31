import { useState } from "react";
import { Sparkles, Globe2, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function Index() {
  const [likes, setLikes] = useState(0);

  const handleGreeting = () => {
    setLikes((prev) => prev + 1);
    toast.success("Boas-vindas!", {
      description: "Sua jornada com este novo projeto começou.",
    });
  };

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-background px-4 text-foreground selection:bg-primary/10 selection:text-primary">
      {/* Luz ambiente sutil no fundo */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-40 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl"
      />

      <section className="relative z-10 flex flex-col items-center text-center animate-fade-in max-w-lg">
        {/* Badge de status */}
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3.5 py-1 text-xs font-medium text-muted-foreground shadow-sm backdrop-blur-sm">
          <Globe2 className="h-3.5 w-3.5 text-primary animate-pulse" />
          <span>Primeiro passo</span>
        </div>

        {/* Título principal */}
        <h1 className="mt-6 text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl">
          Olá, mundo!
        </h1>

        {/* Subtítulo / descrição limpa */}
        <p className="mt-4 text-base text-muted-foreground sm:text-lg">
          Esta é a sua nova tela em branco. Pronta para se transformar em qualquer ideia ou aplicação que você imaginar.
        </p>

        {/* Ações interativas */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button
            size="lg"
            onClick={handleGreeting}
            className="group gap-2 shadow-sm transition-all hover:shadow"
          >
            <Sparkles className="h-4 w-4 transition-transform group-hover:rotate-12" />
            Dizer olá
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            onClick={() => {
              setLikes((prev) => prev + 1);
              toast("Obrigado pelo carinho!", {
                icon: <Heart className="h-4 w-4 text-red-500 fill-red-500" />,
              });
            }}
            className="gap-2"
          >
            <Heart className={`h-4 w-4 ${likes > 0 ? "text-red-500 fill-red-500" : "text-muted-foreground"}`} />
            <span>{likes > 0 ? `${likes} ${likes === 1 ? 'curtida' : 'curtidas'}` : "Curtir"}</span>
          </Button>
        </div>
      </section>

      {/* Rodapé discreto */}
      <footer className="absolute bottom-6 text-xs text-muted-foreground">
        Construído com React, TypeScript &amp; Tailwind CSS
      </footer>
    </main>
  );
}
