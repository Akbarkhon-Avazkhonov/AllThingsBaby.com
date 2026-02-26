'use client';

import { useState } from 'react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="w-full py-16 sm:py-24 bg-gradient-to-b from-background to-primary/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Container with Organic Shape */}
        <div className="relative">
          {/* Decorative Blobs */}
          <div className="absolute -top-8 -left-8 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />

          {/* Content */}
          <div className="relative bg-white rounded-3xl shadow-lg p-8 sm:p-12 lg:p-16 border border-border/50">
            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="font-display text-3xl sm:text-4xl text-foreground mb-3">
                Join Our Community
              </h2>
              <p className="text-foreground/60 text-lg">
                Get exclusive offers, parenting tips, and eco-friendly product launches delivered to your inbox.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-medium"
                required
              />
              <button
                type="submit"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-display font-semibold transition-all duration-300 transform hover:scale-105 whitespace-nowrap shadow-md"
              >
                {submitted ? 'Subscribed!' : 'Subscribe'}
              </button>
            </form>

            {/* Success Message */}
            {submitted && (
              <div className="mt-4 text-center text-primary font-medium animate-fade-in">
                Thank you for subscribing! Check your email for a welcome offer.
              </div>
            )}

            {/* Privacy Note */}
            <p className="text-center text-sm text-foreground/50 mt-6">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
