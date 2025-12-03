const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="container mx-auto text-center">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} Jonas Lavigne. Tous droits réservés.
        </p>
        <div className="mt-4 text-xs text-muted-foreground/50 space-y-1">
          <p>API Key : pub_21f3737f1b2f4ba2a75040788356bde9</p>
          <p>Doc URL : <a href="https://newsdata.io/documentation#newsdata-key" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">https://newsdata.io/documentation#newsdata-key</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
