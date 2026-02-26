'use client';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'Parent of Twin Babies',
      content: 'AllThingsBaby products have been a game-changer for us. My babies have sensitive skin and these are the only products that don\'t cause irritation.',
      rating: 5,
    },
    {
      name: 'Dr. Jennifer Lee',
      role: 'Pediatrician',
      content: 'I confidently recommend AllThingsBaby to all my patients. The quality and safety standards are exceptional.',
      rating: 5,
    },
    {
      name: 'Emma Rodriguez',
      role: 'First-Time Mom',
      content: 'I love knowing that I\'m making an environmentally responsible choice while caring for my baby. The products are beautiful and effective.',
      rating: 5,
    },
  ];

  return (
    <section className="w-full py-20 px-4 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display text-primary mb-4">
            Loved by Parents
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Thousands of families trust AllThingsBaby for their baby's care
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-card border border-border hover:shadow-lg transition-all duration-300 hover:border-primary/50"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-accent text-xl">★</span>
                ))}
              </div>
              <p className="text-foreground/80 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-foreground/60">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
