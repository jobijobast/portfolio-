import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import profilePhoto from "@/assets/profile-photo-snapchat.jpg";
import ShaderBackground from "./ShaderBackground";

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = [titleRef.current, subtitleRef.current, contentRef.current].filter(Boolean);

    elements.forEach((el, index) => {
      if (el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.filter = 'blur(10px)';

        setTimeout(() => {
          el.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
          el.style.filter = 'blur(0px)';
        }, 100 + index * 150);
      }
    });
  }, []);

  const handleScrollToAbout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden">
      <ShaderBackground />

      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 text-center md:text-left">
            <p className="text-primary text-sm font-medium tracking-wide uppercase animate-fade-in">
              Bonjour, Bienvenue sur
            </p>
            <h1
              ref={titleRef}
              className="text-5xl md:text-7xl font-bold leading-tight"
            >
              Mon Portfolio
            </h1>
            <p
              ref={subtitleRef}
              className="text-xl md:text-2xl text-foreground/80"
            >
              Je suis spécialiste en{" "}
              <span className="text-white font-semibold">IA / Automatisation</span>
            </p>
            <p className="text-foreground/70 max-w-lg animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Expert en Data Intelligence et automatisation par l'IA, je transforme les données en solutions innovantes.
            </p>

            <div
              ref={contentRef}
              className="flex flex-wrap gap-4 justify-center md:justify-start"
            >
              <Button asChild size="lg" className="group">
                <a href="#about" onClick={handleScrollToAbout}>
                  <span>En savoir plus</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#contact">Contact</a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center md:justify-start pt-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:glow-effect"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:glow-effect"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:fox6lavigne@gmail.com"
                className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:glow-effect"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative animate-scale-in" style={{ animationDelay: '0.4s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-glow rounded-full blur-2xl opacity-30 animate-pulse" />
              <img
                src={profilePhoto}
                alt="Jonas Lavigne"
                className="relative w-80 h-80 md:w-96 md:h-96 rounded-full object-cover border-4 border-primary/30 shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background/80 to-transparent" />
    </section>
  );
};

export default Hero;
