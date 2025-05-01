
import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Phone, Mail, FileQuestion, Search, ArrowRight, Clock, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SupportChannelCard from './SupportChannelCard';
import SupportFaqPreview from './SupportFaqPreview';

const SupportContent: React.FC = () => {
  return (
    <div className="container px-4 md:px-6 py-12">
      {/* Introduction */}
      <div className="mb-16 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-darkblue-900">Comment pouvons-nous vous aider ?</h2>
        <p className="text-lg text-darkblue-700">
          Notre équipe de support client est disponible pour vous aider à résoudre tous vos problèmes
          et répondre à toutes vos questions.
        </p>
      </div>

      {/* Priority Support Banner */}
      <div className="bg-red-50 border border-red-100 rounded-2xl p-8 mb-16 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-start gap-4">
          <div className="bg-red-100 rounded-full p-3 flex-shrink-0">
            <Headphones size={24} className="text-red-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-darkblue-900 mb-2">Support prioritaire</h3>
            <p className="text-darkblue-700">
              Avec notre forfait Premium, bénéficiez d'un accès prioritaire à notre équipe de support
              et obtenez des réponses dans les 2 heures ouvrées.
            </p>
          </div>
        </div>
        <Button className="bg-red-600 hover:bg-red-700 text-white whitespace-nowrap">
          Découvrir l'offre Premium
        </Button>
      </div>

      {/* Support Channels */}
      <h2 className="text-2xl font-bold mb-6 text-darkblue-900">Nos canaux de support</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        <SupportChannelCard 
          icon={<Phone className="h-6 w-6 text-red-600" />}
          title="Support téléphonique"
          description="Disponible du lundi au vendredi de 9h à 18h"
          action={
            <div className="space-y-2">
              <div className="font-medium text-red-600 bg-red-50 px-2 py-1 rounded-sm inline-block">+33 9 85 40 45 63</div>
              <div className="font-medium text-red-600 bg-red-50 px-2 py-1 rounded-sm inline-block">+1 833 856 3018</div>
            </div>
          }
        />
        <SupportChannelCard 
          icon={<Mail className="h-6 w-6 text-red-600" />}
          title="Email"
          description="Nous vous répondons sous 24h ouvrées maximum"
          action={
            <Link to="/contact" className="font-medium text-red-600 hover:text-red-700">
              Envoyer un email
            </Link>
          }
        />
        <SupportChannelCard 
          icon={<MessageCircle className="h-6 w-6 text-red-600" />}
          title="Chat en direct"
          description="Discutez avec un conseiller en temps réel"
          action={
            <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
              Démarrer un chat
            </Button>
          }
        />
      </div>

      {/* Hours */}
      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 mb-16">
        <div className="flex items-start gap-4">
          <div className="bg-blue-50 rounded-full p-3 flex-shrink-0">
            <Clock size={24} className="text-blue-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-darkblue-900 mb-4">Horaires du support</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-darkblue-900 mb-2">Support téléphonique</h4>
                <ul className="space-y-2 text-darkblue-700">
                  <li className="flex justify-between">
                    <span>Lundi - Vendredi</span>
                    <span>9h - 18h</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Samedi</span>
                    <span>10h - 16h</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Dimanche</span>
                    <span>Fermé</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-darkblue-900 mb-2">Support par chat</h4>
                <ul className="space-y-2 text-darkblue-700">
                  <li className="flex justify-between">
                    <span>Lundi - Vendredi</span>
                    <span>9h - 20h</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Samedi</span>
                    <span>10h - 18h</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Dimanche</span>
                    <span>Fermé</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Preview */}
      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 mb-16">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-darkblue-900">Questions fréquentes</h3>
          <Link 
            to="/faq" 
            className="text-red-600 hover:text-red-700 font-medium inline-flex items-center"
          >
            Voir toutes les questions
            <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
        <SupportFaqPreview />
      </div>

      {/* Self-service & Search */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-start gap-4">
            <div className="bg-green-50 rounded-full p-3 flex-shrink-0">
              <FileQuestion size={24} className="text-green-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-darkblue-900 mb-2">Documentation</h3>
              <p className="text-darkblue-700 mb-4">
                Consultez notre base de connaissances pour trouver des guides et tutoriels détaillés.
              </p>
              <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                Accéder à la documentation
              </Button>
            </div>
          </div>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-start gap-4">
            <div className="bg-purple-50 rounded-full p-3 flex-shrink-0">
              <Search size={24} className="text-purple-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-darkblue-900 mb-2">Recherche</h3>
              <p className="text-darkblue-700 mb-4">
                Vous ne trouvez pas ce que vous cherchez ? Essayez notre outil de recherche.
              </p>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Rechercher..."
                  className="w-full px-4 py-2 pr-10 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <Search size={18} className="absolute right-3 top-2.5 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-darkblue-800 to-darkblue-900 rounded-2xl p-8 text-white text-center">
        <h3 className="text-2xl font-bold mb-4">
          Vous ne trouvez pas de réponse à votre question ?
        </h3>
        <p className="text-white/80 mb-6 max-w-2xl mx-auto">
          Notre équipe de support est prête à vous aider. N'hésitez pas à nous contacter directement.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center px-6 py-3 rounded-full text-darkblue-900 bg-white hover:bg-gray-100 transition-all font-medium hover:shadow-lg group"
        >
          Contactez-nous
          <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default SupportContent;
