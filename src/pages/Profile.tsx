import { useState } from 'react';
import { Layout } from '@/components/layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  User,
  Briefcase,
  GraduationCap,
  Languages,
  Wrench,
  Plus,
  Trash2,
  Save,
} from 'lucide-react';
import { mockUser, languageLevelLabels } from '@/data/mockUser';

const Profile = () => {
  const { language, t } = useLanguage();
  const [userData, setUserData] = useState(mockUser);

  const handleSave = () => {
    console.log('Saving profile:', userData);
    // Would save to API
  };

  return (
    <Layout>
      <section className="py-8 md:py-12 bg-secondary/30 min-h-screen">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                {t('profile.title')}
              </h1>
              <p className="text-muted-foreground">
                {language === 'pt'
                  ? 'Mantenha seu perfil atualizado'
                  : 'Keep your profile up to date'}
              </p>
            </div>
            <Button onClick={handleSave} className="bg-gradient-orange hover:opacity-90">
              <Save className="w-4 h-4 mr-2" />
              {t('profile.save')}
            </Button>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Personal Information */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <User className="w-5 h-5 text-primary" />
                  {t('profile.personal')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>{t('contact.form.name')}</Label>
                    <Input
                      value={userData.name}
                      onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>{t('contact.form.email')}</Label>
                    <Input
                      type="email"
                      value={userData.email}
                      onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>{t('contact.form.phone')}</Label>
                  <Input
                    value={userData.phone || ''}
                    onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label>{language === 'pt' ? 'Título Profissional' : 'Professional Headline'}</Label>
                  <Input
                    value={userData.profile.headline || ''}
                    onChange={(e) =>
                      setUserData({
                        ...userData,
                        profile: { ...userData.profile, headline: e.target.value },
                      })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label>{language === 'pt' ? 'Sobre Mim' : 'About Me'}</Label>
                  <Textarea
                    value={userData.profile.about || ''}
                    onChange={(e) =>
                      setUserData({
                        ...userData,
                        profile: { ...userData.profile, about: e.target.value },
                      })
                    }
                    rows={4}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Skills */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-primary" />
                  {t('profile.skills')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {userData.profile.skills.map((skill, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-primary/10 text-primary flex items-center gap-1"
                    >
                      {skill}
                      <button
                        onClick={() => {
                          const newSkills = userData.profile.skills.filter((_, i) => i !== index);
                          setUserData({
                            ...userData,
                            profile: { ...userData.profile, skills: newSkills },
                          });
                        }}
                        className="ml-1 hover:text-destructive"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
                <Button variant="outline" size="sm">
                  <Plus className="w-4 h-4 mr-2" />
                  {language === 'pt' ? 'Adicionar Habilidade' : 'Add Skill'}
                </Button>
              </CardContent>
            </Card>

            {/* Experience */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-primary" />
                  {t('profile.experience')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {userData.profile.experience.map((exp) => (
                    <div
                      key={exp.id}
                      className="p-4 border border-border rounded-lg hover:border-primary/50 transition-colors"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-semibold text-foreground">{exp.title}</h4>
                          <p className="text-sm text-muted-foreground">{exp.company}</p>
                        </div>
                        {exp.current && (
                          <Badge variant="secondary">
                            {language === 'pt' ? 'Atual' : 'Current'}
                          </Badge>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground mb-2">
                        {exp.startDate} - {exp.current ? (language === 'pt' ? 'Presente' : 'Present') : exp.endDate}
                      </p>
                      {exp.description && (
                        <p className="text-sm text-muted-foreground">{exp.description}</p>
                      )}
                    </div>
                  ))}
                </div>
                <Button variant="outline" size="sm" className="mt-4">
                  <Plus className="w-4 h-4 mr-2" />
                  {language === 'pt' ? 'Adicionar Experiência' : 'Add Experience'}
                </Button>
              </CardContent>
            </Card>

            {/* Education */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  {t('profile.education')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {userData.profile.education.map((edu) => (
                    <div
                      key={edu.id}
                      className="p-4 border border-border rounded-lg hover:border-primary/50 transition-colors"
                    >
                      <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                      <p className="text-sm text-muted-foreground">{edu.institution}</p>
                      <p className="text-sm text-muted-foreground">{edu.field}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {edu.startDate} - {edu.current ? (language === 'pt' ? 'Presente' : 'Present') : edu.endDate}
                      </p>
                    </div>
                  ))}
                </div>
                <Button variant="outline" size="sm" className="mt-4">
                  <Plus className="w-4 h-4 mr-2" />
                  {language === 'pt' ? 'Adicionar Formação' : 'Add Education'}
                </Button>
              </CardContent>
            </Card>

            {/* Languages */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Languages className="w-5 h-5 text-primary" />
                  {t('profile.languages')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4">
                  {userData.profile.languages.map((lang, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 p-3 border border-border rounded-lg"
                    >
                      <span className="font-medium">{lang.name}</span>
                      <Badge variant="secondary">
                        {languageLevelLabels[language][lang.level]}
                      </Badge>
                    </div>
                  ))}
                </div>
                <Button variant="outline" size="sm" className="mt-4">
                  <Plus className="w-4 h-4 mr-2" />
                  {language === 'pt' ? 'Adicionar Idioma' : 'Add Language'}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Profile;
