
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useToast } from "@/hooks/use-toast";
import { Eye, EyeOff } from 'lucide-react';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Define form schema with Zod
const formSchema = z.object({
  fullName: z.string().min(2, { message: "Le nom complet est requis" }),
  companyName: z.string().min(2, { message: "Le nom de la société est requis" }),
  companyAddress: z.string().min(5, { message: "L'adresse de la société est requise" }),
  businessSector: z.string().min(2, { message: "Le secteur d'activité est requis" }),
  role: z.string().min(2, { message: "La fonction est requise" }),
  phone: z.string().min(10, { message: "Le numéro de téléphone est requis" }),
  email: z.string().email({ message: "Email invalide" }),
  password: z.string().min(6, { message: "Le mot de passe doit contenir au moins 6 caractères" })
});

type FormValues = z.infer<typeof formSchema>;

const RegistrationForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      companyName: "",
      companyAddress: "",
      businessSector: "",
      role: "",
      phone: "",
      email: "",
      password: ""
    }
  });

  const onSubmit = async (data: FormValues) => {
    setIsLoading(true);
    
    try {
      // Extract first and last name
      const nameParts = data.fullName.split(' ');
      const firstName = nameParts[0] || '';
      const lastName = nameParts.slice(1).join(' ') || '';
      
      // Prepare the payload as specified
      const payload = {
        email: data.email,
        password: data.password,
        data: {
          first_name: firstName,
          last_name: lastName,
          phone: data.phone,
          address: data.companyAddress,
          business_sector: data.businessSector,
          company_name: data.companyName,
          role: "client",
          manager_name: data.fullName
        },
        gotrue_meta_security: {},
        code_challenge: null,
        code_challenge_method: null
      };

      // Make API call to Supabase with the updated API key
      const response = await fetch('https://wprlkplzlhyrphbcaalc.supabase.co/auth/v1/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndwcmxrcGx6bGh5cnBoYmNhYWxjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU2MTA5MjQsImV4cCI6MjA2MTE4NjkyNH0.BkmefUSRt048r0o8h4US_4ZUrEicJ2iDm94FTfPi7MQ'
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Une erreur est survenue lors de l\'inscription.');
      }

      // Success
      toast({
        title: "Inscription réussie",
        description: "Votre compte a été créé avec succès.",
      });
      
      // Redirect to login or home page
      setTimeout(() => {
        navigate('/');
      }, 2000);
      
    } catch (error) {
      console.error('Registration error:', error);
      toast({
        title: "Échec de l'inscription",
        description: error instanceof Error ? error.message : "Une erreur est survenue lors de l'inscription.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 gap-4">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-darkblue-800">Nom complet</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="John Doe" 
                    {...field} 
                    className="border-gray-300 focus:border-red-500 focus:ring-1 focus:ring-red-500" 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-darkblue-800">Nom de la société</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Votre entreprise" 
                    {...field} 
                    className="border-gray-300 focus:border-red-500 focus:ring-1 focus:ring-red-500" 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="companyAddress"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-darkblue-800">Adresse de la société</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="123 Rue Exemple, 75000 Paris" 
                    {...field} 
                    className="border-gray-300 focus:border-red-500 focus:ring-1 focus:ring-red-500" 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="businessSector"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-darkblue-800">Secteur d'activité</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Services, Technologie, Commerce..." 
                    {...field} 
                    className="border-gray-300 focus:border-red-500 focus:ring-1 focus:ring-red-500" 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-darkblue-800">Fonction dans la société</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Directeur, Gérant, Responsable..." 
                    {...field} 
                    className="border-gray-300 focus:border-red-500 focus:ring-1 focus:ring-red-500" 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-darkblue-800">Numéro de téléphone</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="+33 1 23 45 67 89" 
                    {...field} 
                    className="border-gray-300 focus:border-red-500 focus:ring-1 focus:ring-red-500" 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-darkblue-800">Adresse email</FormLabel>
                <FormControl>
                  <Input 
                    type="email" 
                    placeholder="exemple@domaine.com" 
                    {...field} 
                    className="border-gray-300 focus:border-red-500 focus:ring-1 focus:ring-red-500" 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-darkblue-800">Mot de passe</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input 
                      type={showPassword ? "text" : "password"} 
                      placeholder="Mot de passe" 
                      {...field} 
                      className="border-gray-300 focus:border-red-500 focus:ring-1 focus:ring-red-500" 
                    />
                    <div 
                      className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-700"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <Button 
          type="submit" 
          className="w-full bg-red-600 hover:bg-red-700 text-white mt-6" 
          disabled={isLoading}
        >
          {isLoading ? "Inscription en cours..." : "S'inscrire"}
        </Button>
      </form>
    </Form>
  );
};

export default RegistrationForm;
