import Navigation from '@/components/navigation';
import HeroSection from '@/components/hero-section';
import FeaturedProductsSection from '@/components/featured-products-section';
import NewsletterSignup from '@/components/newsletter-signup';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main
      className="min-h-screen w-full"
      style={{
        backgroundImage: 'url(/bg-page.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <Navigation />
      <HeroSection />
      <FeaturedProductsSection />
      <NewsletterSignup />
      <Footer />
    </main>
  );
}
