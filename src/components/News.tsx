import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Newspaper } from "lucide-react";

interface NewsArticle {
    article_id: string;
    title: string;
    link: string;
    description: string;
    pubDate: string;
    image_url: string | null;
    source_id: string;
}

const API_KEY = "pub_21f3737f1b2f4ba2a75040788356bde9";

const News = () => {
    const [news, setNews] = useState<NewsArticle[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch(
                    `https://newsdata.io/api/1/news?apikey=${API_KEY}&q=artificial intelligence&language=fr,en`
                );
                if (!response.ok) {
                    throw new Error("Failed to fetch news");
                }
                const data = await response.json();
                // The API returns 'results' array
                setNews(data.results.slice(0, 6));
            } catch (err) {
                console.error(err);
                setError("Impossible de charger les actualités pour le moment.");
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    if (loading) {
        return (
            <section id="news" className="py-20 px-4 bg-background">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-12">Actualités IA & Data</h2>
                    <div className="animate-pulse flex justify-center">Chargement des actualités...</div>
                </div>
            </section>
        );
    }

    if (error) return null;

    return (
        <section id="news" className="py-20 px-4 bg-background">
            <div className="container mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Actualités IA & Data</h2>
                <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                    Les dernières nouvelles du monde de l'intelligence artificielle et de la data.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {news.map((article) => (
                        <Card key={article.article_id} className="flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
                            {article.image_url && (
                                <div className="h-48 overflow-hidden rounded-t-lg">
                                    <img
                                        src={article.image_url}
                                        alt={article.title}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).style.display = 'none';
                                        }}
                                    />
                                </div>
                            )}
                            <CardHeader>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                                    <Newspaper className="h-4 w-4" />
                                    <span>{article.source_id}</span>
                                    <span>•</span>
                                    <span>{new Date(article.pubDate).toLocaleDateString()}</span>
                                </div>
                                <CardTitle className="text-xl line-clamp-2">{article.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow flex flex-col justify-between">
                                <CardDescription className="line-clamp-3 mb-4">
                                    {article.description}
                                </CardDescription>
                                <Button asChild variant="outline" className="w-full mt-auto group">
                                    <a href={article.link} target="_blank" rel="noopener noreferrer">
                                        Lire l'article
                                        <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default News;
