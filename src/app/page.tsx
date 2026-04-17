import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import DeliveryProcessSection from '@/components/DeliveryProcessSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <DeliveryProcessSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}
