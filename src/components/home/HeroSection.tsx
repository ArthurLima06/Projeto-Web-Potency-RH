import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Briefcase, TrendingUp } from 'lucide-react';

export const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero">
        {/* Geometric Shapes */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl" />
        
        {/* Diagonal shapes */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent transform skew-x-12" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              <span className="text-sm font-medium">13+ {t('about.stats.years')}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
              {t('hero.title')}
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-xl">
              {t('hero.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/jobs">
                <Button size="lg" className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 font-semibold group">
                  {t('hero.cta.jobs')}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-white text-white hover:bg-white/10"
                >
                  {t('hero.cta.contact')}
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20">
              <div>
                <div className="flex items-center gap-2 text-white/60 mb-1">
                  <Users className="w-4 h-4" />
                </div>
                <div className="text-2xl md:text-3xl font-bold">500+</div>
                <div className="text-sm text-white/60">{t('about.stats.clients')}</div>
              </div>
              <div>
                <div className="flex items-center gap-2 text-white/60 mb-1">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div className="text-2xl md:text-3xl font-bold">10k+</div>
                <div className="text-sm text-white/60">{t('about.stats.placements')}</div>
              </div>
              <div>
                <div className="flex items-center gap-2 text-white/60 mb-1">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div className="text-2xl md:text-3xl font-bold">98%</div>
                <div className="text-sm text-white/60">{t('about.stats.satisfaction')}</div>
              </div>
            </div>
          </div>

          {/* Hero Image/Illustration */}
          <div className="hidden lg:block relative">
            <div className="relative">
              {/* Floating cards */}
              <div className="absolute -top-4 -left-4 glass-card rounded-2xl p-4 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-charcoal">+150</div>
                    <div className="text-xs text-muted-foreground">Vagas Ativas</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 glass-card rounded-2xl p-4 animate-float" style={{ animationDelay: '2s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-charcoal">98%</div>
                    <div className="text-xs text-muted-foreground">Satisfação</div>
                  </div>
                </div>
              </div>

              {/* Main visual element */}
              <div className="w-full aspect-square bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-6">
                    <Briefcase className="w-16 h-16 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Potency RH</h3>
                  <p className="text-white/60">Conectando talentos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
