import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Briefcase, ArrowRight } from 'lucide-react';
import { mockJobs, contractTypeLabels } from '@/data/mockJobs';

export const JobsPreviewSection = () => {
  const { language, t } = useLanguage();

  const featuredJobs = mockJobs.filter((job) => job.featured).slice(0, 4);

  return (
    <section className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="inline-block text-primary font-semibold mb-4">
              {t('jobs.featured')}
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              {t('jobs.title')}
            </h2>
          </div>
          <Link to="/jobs">
            <Button variant="outline" className="group">
              {t('jobs.viewAll')}
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredJobs.map((job) => (
            <div
              key={job.id}
              className="bg-background rounded-2xl border border-border p-6 hover:border-primary/50 hover:shadow-lg transition-all group"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                    {job.title[language]}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-4 h-4" />
                      {contractTypeLabels[language][job.contractType]}
                    </span>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                  {job.featured && (language === 'pt' ? 'Destaque' : 'Featured')}
                </Badge>
              </div>

              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {job.description[language]}
              </p>

              {job.salary && (
                <div className="text-sm font-medium text-foreground mb-4">
                  R$ {job.salary.min?.toLocaleString()} - R$ {job.salary.max?.toLocaleString()}
                </div>
              )}

              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">
                  {new Date(job.postedAt).toLocaleDateString(language === 'pt' ? 'pt-BR' : 'en-US')}
                </span>
                <Link to={`/jobs?id=${job.id}`}>
                  <Button size="sm" className="bg-gradient-orange hover:opacity-90">
                    {t('jobs.apply')}
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
