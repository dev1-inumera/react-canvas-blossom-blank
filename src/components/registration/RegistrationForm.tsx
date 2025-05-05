
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

      // Make API call to Supabase
      const response = await fetch('https://wprlkplzlhyrphbcaalc.supabase.co/auth/v1/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndwcmxrcGx6bGh5cnBoYmNhYWxjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ3NTQyNDYsImV4cCI6MjA1MDMzMDI0Nn0.pxl4k-GrFyTBzJmo_NfD1ai-FDWlzO4-hQ2PJJkbBqI'
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nom complet</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
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
                <FormLabel>Nom de la société</FormLabel>
                <FormControl>
                  <Input placeholder="Votre entreprise" {...field} />
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
                <FormLabel>Adresse de la société</FormLabel>
                <FormControl>
                  <Input placeholder="123 Rue Exemple, 75000 Paris" {...field} />
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
                <FormLabel>Secteur d'activité</FormLabel>
                <FormControl>
                  <Input placeholder="Services, Technologie, Commerce..." {...field} />
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
                <FormLabel>Fonction dans la société</FormLabel>
                <FormControl>
                  <Input placeholder="Directeur, Gérant, Responsable..." {...field} />
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
                <FormLabel>Numéro de téléphone</FormLabel>
                <FormControl>
                  <Input placeholder="+33 1 23 45 67 89" {...field} />
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
                <FormLabel>Adresse email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="exemple@domaine.com" {...field} />
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
                <FormLabel>Mot de passe</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input 
                      type={showPassword ? "text" : "password"} 
                      placeholder="Mot de passe" 
                      {...field} 
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
          className="w-full bg-red-600 hover:bg-red-700 text-white" 
          disabled={isLoading}
        >
          {isLoading ? "Inscription en cours..." : "S'inscrire"}
        </Button>
      </form>
    </Form>
  );
};

export default RegistrationForm;
