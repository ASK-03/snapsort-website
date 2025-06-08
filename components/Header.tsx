"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Github } from "lucide-react";
import GitHubStar from "@/components/GitHubStar";

import SnapSortLogo from "@/public/snapsort-logo.png"; 
import Image from "next/image";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    { name: "Features", href: "#features" },
    { name: "Tech Stack", href: "#tech-stack" },
    { name: "Download", href: "#download" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-card" : "bg-transparent"
      }`}
    >
      <div className="container max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <Image src={SnapSortLogo} alt="SnapSort Logo" width={40} height={40} className="h-10 w-10 rounded-full object-cover transition-transform duration-300 group-hover:scale-105" />
            <span className="text-xl font-bold text-foreground">SnapSort</span>
          </Link>


            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-6">
            {/* Desktop Navigation */}
            <nav className="flex items-center space-x-6">
              {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium px-2 py-1 rounded-md hover:bg-accent"
              >
                {item.name}
              </a>
              ))}
            </nav>
            <Button
              size="sm"
              className="flex items-center gap-2 font-semibold bg-gradient-to-r from-blue-900 to-blue-800 text-white hover:from-900/90 hover:to-blue-800/90 shadow-lg px-4 py-2 rounded-lg transition-all duration-200"
              asChild
            >
              <a
              href="https://github.com/ASK-03/SnapSort"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
              >
              <Github className="h-5 w-5" />
              <span>GitHub</span>
              <span className="ml-1">
                <GitHubStar />
              </span>
              </a>
            </Button>
            </div>

          {/* Mobile Menu Button */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden text-foreground"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] bg-background/95 backdrop-blur-sm border-border"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-8">
                  <Link href="/" className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-foreground">
                      SnapSort
                    </span>
                  </Link>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-foreground"
                  >
                  </Button>
                </div>

                <nav className="flex flex-col space-y-4 mb-8">
                  {navigationItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </nav>

                <div className="flex flex-col space-y-3 mt-auto">
                  <Button
                    variant="ghost"
                    className="justify-start text-muted-foreground hover:text-foreground mx-auto"
                    asChild
                  >
                    <a
                      href="https://github.com/ASK-03/snapsort"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-2 mx-auto" />
                      GitHub
                      <GitHubStar />
                    </a>
                  </Button>
                  
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
