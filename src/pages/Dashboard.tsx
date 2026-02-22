import { Layout } from '@/components/layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import {
  User,
  FileText,
  Briefcase,
  Upload,
  CheckCircle2,
  Clock,
  Calendar,
  XCircle,
} from 'lucide-react';
import { mockUser, applicationStatusLabels } from '@/data/mockUser';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { language, t } = useLanguage();

  const statusIcons = {
    pending: Clock,
    review: Briefcase,
    interview: Calendar,
    accepted: CheckCircle2,
    rejected: XCircle,
  };

  const statusColors = {
    pending: 'bg-yellow-100 text-yellow-700',
    review: 'bg-blue-100 text-blue-700',
    interview: 'bg-purple-100 text-purple-700',
    accepted: 'bg-green-100 text-green-700',
    rejected: 'bg-red-100 text-red-700',
  };

  const profileCompleteness = 75; // Mock value

  return (
    <Layout>
      <section className="py-8 md:py-12 bg-secondary/30 min-h-screen">
        <div className="container mx-auto px-4">
          {/* Welcome Header */}
          <div className="mb-8">
            <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2">
              {t('dashboard.welcome')}, {mockUser.name.split(' ')[0]}! 👋
            </h1>
            <p className="text-muted-foreground">
              {language === 'pt'
                ? 'Gerencie seu perfil e acompanhe suas candidaturas'
                : 'Manage your profile and track your applications'}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Left Column - Profile & Resume */}
            <div className="space-y-6">
              {/* Profile Card */}
              <Card>
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <User className="w-5 h-5 text-primary" />
                    {t('dashboard.profile')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <User className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{mockUser.name}</h3>
                      <p className="text-sm text-muted-foreground">{mockUser.email}</p>
                    </div>
                  </div>

                  {mockUser.profile.headline && (
                    <p className="text-sm text-muted-foreground mb-4">
                      {mockUser.profile.headline}
                    </p>
                  )}

                  {/* Profile Completeness */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        {language === 'pt' ? 'Perfil completo' : 'Profile complete'}
                      </span>
                      <span className="font-medium">{profileCompleteness}%</span>
                    </div>
                    <Progress value={profileCompleteness} className="h-2" />
                  </div>

                  <Link to="/profile">
                    <Button variant="outline" className="w-full mt-4">
                      {language === 'pt' ? 'Editar Perfil' : 'Edit Profile'}
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Resume Card */}
              <Card>
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <FileText className="w-5 h-5 text-primary" />
                    {t('dashboard.resume')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {mockUser.resume ? (
                    <div className="flex items-center justify-between p-3 bg-secondary rounded-lg mb-4">
                      <div className="flex items-center gap-3">
                        <FileText className="w-8 h-8 text-primary" />
                        <div>
                          <p className="text-sm font-medium">{mockUser.resume.fileName}</p>
                          <p className="text-xs text-muted-foreground">
                            {new Date(mockUser.resume.uploadedAt).toLocaleDateString(
                              language === 'pt' ? 'pt-BR' : 'en-US'
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-6 border-2 border-dashed border-border rounded-lg mb-4">
                      <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">
                        {language === 'pt'
                          ? 'Nenhum currículo enviado'
                          : 'No resume uploaded'}
                      </p>
                    </div>
                  )}

                  <Button className="w-full bg-gradient-orange hover:opacity-90">
                    <Upload className="w-4 h-4 mr-2" />
                    {t('dashboard.upload')}
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Applications */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-primary" />
                    {t('dashboard.applications')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {mockUser.applications.length > 0 ? (
                    <div className="space-y-4">
                      {mockUser.applications.map((application) => {
                        const StatusIcon = statusIcons[application.status];
                        return (
                          <div
                            key={application.id}
                            className="flex items-center justify-between p-4 border border-border rounded-xl hover:border-primary/50 transition-colors"
                          >
                            <div className="flex items-center gap-4">
                              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                                <Briefcase className="w-6 h-6 text-primary" />
                              </div>
                              <div>
                                <h4 className="font-semibold text-foreground">
                                  {application.jobTitle[language]}
                                </h4>
                                <p className="text-sm text-muted-foreground">
                                  {application.company}
                                </p>
                                <p className="text-xs text-muted-foreground mt-1">
                                  {language === 'pt' ? 'Candidatura: ' : 'Applied: '}
                                  {new Date(application.appliedAt).toLocaleDateString(
                                    language === 'pt' ? 'pt-BR' : 'en-US'
                                  )}
                                </p>
                              </div>
                            </div>
                            <Badge
                              className={`${statusColors[application.status]} flex items-center gap-1`}
                            >
                              <StatusIcon className="w-3 h-3" />
                              {applicationStatusLabels[language][application.status]}
                            </Badge>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <Briefcase className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground mb-4">
                        {language === 'pt'
                          ? 'Você ainda não se candidatou a nenhuma vaga'
                          : "You haven't applied to any jobs yet"}
                      </p>
                      <Link to="/jobs">
                        <Button className="bg-gradient-orange hover:opacity-90">
                          {t('jobs.viewAll')}
                        </Button>
                      </Link>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Dashboard;
