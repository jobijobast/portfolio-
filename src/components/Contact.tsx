import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Github, Linkedin, FileText } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Le nom est requis").max(100, "Le nom doit faire moins de 100 caractères"),
  email: z.string().trim().email("Email invalide").max(255, "L'email doit faire moins de 255 caractères"),
  message: z.string().trim().min(1, "Le message est requis").max(1000, "Le message doit faire moins de 1000 caractères"),
});

type ContactForm = z.infer<typeof contactSchema>;

const Contact = () => {
  const { toast } = useToast();
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactForm) => {
    console.log("Form submitted:", data);
    toast({
      title: "Message envoyé !",
      description: "Je vous répondrai dans les plus brefs délais.",
    });
    reset();
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Contact</h2>
        <p className="text-muted-foreground mb-12 text-center">
          N'hésitez pas à me contacter pour discuter de projets ou d'opportunités de collaboration.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mb-12">
          <div className="space-y-2">
            <Label htmlFor="name">Nom</Label>
            <Input
              id="name"
              placeholder="Votre nom"
              {...register("name")}
              className={errors.name ? "border-destructive" : ""}
            />
            {errors.name && (
              <p className="text-sm text-destructive">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="votre.email@exemple.com"
              {...register("email")}
              className={errors.email ? "border-destructive" : ""}
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Votre message..."
              rows={6}
              {...register("message")}
              className={errors.message ? "border-destructive" : ""}
            />
            {errors.message && (
              <p className="text-sm text-destructive">{errors.message.message}</p>
            )}
          </div>

          <Button type="submit" size="lg" className="w-full">
            Envoyer le message
          </Button>
        </form>

        <div className="text-center mb-8">
          <a
            href="mailto:fox6lavigne@gmail.com"
            className="text-xl md:text-2xl font-semibold gradient-text hover:opacity-80 transition-opacity inline-block"
          >
            fox6lavigne@gmail.com
          </a>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <Button asChild size="lg" variant="outline">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5 mr-2" />
              LinkedIn
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 mr-2" />
              GitHub
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="https://sable-driver-0d1.notion.site" target="_blank" rel="noopener noreferrer">
              <FileText className="h-5 w-5 mr-2" />
              Notion
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
