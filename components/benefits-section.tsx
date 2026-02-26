'use client';

export default function BenefitsSection() {
  return (
    <section className="w-full py-20 px-4 md:px-8 bg-gradient-to-r from-primary/5 to-accent/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-display text-primary mb-6">
              Pure Beginnings, Naturally
            </h2>
            <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
              Every product in our collection is carefully curated to support your baby's health and comfort while protecting our planet.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="text-primary text-2xl font-bold mt-1">•</div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Gentle on Sensitive Skin</h3>
                  <p className="text-foreground/70 text-sm">Hypoallergenic, dermatologist-tested formulations</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-primary text-2xl font-bold mt-1">•</div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Sustainable Production</h3>
                  <p className="text-foreground/70 text-sm">Made with renewable resources and ethical practices</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-primary text-2xl font-bold mt-1">•</div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Free from Harmful Chemicals</h3>
                  <p className="text-foreground/70 text-sm">No plasticizers, synthetic dyes, or heavy metals</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Visual */}
          <div className="bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-3xl p-8 h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="text-7xl mb-4">🌱</div>
              <p className="text-foreground/60">Eco-friendly baby care that you can trust</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
