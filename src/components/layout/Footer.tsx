import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Phone, Mail, Clock, Linkedin, Instagram, Facebook } from 'lucide-react';

export const Footer = () => {
  const { t } = useLanguage();

  const companyLinks = [
    { to: '/about', label: t('nav.about') },
    { to: '/services', label: t('nav.services') },
    { to: '/jobs', label: t('nav.jobs') },
    { to: '/contact', label: t('nav.contact') },
  ];

  const serviceLinks = [
    { label: t('services.recruitment.title') },
    { label: t('services.temporary.title') },
    { label: t('services.outsourcing.title') },
    { label: t('services.payroll.title') },
  ];

  return (
    <footer className="bg-charcoal text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-orange rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold text-white">P</span>
              </div>
              <span className="text-xl font-display font-bold">Potency</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {t('about.description').slice(0, 150)}...
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.company')}</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.services')}</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to="/services"
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.support')}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Rua Manuel Borba, 163 – Santo Amaro – São Paulo</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span>(11) 5523-2311</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span>contato@potency.com.br</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p>{t('contact.info.hours.weekdays')}</p>
                  <p>{t('contact.info.hours.friday')}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Potency. {t('footer.rights')}
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
