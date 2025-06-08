import Link from 'next/link';
import { Heart, Github, Twitter, Mail } from 'lucide-react';
import { links, footerContent } from '@/lib/content';

import SnapSortLogo from "@/public/snapsort-logo.png"; 
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Image src={SnapSortLogo} alt="SnapSort Logo" width={40} height={40} className="h-10 w-10 rounded-full object-cover transition-transform duration-300 hover:scale-105" />
              <span className="text-xl font-bold text-foreground">{footerContent.title}</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
             {footerContent.description}
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm">
                  Features
                </a>
              </li>
              <li>
                <a href="#tech-stack" className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm">
                  Tech Stack
                </a>
              </li>
              <li>
                <a href="#download" className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm">
                  Download
                </a>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href={links.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a 
                  href={links.contributeGuidelines} 
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm"
                >
                  Contribute
                </a>
              </li>
              <li>
                <a 
                  href={links.mail}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-border">
            <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} SnapSort. All rights reserved.
            </p>
          
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <a 
              href={links.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href={links.x}
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a 
              href={links.mail}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}