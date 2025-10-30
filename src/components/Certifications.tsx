import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Award, Calendar, Clock } from "lucide-react";
import certUdemy from "@/assets/cert-udemy.jpg";
import certNCC from "@/assets/cert-ncc.jpg";
import certUCSC from "@/assets/cert-ucsc.jpg";

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  image: string;
  duration?: string;
}

const Certifications = () => {
  const certificates: Certificate[] = [
    {
      title: "Linux Command-Line & Shell Scripting for Absolute Beginners",
      issuer: "Udemy - Sygaki Education",
      date: "October 29, 2025",
      duration: "17.5 total hours",
      image: certUdemy,
    },
    {
      title: "Diploma in ICT and Computing",
      issuer: "NCC Education - UK (IDM Sri Lanka)",
      date: "September 2017",
      image: certNCC,
    },
    {
      title: "Java Application Development using JavaSE",
      issuer: "University of Colombo School of Computing",
      date: "June 27, 2021",
      duration: "8 week (60 hour) training course",
      image: certUCSC,
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional certifications and training achievements
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {certificates.map((cert, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <Card 
                  className="card-glow bg-card border-border cursor-pointer group overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                      <span className="text-primary font-medium">Click to view</span>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Award className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-semibold text-lg leading-tight">{cert.title}</h3>
                    </div>
                    
                    <p className="text-muted-foreground text-sm mb-4">{cert.issuer}</p>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span>{cert.date}</span>
                      </div>
                      
                      {cert.duration && (
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="w-4 h-4 text-primary" />
                          <span>{cert.duration}</span>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              
              <DialogContent className="max-w-4xl max-h-[90vh] p-0">
                <div className="overflow-auto">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-auto"
                  />
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
