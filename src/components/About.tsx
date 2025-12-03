const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">À propos de moi</h2>
        
        <div className="space-y-6 text-lg text-muted-foreground">
          <p>
            Bonjour ! Je suis <span className="text-foreground font-semibold">Jonas Lavigne</span>, spécialisé en Data Intelligence, automatisation par l'IA et <span className="text-primary font-semibold">passionné de trading</span>.
          </p>
          
          <p>
            Je maîtrise la chaîne de valeur de la donnée : collecte, transformation en insights actionnables, nettoyage, analyse statistique et visualisation interactive.
          </p>
          
          <p>
            Mon expertise couvre l'automatisation de processus métier (Make, Zapier, Power Automate) et le développement de solutions en Python. Je crée des pipelines de données robustes et des tableaux de bord avec Power BI et Tableau.
          </p>
          
          <p>
            <span className="text-foreground font-semibold">Trading & Finance</span> : passionné par les marchés financiers, j'ai développé ma propre méthode de trading (STDV) et obtenu un compte funded chez TopStep. Je travaille actuellement sur FOXtrading, un projet entrepreneurial intégrant l'IA au trading.
          </p>
          
          <p>
            Passionné par l'IA et les LLM, j'intègre des technologies de pointe (RAG, agents intelligents) pour résoudre des problématiques concrètes.
          </p>
          
          <p>
            Ouvert aux opportunités en CDI, freelance ou projets innovants autour de la data et du trading.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
