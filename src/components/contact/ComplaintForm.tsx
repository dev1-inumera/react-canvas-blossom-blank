
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Send, AlertCircle } from 'lucide-react';

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const formSchema = z.object({
  subject: z.string().min(1, { message: 'Veuillez sélectionner un sujet.' }),
  message: z.string().min(10, { message: 'Votre message doit contenir au moins 10 caractères.' }),
  company: z.string().min(2, { message: 'Veuillez entrer le nom de votre société.' }),
  contractNumber: z.string().min(5, { message: 'Veuillez entrer votre numéro de contrat.' }),
  fullName: z.string().min(2, { message: 'Veuillez entrer votre nom complet.' }),
  phone: z.string().min(10, { message: 'Veuillez entrer un numéro de téléphone valide.' }),
});

export type ComplaintFormValues = z.infer<typeof formSchema>;

interface ComplaintFormProps {
  onSubmit: (data: ComplaintFormValues) => void;
}

const ComplaintForm: React.FC<ComplaintFormProps> = ({ onSubmit }) => {
  const form = useForm<ComplaintFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      subject: '',
      message: '',
      company: '',
      contractNumber: '',
      fullName: '',
      phone: '',
    },
  });

  const handleSubmit = (data: ComplaintFormValues) => {
    onSubmit(data);
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
      <h2 className="text-2xl font-bold text-darkblue-900 mb-6">Votre demande</h2>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Sujet principal <span className="text-red-500">*</span></FormLabel>
                <Select 
                  onValueChange={field.onChange} 
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez un sujet" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="information">Demande d'information</SelectItem>
                    <SelectItem value="technical">Problème technique</SelectItem>
                    <SelectItem value="billing">Question de facturation</SelectItem>
                    <SelectItem value="complaint">Réclamation</SelectItem>
                    <SelectItem value="other">Autre</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Précisions</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Précisez votre demande" 
                    className="min-h-[150px]" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <h3 className="text-xl font-medium text-darkblue-900 mt-8 mb-4">Vos coordonnées</h3>
          
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Société <span className="text-red-500">*</span></FormLabel>
                <FormControl>
                  <Input placeholder="Ma Société" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="contractNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Numéro de contrat <span className="text-red-500">*</span></FormLabel>
                <FormControl>
                  <Input placeholder="------" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nom complet <span className="text-red-500">*</span></FormLabel>
                <FormControl>
                  <Input placeholder="Prénom Nom" {...field} />
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
                <FormLabel>Téléphone <span className="text-red-500">*</span></FormLabel>
                <FormControl>
                  <Input placeholder="----------" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
            <Send className="mr-2 h-4 w-4" />
            Envoyer la demande
          </Button>
          
          <div className="flex items-start gap-2 text-sm text-gray-500 mt-4">
            <AlertCircle className="h-4 w-4 flex-shrink-0 mt-0.5" />
            <p>Les champs marqués d'un <span className="text-red-500">*</span> sont obligatoires</p>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ComplaintForm;
