'use client';

export default function CategoriesSection() {
  const categories = [
    {
      name: 'Swaddles & Wraps',
      description: 'Soft organic cotton for cozy comfort',
      color: 'bg-primary/10',
      icon: '🛏️',
    },
    {
      name: 'Bath & Care',
      description: 'Gentle products for sensitive skin',
      color: 'bg-secondary/10',
      icon: '🚿',
    },
    {
      name: 'Toys & Play',
      description: 'Natural rubber and eco-friendly toys',
      color: 'bg-accent/10',
      icon: '🎨',
    },
    {
      name: 'Feeding Essentials',
      description: 'Safe and sustainable feeding products',
      color: 'bg-primary/10',
      icon: '🍼',
    },
    {
      name: 'Sleep Solutions',
      description: 'Comfortable bedding and sleep gear',
      color: 'bg-secondary/10',
      icon: '😴',
    },
    {
      name: 'Travel Gear',
      description: 'Portable essentials for on-the-go parents',
      color: 'bg-accent/10',
      icon: '✈️',
    },
  ];

  return (
    <section className="w-full py-20 px-4 md:px-8 bg-background/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display text-primary mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Find everything you need for your little one
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`${category.color} p-8 rounded-2xl text-left hover:shadow-lg transition-all duration-300 border border-border hover:border-primary/50 group cursor-pointer`}
            >
              <div className="text-5xl mb-4">{category.icon}</div>
              <h3 className="font-display text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                {category.name}
              </h3>
              <p className="text-sm text-foreground/70">{category.description}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
