import { Code, Database, Zap } from 'lucide-react';

const technologies = [
  { name: 'face_recognition', category: 'AI/ML' },
  { name: 'FAISS', category: 'Vector Search' },
  { name: 'PyQt5', category: 'UI Framework' },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Tech Stack
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Built with cutting-edge technologies for optimal performance and reliability.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {technologies.map((tech, index) => (
            <div key={index} className="tech-badge">
              {tech.name}
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center group">
            <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 group-hover:bg-green-500/30 transition-colors duration-300">
              <Code className="h-8 w-8 text-green-400" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Face Recognition</h3>
            <p className="text-muted-foreground">
              Advanced facial detection and recognition using state-of-the-art machine learning algorithms.
            </p>
          </div>

          <div className="text-center group">
            <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors duration-300">
              <Database className="h-8 w-8 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Vector Indexing</h3>
            <p className="text-muted-foreground">
              Efficient similarity search and clustering using FAISS for lightning-fast photo organization.
            </p>
          </div>

          <div className="text-center group">
            <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-500/20 group-hover:bg-purple-500/30 transition-colors duration-300">
              <Zap className="h-8 w-8 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">User Interface</h3>
            <p className="text-muted-foreground">
              Intuitive and responsive interface built with PyQt5 for seamless user experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}