import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Github, Star, GitFork } from 'lucide-react';
import { links } from '@/lib/content';

export default function Contribute() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Contribute to SnapSort
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We welcome contributions from the community! If you're interested in helping improve SnapSort, please check out our contributing guidelines on GitHub. Star our repository to show your support and stay updated on the latest developments.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            variant="outline"
            size="lg"
            className="transition-all duration-300"
            asChild
          >
            <a href={links.contributeGuidelines} target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 mr-2" />
              Contributing Guidelines
            </a>
          </Button>
          <Button 
            size="lg"
            className="transition-all duration-300"
            asChild
          >
            <a href={links.github} target="_blank" rel="noopener noreferrer">
              <Star className="h-5 w-5 mr-2" />
              Star on GitHub
            </a>
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="glass-card hover:bg-accent/50 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <Github className="h-8 w-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Open Source</h3>
              <p className="text-muted-foreground text-sm">
                Completely open source and community-driven development.
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card hover:bg-accent/50 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <Star className="h-8 w-8 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Community Support</h3>
              <p className="text-muted-foreground text-sm">
                Active community of contributors and users helping each other.
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card hover:bg-accent/50 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <GitFork className="h-8 w-8 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Easy to Contribute</h3>
              <p className="text-muted-foreground text-sm">
                Well-documented codebase makes it easy to get started contributing.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}