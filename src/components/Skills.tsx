import { Globe } from "@/components/ui/globe";
import { COBEOptions } from "cobe";

const skillsData: Array<{ name: string; icon: string; location: [number, number]; category: string }> = [
  { name: "Python", icon: "🐍", location: [48.8566, 2.3522], category: "Dev" },
  { name: "Make", icon: "⚙️", location: [40.7128, -74.006], category: "Automation" },
  { name: "Automatisation", icon: "🤖", location: [51.5074, -0.1278], category: "Automation" },
  { name: "RAG", icon: "🔍", location: [35.6762, 139.6503], category: "AI" },
  { name: "PowerBI", icon: "📊", location: [52.52, 13.405], category: "Data" },
  { name: "API", icon: "🔌", location: [-33.8688, 151.2093], category: "Dev" },
  { name: "AI / LLM", icon: "🧠", location: [37.7749, -122.4194], category: "AI" },
  { name: "Pandas", icon: "🐼", location: [39.9042, 116.4074], category: "Data" },
  { name: "Excel", icon: "📈", location: [55.7558, 37.6173], category: "Data" },
  { name: "Trading", icon: "📉", location: [41.9028, 12.4964], category: "Finance" },
  { name: "Fibonacci", icon: "🔢", location: [19.4326, -99.1332], category: "Finance" },
  { name: "Tableau", icon: "📊", location: [1.3521, 103.8198], category: "Data" },
  { name: "Git", icon: "🔀", location: [-23.5505, -46.6333], category: "Dev" },
  { name: "SQL", icon: "🗄️", location: [50.1109, 8.6821], category: "Data" },
  { name: "Machine Learning", icon: "🎓", location: [34.0522, -118.2437], category: "AI" },
  { name: "Zapier", icon: "⚡", location: [47.6062, -122.3321], category: "Automation" },
  { name: "N8N", icon: "🔗", location: [52.3676, 4.9041], category: "Automation" },
  { name: "Power Automate", icon: "🔄", location: [45.4215, -75.6972], category: "Automation" },
  { name: "Data Analysis", icon: "📊", location: [37.5665, 126.978], category: "Data" },
];

const Skills = () => {
  const globeConfig: COBEOptions = {
    width: 800,
    height: 800,
    onRender: () => {},
    devicePixelRatio: 2,
    phi: 0,
    theta: 0.3,
    dark: 1,
    diffuse: 0.6,
    mapSamples: 16000,
    mapBrightness: 2.5,
    baseColor: [0.15, 0.1, 0.25],
    markerColor: [0.6, 0.2, 0.9],
    glowColor: [0.3, 0.1, 0.5],
    markers: skillsData.map(skill => ({
      location: skill.location,
      size: 0.1,
    })),
  };

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Compétences</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Technologies et outils que je maîtrise pour créer des solutions innovantes
        </p>

        {/* Globe Container */}
        <div className="relative flex items-center justify-center h-[500px] w-full mb-16">
          <div className="relative w-full max-w-[500px] aspect-square">
            <Globe className="inset-0" config={globeConfig} />
            {/* Glow effect behind globe */}
            <div className="absolute inset-0 -z-10 bg-gradient-radial from-primary/20 via-transparent to-transparent blur-3xl" />
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 max-w-5xl mx-auto">
          {skillsData.map((skill) => (
            <div
              key={skill.name}
              className="group flex items-center gap-2 p-3 bg-card/80 backdrop-blur-sm rounded-xl border border-border/50 hover:border-primary/50 hover:bg-card transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(78,13,196,0.3)]"
            >
              <span className="text-xl group-hover:scale-110 transition-transform">{skill.icon}</span>
              <span className="text-sm font-medium truncate">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
