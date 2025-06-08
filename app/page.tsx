import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import TechStack from '@/components/TechStack';
import GetStarted from '@/components/GetStarted';
import Contribute from '@/components/Contribute';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="scroll-smooth max-w-[960px] mx-auto">
      <Header />
      <main>
        <Hero />
        <Features />
        <TechStack />
        <GetStarted />
        <Contribute />
      </main>
      <Footer />
    </div>
  );
}