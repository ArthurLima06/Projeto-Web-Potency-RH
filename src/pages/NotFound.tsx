import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/layout";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const { language } = useLanguage();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="min-h-[calc(100vh-200px)] flex items-center justify-center py-12 px-4">
        <div className="text-center">
          <div className="text-8xl md:text-9xl font-display font-bold text-primary mb-4">
            404
          </div>
          <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
            {language === 'pt' ? 'Página não encontrada' : 'Page not found'}
          </h1>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            {language === 'pt'
              ? 'A página que você está procurando não existe ou foi movida.'
              : "The page you're looking for doesn't exist or has been moved."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button className="bg-gradient-orange hover:opacity-90">
                <Home className="w-4 h-4 mr-2" />
                {language === 'pt' ? 'Voltar ao Início' : 'Back to Home'}
              </Button>
            </Link>
            <Button variant="outline" onClick={() => window.history.back()}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              {language === 'pt' ? 'Voltar' : 'Go Back'}
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
