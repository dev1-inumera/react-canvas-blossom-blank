
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, FileText, Users, CircleHelp, Link } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const Terms = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
  };

  return (
    <>
      <Navigation />
      <div className="pt-24 pb-16 bg-gradient-to-b from-indigo-50/70 to-white">
        <motion.div 
          className="container px-4 md:px-6"
          variants={pageVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h1 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-darkblue-800 mb-4"
            variants={fadeInUp}
          >
            Mentions légales
          </motion.h1>
          
          <motion.p 
            className="text-lg text-darkblue-600 max-w-3xl mb-8"
            variants={fadeInUp}
          >
            Toutes les informations légales concernant i-numera, conformément à la législation française et européenne.
          </motion.p>

          <Tabs defaultValue="company" className="w-full">
            <TabsList className="grid grid-cols-4 max-w-3xl mb-8 bg-white shadow-sm border">
              <TabsTrigger value="company" className="data-[state=active]:bg-indigo-50 data-[state=active]:text-indigo-700">
                <FileText className="h-4 w-4 mr-2" />
                Société
              </TabsTrigger>
              <TabsTrigger value="privacy" className="data-[state=active]:bg-purple-50 data-[state=active]:text-purple-700">
                <ShieldCheck className="h-4 w-4 mr-2" />
                Confidentialité
              </TabsTrigger>
              <TabsTrigger value="terms" className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700">
                <Users className="h-4 w-4 mr-2" />
                Conditions
              </TabsTrigger>
              <TabsTrigger value="various" className="data-[state=active]:bg-green-50 data-[state=active]:text-green-700">
                <CircleHelp className="h-4 w-4 mr-2" />
                Divers
              </TabsTrigger>
            </TabsList>

            <motion.div
              variants={fadeInUp}
              className="space-y-8"
            >
              <TabsContent value="company" className="space-y-6">
                <Card className="transition-shadow hover:shadow-md">
                  <CardHeader className="bg-indigo-50/50">
                    <CardTitle className="text-darkblue-800">Informations sur la société</CardTitle>
                    <CardDescription>Coordonnées et informations de contact</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <h3 className="font-medium text-darkblue-700 mb-2">Dénomination</h3>
                          <p>i-numera corporation</p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <h3 className="font-medium text-darkblue-700 mb-2">Forme juridique</h3>
                          <p>SARL au capital de 10 000 €</p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <h3 className="font-medium text-darkblue-700 mb-2">Siège social</h3>
                          <p>131, Continental Dr, Suite 305, Newark, DE 19713, United States</p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <h3 className="font-medium text-darkblue-700 mb-2">EIN (équivalent du SIRET)</h3>
                          <p>37-2178514</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="privacy" className="space-y-6">
                <Card className="transition-shadow hover:shadow-md">
                  <CardHeader className="bg-purple-50/50">
                    <CardTitle className="text-darkblue-800">Politique de confidentialité</CardTitle>
                    <CardDescription>Traitement des données personnelles</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <p className="text-darkblue-700">i-numera s'engage à protéger la vie privée de ses utilisateurs et à assurer la confidentialité des informations personnelles fournies.</p>
                      
                      <Collapsible className="w-full bg-white border rounded-lg overflow-hidden">
                        <CollapsibleTrigger className="flex justify-between items-center w-full p-4 text-left bg-purple-50/50 hover:bg-purple-50">
                          <span className="font-medium">Collecte de données</span>
                          <ArrowRight className="h-4 w-4 transform transition-transform duration-200 group-data-[state=open]:rotate-90" />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="p-4 space-y-2">
                          <p>Les informations recueillies font l'objet d'un traitement informatique destiné à :</p>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Améliorer nos services</li>
                            <li>Personnaliser l'expérience utilisateur</li>
                            <li>Gérer la relation client</li>
                          </ul>
                        </CollapsibleContent>
                      </Collapsible>

                      <Collapsible className="w-full bg-white border rounded-lg overflow-hidden">
                        <CollapsibleTrigger className="flex justify-between items-center w-full p-4 text-left bg-purple-50/50 hover:bg-purple-50">
                          <span className="font-medium">Droits des utilisateurs</span>
                          <ArrowRight className="h-4 w-4 transform transition-transform duration-200 group-data-[state=open]:rotate-90" />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="p-4 space-y-2">
                          <p>Conformément à la loi RGPD, vous disposez des droits suivants :</p>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Droit d'accès à vos données</li>
                            <li>Droit de rectification</li>
                            <li>Droit à l'effacement</li>
                            <li>Droit à la limitation du traitement</li>
                            <li>Droit à la portabilité des données</li>
                          </ul>
                          <p className="mt-2">Pour exercer ces droits, contactez-nous à : privacy@i-numera.com</p>
                        </CollapsibleContent>
                      </Collapsible>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="terms" className="space-y-6">
                <Card className="transition-shadow hover:shadow-md">
                  <CardHeader className="bg-blue-50/50">
                    <CardTitle className="text-darkblue-800">Conditions générales d'utilisation</CardTitle>
                    <CardDescription>Règles d'utilisation du site et des services</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <p className="text-darkblue-700">En utilisant ce site, vous acceptez les conditions générales décrites ci-dessous.</p>
                      
                      <Collapsible className="w-full bg-white border rounded-lg overflow-hidden">
                        <CollapsibleTrigger className="flex justify-between items-center w-full p-4 text-left bg-blue-50/50 hover:bg-blue-50">
                          <span className="font-medium">Propriété intellectuelle</span>
                          <ArrowRight className="h-4 w-4 transform transition-transform duration-200 group-data-[state=open]:rotate-90" />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="p-4">
                          <p>L'ensemble des éléments constituant le site i-numera (textes, graphismes, logiciels, photographies, images, vidéos, sons, etc.) est la propriété exclusive de la société ou de ses partenaires. Toute reproduction, représentation ou diffusion, en tout ou partie, du contenu de ce site sur quelque support ou par tout procédé que ce soit, sans l'autorisation expresse et préalable de i-numera, est interdite et constituerait une contrefaçon.</p>
                        </CollapsibleContent>
                      </Collapsible>

                      <Collapsible className="w-full bg-white border rounded-lg overflow-hidden">
                        <CollapsibleTrigger className="flex justify-between items-center w-full p-4 text-left bg-blue-50/50 hover:bg-blue-50">
                          <span className="font-medium">Limitation de responsabilité</span>
                          <ArrowRight className="h-4 w-4 transform transition-transform duration-200 group-data-[state=open]:rotate-90" />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="p-4">
                          <p>i-numera s'efforce d'assurer au mieux l'exactitude et la mise à jour des informations diffusées sur ce site, dont elle se réserve le droit de corriger, à tout moment et sans préavis, le contenu. Toutefois, i-numera ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition sur ce site.</p>
                        </CollapsibleContent>
                      </Collapsible>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="various" className="space-y-6">
                <Card className="transition-shadow hover:shadow-md">
                  <CardHeader className="bg-green-50/50">
                    <CardTitle className="text-darkblue-800">Informations diverses</CardTitle>
                    <CardDescription>Autres mentions légales importantes</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <Collapsible className="w-full bg-white border rounded-lg overflow-hidden">
                        <CollapsibleTrigger className="flex justify-between items-center w-full p-4 text-left bg-green-50/50 hover:bg-green-50">
                          <span className="font-medium">Liens hypertextes</span>
                          <ArrowRight className="h-4 w-4 transform transition-transform duration-200 group-data-[state=open]:rotate-90" />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="p-4">
                          <p>Ce site peut contenir des liens vers d'autres sites dont i-numera n'est pas responsable, que ce soit en termes de contenu, de politique de confidentialité ou d'utilisation qui en sera faite.</p>
                        </CollapsibleContent>
                      </Collapsible>

                      <Collapsible className="w-full bg-white border rounded-lg overflow-hidden">
                        <CollapsibleTrigger className="flex justify-between items-center w-full p-4 text-left bg-green-50/50 hover:bg-green-50">
                          <span className="font-medium">Loi applicable</span>
                          <ArrowRight className="h-4 w-4 transform transition-transform duration-200 group-data-[state=open]:rotate-90" />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="p-4">
                          <p>Les présentes mentions légales sont soumises au droit américain. En cas de litige, les tribunaux américains seront seuls compétents.</p>
                        </CollapsibleContent>
                      </Collapsible>

                      <Collapsible className="w-full bg-white border rounded-lg overflow-hidden">
                        <CollapsibleTrigger className="flex justify-between items-center w-full p-4 text-left bg-green-50/50 hover:bg-green-50">
                          <span className="font-medium">Crédits</span>
                          <ArrowRight className="h-4 w-4 transform transition-transform duration-200 group-data-[state=open]:rotate-90" />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="p-4">
                          <p>Conception et développement : i-numera</p>
                          <p>Photographies : i-numera et Shutterstock</p>
                        </CollapsibleContent>
                      </Collapsible>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </motion.div>
          </Tabs>
        </motion.div>
      </div>

      <div className="py-12 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-darkblue-800 mb-6">Des questions sur nos mentions légales ?</h2>
            <p className="text-darkblue-600 mb-8">
              Notre équipe juridique est à votre disposition pour répondre à toutes vos questions concernant nos mentions légales ou notre politique de confidentialité.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-6 py-3 text-white hover:bg-indigo-700 transition-colors"
            >
              Contactez-nous
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Terms;
