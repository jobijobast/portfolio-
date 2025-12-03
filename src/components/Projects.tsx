import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ExternalLink, Github, X, Heart, Play } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

import hackathonImage from "@/assets/project-prop-firm-new.png";
import binkoImage from "@/assets/project-foxtrading-new.png";
import pappersImage from "@/assets/project-hestimia-new.jpeg";
import officePulseImage from "@/assets/project-office-pulse-new.jpeg";

interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription?: string;
  image: string;
  github: string;
  demo: string;
  tags: string[];
  isHeartProject?: boolean;
  loomVideos?: string[];
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "🥇 1ère place – Hackathon Office Pulse",
    description: "Trible Pulse : une app de matching social pour renforcer les liens entre collègues.",
    fullDescription: `Comment redonner envie aux collaborateurs de revenir au bureau… sans jamais l'imposer ?

C'est le défi lancé par Welcome to the Jungle lors du hackathon Office Pulse, en partenariat avec Dust, Make, Lucca, Google Cloud Platform et Slack.

Notre solution Trible Pulse est une application inspirée des mécaniques de matching social (façon Tinder), conçue pour renforcer les liens entre collègues et redonner envie de venir au bureau.

Fonctionnalités principales :
• Création de profil personnalisé avec centres d'intérêt
• Système de matching entre collègues
• Groupes & Tribus autour d'activités communes
• Canaux de discussion intégrés
• Notifications intelligentes quand vos collègues sont au bureau`,
    image: officePulseImage,
    github: "",
    demo: "https://www.loom.com/share/af3cecadb83c42cea7071b14682ee0ff",
    tags: ["Dust", "Make", "Lucca", "GCP", "Slack"],
    loomVideos: [
      "https://www.loom.com/share/af3cecadb83c42cea7071b14682ee0ff",
      "https://www.loom.com/share/2a805f41db284a83b77d55caa49e66d7",
      "https://www.loom.com/share/291a59e83f2345deae56010dc509e7d7"
    ]
  },
  {
    id: 2,
    title: "Compte Funded 50K – TopStep",
    description: "Validation d'un compte Prop Firm grâce à la méthode STDV basée sur Fibonacci.",
    fullDescription: `Les Prop Firms permettent aux traders de gérer des capitaux importants en échange d'un partage des profits. Passer les phases d'évaluation demande une stratégie solide, disciplinée et capable d'assurer stabilité, gestion du risque et rendements réguliers.

Ma solution : la Méthode STDV
Une approche de trading utilisant Fibonacci pour identifier les niveaux clés et les zones de retournement.

Résultats :
• Passage de toutes les étapes d'évaluation
• Obtention d'un compte funded de 50K
• Performance régulière avec respect strict du risk management

Ce projet démontre ma capacité à créer une méthodologie basée sur l'analyse, le test et l'optimisation, ainsi que ma discipline dans l'exécution d'un plan stratégique.`,
    image: hackathonImage,
    github: "",
    demo: "",
    tags: ["Trading", "Fibonacci", "Risk Management", "Prop Firm"],
    loomVideos: ["https://www.loom.com/share/8cc2f56e769c464fa3796bdf67b50f92"],
  },
  {
    id: 3,
    title: "Hestimia – SaaS Data Immobilier",
    description: "Plateforme SaaS pour data analystes en immobilier.",
    fullDescription: `Hestimia est une plateforme SaaS conçue pour faciliter le travail des data analystes en immobilier.

L'objectif : fournir toutes les données d'une adresse de manière centralisée et structurée, permettant aux professionnels de l'immobilier de gagner un temps précieux dans leurs analyses.

Fonctionnalités :
• Agrégation de données multi-sources
• Analyse automatisée des données immobilières
• Tableaux de bord interactifs
• Export et intégration API`,
    image: pappersImage,
    github: "",
    demo: "",
    tags: ["SaaS", "Data", "Immobilier", "Analytics"],
  },
  {
    id: 4,
    title: "FOXtrading – IA & Trading 🦊",
    description: "Projet entrepreneurial : trading + intelligence artificielle.",
    fullDescription: `FOXtrading est mon projet de cœur : la création d'une entreprise dans le trading intégrant l'intelligence artificielle.

L'objectif est d'implémenter l'IA dans mes stratégies de trading pour :
• Optimiser les points d'entrée et de sortie
• Automatiser l'analyse technique
• Détecter les patterns de marché
• Améliorer la gestion du risque

Un projet en cours de développement qui combine ma passion pour le trading et mes compétences en IA/Data.`,
    image: binkoImage,
    github: "",
    demo: "",
    tags: ["IA", "Trading", "Entrepreneuriat", "Machine Learning"],
    isHeartProject: true,
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Mes Projets</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Découvrez mes réalisations en Data Intelligence, Trading et IA
        </p>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projectsData.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden card-hover bg-card border-border/50 cursor-pointer group relative"
              onClick={() => setSelectedProject(project)}
            >
              {project.isHeartProject && (
                <div className="absolute top-4 right-4 z-10">
                  <Heart className="h-6 w-6 text-red-500 fill-red-500 animate-pulse" />
                </div>
              )}
              <div className="aspect-video overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <span className="text-sm font-medium text-foreground">Cliquez pour voir les détails</span>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg leading-tight">{project.title}</CardTitle>
                <CardDescription className="line-clamp-2">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.tags.length - 3}
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Project Detail Modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            {selectedProject && (
              <>
                <DialogHeader>
                  <div className="flex items-start justify-between gap-4">
                    <DialogTitle className="text-2xl leading-tight pr-8">
                      {selectedProject.title}
                      {selectedProject.isHeartProject && (
                        <Heart className="inline-block ml-2 h-5 w-5 text-red-500 fill-red-500" />
                      )}
                    </DialogTitle>
                  </div>
                </DialogHeader>

                <div className="space-y-6">
                  {/* Image */}
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Description */}
                  <DialogDescription className="text-base whitespace-pre-line text-foreground/80">
                    {selectedProject.fullDescription || selectedProject.description}
                  </DialogDescription>

                  {/* Loom Videos */}
                  {selectedProject.loomVideos && selectedProject.loomVideos.length > 0 && (
                    <div className="space-y-3">
                      <h4 className="font-semibold flex items-center gap-2">
                        <Play className="h-4 w-4" />
                        Vidéos de démonstration
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.loomVideos.map((video, index) => (
                          <Button key={index} variant="outline" size="sm" asChild>
                            <a href={video} target="_blank" rel="noopener noreferrer">
                              <Play className="h-4 w-4 mr-2" />
                              Démo {index + 1}
                            </a>
                          </Button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4 border-t border-border">
                    {selectedProject.github && (
                      <Button variant="outline" asChild>
                        <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Voir le code
                        </a>
                      </Button>
                    )}
                    {selectedProject.demo && (
                      <Button asChild>
                        <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Voir la démo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Projects;
