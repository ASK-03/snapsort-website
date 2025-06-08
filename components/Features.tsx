import { Card, CardContent } from '@/components/ui/card';
import { Image as ImageIcon, Eye, Search, Users } from 'lucide-react';

const features = [
  {
    icon: ImageIcon,
    title: 'Image Scanning',
    description: 'Quickly scan folders for JPEG and PNG images.',
  },
  {
    icon: Eye,
    title: 'Face Detection & Indexing',
    description: 'Detect and index faces using face_recognition and FAISS for efficient searching.',
  },
  {
    icon: Search,
    title: 'Browse by Face',
    description: 'Easily browse your photos by the faces detected.',
  },
  {
    icon: Users,
    title: 'Group Matching Images',
    description: 'Automatically group images with matching faces for better organization.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Key Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            SnapSort offers a range of powerful features to help you manage your photo collection effectively.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="glass-card hover:bg-accent/50 transition-all duration-300 transform hover:scale-105 group"
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors duration-300">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}