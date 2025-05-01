
import React from 'react';
import { Link } from 'react-router-dom';
import { UserCircle, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';

const ContactForm: React.FC = () => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
      <h2 className="text-2xl font-bold text-darkblue-900 mb-6">Déjà client ?</h2>
      
      <Card className="bg-red-50 border-red-100">
        <CardHeader>
          <CardTitle className="text-xl text-darkblue-900">Accédez à votre espace client</CardTitle>
          <CardDescription>
            Connectez-vous à votre compte i-numa pour gérer vos services, consulter vos factures et contacter notre support.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="bg-red-100 p-3 rounded-full text-red-600">
              <UserCircle className="h-6 w-6" />
            </div>
            <div>
              <p className="text-darkblue-700">
                Gérez vos services, consultez vos factures et accédez au support technique dédié.
              </p>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <a 
            href="https://i-numa.com/login" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-full"
          >
            <Button className="w-full bg-red-600 hover:bg-red-700">
              Connexion à l'espace client
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </CardFooter>
      </Card>
      
      <div className="mt-8 pt-6 border-t border-gray-100">
        <h3 className="text-lg font-medium text-darkblue-900 mb-4">Nouveau client ?</h3>
        <Link to="/devis" className="w-full">
          <Button variant="outline" className="w-full border-red-600 text-red-600 hover:bg-red-50">
            Demander un devis
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ContactForm;
