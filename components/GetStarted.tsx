import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Download } from 'lucide-react';
import { links, getStartedContent } from '@/lib/content';

export default function GetStarted() {
  return (
    <section id="download" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="glass-card max-w-4xl mx-auto">
          <CardContent className="p-8 sm:p-12 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {getStartedContent.title}
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {getStartedContent.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={links.release.windows}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="transition-all duration-300 transform hover:scale-105"
                  >
                    <Download className="h-5 w-5 mr-2" />
                    Windows
                  </Button>
                </a>
                <a
                  href={links.release.linux}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="secondary"
                    size="lg"
                    className="transition-all duration-300 transform hover:scale-105"
                  >
                    Ubuntu
                    <Download className="h-5 w-5 ml-2" />
                  </Button>
                </a>
                <a
                  href={links.release.macos}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="transition-all duration-300 transform hover:scale-105"
                  >
                    macOS
                    <Download className="h-5 w-5 ml-2" />
                  </Button>
                </a>
            </div>

            <div className="mt-8 grid sm:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-foreground mb-1">Fast</div>
                <div className="text-muted-foreground text-sm">Lightning-quick face detection</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground mb-1">Accurate</div>
                <div className="text-muted-foreground text-sm">Precise facial recognition</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground mb-1">Open Source</div>
                <div className="text-muted-foreground text-sm">Completely free and open</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}