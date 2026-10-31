import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.warn("404: rota inexistente:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-2 text-5xl font-bold">404</h1>
        <p className="mb-6 text-lg text-muted-foreground">Página não encontrada</p>
        <Link to="/" className="text-primary underline-offset-4 hover:underline">
          Voltar para o início
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
