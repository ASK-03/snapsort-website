'use client';

import { Button } from '@/components/ui/button';
import { Download, ArrowRight } from 'lucide-react';
import { links, heroContent } from '@/lib/content';

export default function Hero() {
  return (
    <section className="relative min-h-screen h-fit flex items-center justify-center px-6 py-24">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-background via-muted/10 blur-2xl opacity-50 z-0" />

      {/* Glow Circles */}
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse z-0" />

      <div className="relative z-10 max-w-3xl w-full text-center space-y-10">
        {/* Heading */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground animate-fade-in-up">
            {heroContent.title}
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto animate-fade-in-up delay-100">
            {heroContent.description}
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up delay-200">
          <Button size="lg" className="hover:scale-105 transition-transform" asChild>
            <a href="#download">
              <Download className="h-5 w-5 mr-2" />
              {heroContent.cta.download}
            </a>
          </Button>
          <Button variant="outline" size="lg" className="hover:scale-105 transition-transform" asChild>
            <a href="#features">
              {heroContent.cta.learnMore}
              <ArrowRight className="h-5 w-5 ml-2" />
            </a>
          </Button>
        </div>

        {/* Video Demo - Floating slightly into next viewport */}
      <div className="relative z-0 mt-40 w-full max-w-6xl transform translate-y-1/3">
        <div className="aspect-video rounded-xl overflow-hidden shadow-xl border border-border bg-background">
          <iframe
            src={links.demo}
            title="SnapSort Demo"
            className="w-full h-full"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
      </div>
    </section>
  );
}
  