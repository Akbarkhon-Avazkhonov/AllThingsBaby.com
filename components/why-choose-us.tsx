'use client';

export default function WhyChooseUsSection() {
  const reasons = [
    {
      title: 'Certified Organic',
      description: 'All products are certified organic and sustainably sourced',
      icon: '🌿',
    },
    {
      title: 'Safety Tested',
      description: 'Rigorous testing ensures safety for sensitive baby skin',
      icon: '✓',
    },
    {
      title: 'Eco-Friendly Packaging',
      description: 'Recyclable and biodegradable packaging materials',
      icon: '♻️',
    },
    {
      title: 'Expert Approved',
      description: 'Recommended by pediatricians and parents worldwide',
      icon: '⭐',
    },
  ];

  return (
    <section className="w-full py-20 px-4 md:px-8 bg-background/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display text-primary mb-4">
            Why Choose AllThingsBaby
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            We're committed to providing the safest, most sustainable products for your little ones
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-card hover:shadow-lg transition-all duration-300 border border-border hover:border-primary/50 text-center"
            >
              <div className="text-5xl mb-4">{reason.icon}</div>
              <h3 className="font-display text-xl text-foreground mb-2">
                {reason.title}
              </h3>
              <p className="text-sm text-foreground/70">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
