import React from 'react';
import { motion } from 'framer-motion';
import { Shield, ShieldCheck, Lock, Eye, Key, FileText } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
const Privacy = () => {
  const fadeInUp = {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0
    },
    transition: {
      duration: 0.5
    }
  };
  const containerVariants = {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  const policies = [{
    title: "Collecte des données",
    icon: Eye,
    description: "Nous collectons uniquement les données nécessaires pour fournir nos services et améliorer votre expérience utilisateur.",
    color: "bg-blue-50 text-blue-600"
  }, {
    title: "Protection des données",
    icon: Shield,
    description: "Vos données sont sécurisées par des protocoles de chiffrement avancés et stockées sur des serveurs sécurisés en France.",
    color: "bg-green-50 text-green-600"
  }, {
    title: "Confidentialité",
    icon: Lock,
    description: "Nous ne partageons pas vos informations personnelles avec des tiers sans votre consentement explicite.",
    color: "bg-purple-50 text-purple-600"
  }, {
    title: "Transparence",
    icon: FileText,
    description: "Nous vous expliquons clairement comment vos données sont utilisées et vous permettons d'y accéder facilement.",
    color: "bg-amber-50 text-amber-600"
  }, {
    title: "Droits des utilisateurs",
    icon: Key,
    description: "Vous avez le droit d'accéder, modifier, exporter et supprimer vos données conformément au RGPD.",
    color: "bg-red-50 text-red-600"
  }, {
    title: "Sécurité",
    icon: ShieldCheck,
    description: "Notre équipe de sécurité surveille en permanence nos systèmes pour protéger vos informations.",
    color: "bg-indigo-50 text-indigo-600"
  }];
  return <>
      <Navigation />
      <div className="pt-24 pb-16 bg-gradient-to-b from-blue-50/70 to-white">
        <div className="container px-4 md:px-6">
          <motion.div className="max-w-3xl mx-auto text-center mb-12" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-darkblue-800 mb-4">
              Politique de confidentialité
            </h1>
            <p className="text-lg text-darkblue-600">
              Chez i-numera, nous prenons la protection de vos données personnelles très au sérieux.
            </p>
          </motion.div>

          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" variants={containerVariants} initial="initial" animate="animate">
            {policies.map((policy, index) => <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full transition-shadow hover:shadow-md overflow-hidden">
                  <CardContent className="p-6">
                    <div className={`rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4 ${policy.color}`}>
                      <policy.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-darkblue-800 mb-2">{policy.title}</h3>
                    <p className="text-darkblue-600">{policy.description}</p>
                  </CardContent>
                </Card>
              </motion.div>)}
          </motion.div>
        </div>
      </div>

      <div className="py-16 bg-darkblue-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-darkblue-800 mb-6">Détails de notre politique de confidentialité</h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-darkblue-700">Qui sommes-nous ?</h3>
                <p className="text-darkblue-600">i-numera est une société spécialisée dans le développement de solutions numériques pour les entreprises. Notre adresse est : 131, Continental Dr, Suite 305, Newark, DE 19713, United States</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-darkblue-700">Quelles données personnelles collectons-nous ?</h3>
                <p className="text-darkblue-600 mb-4">
                  Nous pouvons collecter les types de données suivants :
                </p>
                <ul className="list-disc pl-5 space-y-2 text-darkblue-600">
                  <li>Informations de contact (nom, email, téléphone, adresse)</li>
                  <li>Informations de profil utilisateur</li>
                  <li>Historique des interactions avec nos services</li>
                  <li>Données techniques (adresse IP, type de navigateur)</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-darkblue-700">Comment utilisons-nous vos données ?</h3>
                <p className="text-darkblue-600 mb-4">
                  Nous utilisons vos données personnelles pour :
                </p>
                <ul className="list-disc pl-5 space-y-2 text-darkblue-600">
                  <li>Fournir et améliorer nos services</li>
                  <li>Personnaliser votre expérience</li>
                  <li>Communiquer avec vous</li>
                  <li>Respecter nos obligations légales</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>;
};
export default Privacy;