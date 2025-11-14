import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import consultation from "@/assets/consultation.jpg";

const News = () => {
  const articles = [
    {
      date: "Monday 28, November 2024",
      title: "The new advances in cardiac surgery that are saving lives",
      image: consultation,
    },
    {
      date: "Tuesday 29, November 2024",
      title: "Understanding the importance of preventive healthcare",
      image: consultation,
    },
    {
      date: "Wednesday 30, November 2024",
      title: "How modern technology is revolutionizing patient care",
      image: consultation,
    },
    {
      date: "Thursday 01, December 2024",
      title: "Nutrition and wellness: A comprehensive guide",
      image: consultation,
    },
  ];

  return (
    <section className="py-20 bg-secondary/20" id="news">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-2">Better information, Better health</p>
          <h2 className="text-4xl font-bold text-foreground">News</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {articles.map((article, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow cursor-pointer">
              <CardContent className="p-0">
                <div className="flex gap-4 p-4">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-accent text-xs mb-2">
                      <Calendar className="h-3 w-3" />
                      <span>{article.date}</span>
                    </div>
                    <h3 className="font-semibold text-foreground hover:text-accent transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-accent text-sm mt-2 font-medium">Read More →</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
