import { Home, Briefcase, Code, Video, Mail, User } from "lucide-react";
import { AnimatedNavBar } from "./AnimatedNavBar";

const Navigation = () => {
  const navItems = [
    { name: "Accueil", url: "#home", icon: Home },
    { name: "Projets", url: "#projects", icon: Briefcase },
    { name: "Compétences", url: "#skills", icon: Code },
    { name: "Présentation", url: "#video", icon: Video },
    { name: "Contact", url: "#contact", icon: Mail },
    { name: "À propos", url: "#about", icon: User },
  ];

  return <AnimatedNavBar items={navItems} />;
};

export default Navigation;
