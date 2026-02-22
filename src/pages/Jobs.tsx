import { useState, useMemo } from 'react';
import { Layout } from '@/components/layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Search, MapPin, Briefcase, Filter, X } from 'lucide-react';
import { mockJobs, contractTypeLabels, categories, locations, Job } from '@/data/mockJobs';

const Jobs = () => {
  const { language, t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredJobs = useMemo(() => {
    return mockJobs.filter((job) => {
      const matchesSearch =
        job.title[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.description[language].toLowerCase().includes(searchQuery.toLowerCase());

      const matchesLocation =
        selectedLocation === 'all' || job.location === selectedLocation;

      const matchesType =
        selectedType === 'all' || job.contractType === selectedType;

      const matchesCategory =
        selectedCategory === 'all' || job.category === selectedCategory;

      return matchesSearch && matchesLocation && matchesType && matchesCategory;
    });
  }, [searchQuery, selectedLocation, selectedType, selectedCategory, language]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedLocation('all');
    setSelectedType('all');
    setSelectedCategory('all');
  };

  const hasActiveFilters =
    searchQuery || selectedLocation !== 'all' || selectedType !== 'all' || selectedCategory !== 'all';

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-3xl md:text-5xl font-display font-bold mb-4">
            {t('jobs.title')}
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            {t('jobs.subtitle')}
          </p>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="py-8 bg-background border-b border-border sticky top-16 md:top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder={t('jobs.search')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-3">
              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger className="w-40">
                  <MapPin className="w-4 h-4 mr-2" />
                  <SelectValue placeholder={t('jobs.filter.location')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{language === 'pt' ? 'Todas' : 'All'}</SelectItem>
                  {locations.map((loc) => (
                    <SelectItem key={loc} value={loc}>
                      {loc}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="w-40">
                  <Briefcase className="w-4 h-4 mr-2" />
                  <SelectValue placeholder={t('jobs.filter.type')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{language === 'pt' ? 'Todos' : 'All'}</SelectItem>
                  {Object.entries(contractTypeLabels[language]).map(([key, label]) => (
                    <SelectItem key={key} value={key}>
                      {label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-44">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder={t('jobs.filter.category')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{language === 'pt' ? 'Todas' : 'All'}</SelectItem>
                  {Object.entries(categories[language]).map(([key, label]) => (
                    <SelectItem key={key} value={key}>
                      {label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {hasActiveFilters && (
                <Button variant="ghost" size="icon" onClick={clearFilters}>
                  <X className="w-4 h-4" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Jobs List */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          {/* Results Count */}
          <div className="mb-6 text-sm text-muted-foreground">
            {filteredJobs.length} {language === 'pt' ? 'vagas encontradas' : 'jobs found'}
          </div>

          {filteredJobs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredJobs.map((job) => (
                <JobCard key={job.id} job={job} language={language} t={t} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">{t('jobs.noResults')}</p>
              <Button variant="link" onClick={clearFilters} className="mt-2">
                {language === 'pt' ? 'Limpar filtros' : 'Clear filters'}
              </Button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

interface JobCardProps {
  job: Job;
  language: 'pt' | 'en';
  t: (key: string) => string;
}

const JobCard = ({ job, language, t }: JobCardProps) => {
  return (
    <div className="bg-background rounded-2xl border border-border p-6 hover:border-primary/50 hover:shadow-lg transition-all group">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
            {job.title[language]}
          </h3>
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {job.location}
            </span>
          </div>
        </div>
        <Badge variant="secondary" className="bg-primary/10 text-primary">
          {contractTypeLabels[language][job.contractType]}
        </Badge>
      </div>

      <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
        {job.description[language]}
      </p>

      {job.salary && (
        <div className="text-sm font-medium text-foreground mb-4">
          R$ {job.salary.min?.toLocaleString()} - R$ {job.salary.max?.toLocaleString()}
        </div>
      )}

      <div className="flex flex-wrap gap-2 mb-4">
        {job.requirements[language].slice(0, 2).map((req, index) => (
          <Badge key={index} variant="outline" className="text-xs">
            {req}
          </Badge>
        ))}
        {job.requirements[language].length > 2 && (
          <Badge variant="outline" className="text-xs">
            +{job.requirements[language].length - 2}
          </Badge>
        )}
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-border">
        <span className="text-xs text-muted-foreground">
          {new Date(job.postedAt).toLocaleDateString(language === 'pt' ? 'pt-BR' : 'en-US')}
        </span>
        <Button size="sm" className="bg-gradient-orange hover:opacity-90">
          {t('jobs.apply')}
        </Button>
      </div>
    </div>
  );
};

export default Jobs;
