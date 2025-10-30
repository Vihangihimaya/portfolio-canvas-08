import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  stack: string[];
  tags: string[];
  link?: string;
  repo?: string;
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects: Project[] = [
    {
      title: "SecuVision",
      description: "AI-powered security surveillance system using computer vision for real-time threat detection and monitoring",
      stack: ["Python", "OpenCV", "Machine Learning"],
      tags: ["ai", "python"],
    },
    {
      title: "E-Commerce Platform",
      description: "Full-featured online store with real-time inventory, shopping cart, and secure payment integration",
      stack: ["React", "Firebase", "Stripe"],
      tags: ["web", "react"],
    },
    {
      title: "Hospital Management System",
      description: "Comprehensive healthcare platform managing patient records, appointments, and medical staff scheduling",
      stack: ["Java", "MySQL", "Swing"],
      tags: ["java", "database"],
    },
    {
      title: "Recipe Finder",
      description: "Interactive web app to discover recipes based on available ingredients using external APIs",
      stack: ["React", "REST API", "Tailwind"],
      tags: ["web", "react"],
    },
    {
      title: "Hotel Management System",
      description: "Complete hotel booking and management solution with room reservations and billing",
      stack: ["PHP", "MySQL", "Bootstrap"],
      tags: ["web", "php"],
    },
    {
      title: "House Price Prediction",
      description: "Machine learning model predicting real estate prices based on location, size, and market trends",
      stack: ["Python", "Scikit-learn", "Pandas"],
      tags: ["ai", "python"],
    },
    {
      title: "Warehouse Management",
      description: "Inventory tracking system with stock alerts, order processing, and supplier management",
      stack: ["PHP", "MySQL", "JavaScript"],
      tags: ["web", "php"],
    },
    {
      title: "Library Management System",
      description: "Digital library platform for book cataloging, member management, and lending operations",
      stack: ["C#", "SQL Server", "WPF"],
      tags: ["database", "desktop"],
    },
    {
      title: "Habit Tracker",
      description: "Personal productivity tool to build and maintain daily habits with progress visualization",
      stack: ["HTML", "CSS", "JavaScript"],
      tags: ["web"],
    },
    {
      title: "Coffee Shop Website",
      description: "Modern responsive website for a local coffee shop with menu, location, and online ordering",
      stack: ["HTML", "CSS", "JavaScript"],
      tags: ["web"],
    },
  ];

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web" },
    { id: "ai", label: "AI/ML" },
    { id: "react", label: "React" },
    { id: "python", label: "Python" },
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(p => p.tags.includes(activeFilter));

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            A selection of projects demonstrating full-stack development skills
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3 justify-center">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "outline"}
                onClick={() => setActiveFilter(filter.id)}
                className={activeFilter === filter.id ? "bg-primary" : ""}
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.title} 
              className="card-glow bg-card border-border h-full flex flex-col"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <CardHeader>
                <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                {(project.link || project.repo) && (
                  <div className="flex gap-3">
                    {project.link && (
                      <Button variant="outline" size="sm" className="flex-1">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    )}
                    {project.repo && (
                      <Button variant="outline" size="sm" className="flex-1">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
