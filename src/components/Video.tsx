import { Card } from "@/components/ui/card";

const Video = () => {
  return (
    <section id="video" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Présentation</h2>
            <p className="text-muted-foreground">
              Découvrez mon parcours et mes compétences en quelques minutes. Cette vidéo vous donnera un aperçu de mes projets et de ma passion pour la data intelligence et l'automatisation.
            </p>
          </div>

          <Card className="overflow-hidden bg-card border-border/50">
            <div className="aspect-video">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Présentation Portfolio"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Video;
