import Navigation from '@/components/navigation';
import HeroSection from '@/components/hero-section';
import WhyChooseUsSection from '@/components/why-choose-us';
import BenefitsSection from '@/components/benefits-section';
import FeaturedProductsSection from '@/components/featured-products-section';
import CategoriesSection from '@/components/categories-section';
import TestimonialsSection from '@/components/testimonials-section';
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
      <WhyChooseUsSection />
      <BenefitsSection />
      <FeaturedProductsSection />
      <CategoriesSection />
      <TestimonialsSection />
      <NewsletterSignup />
      <Footer />
    </main>
  );
}
