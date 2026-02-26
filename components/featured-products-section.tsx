import ProductCard from './product-card';

const FEATURED_PRODUCTS = [
  {
    id: '1',
    name: 'Organic Cotton Swaddle Set',
    price: 45.99,
    image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&h=400&fit=crop',
    category: 'Swaddles',
    isOrganic: true,
  },
  {
    id: '2',
    name: 'Bamboo Baby Gear Organizer',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1516627145497-ae3ddd112185?w=400&h=400&fit=crop',
    category: 'Gear',
    isOrganic: true,
  },
  {
    id: '3',
    name: 'Natural Rubber Baby Toys',
    price: 28.99,
    image: 'https://images.unsplash.com/photo-1515640552472-4c5957f4d5fe?w=400&h=400&fit=crop',
    category: 'Toys',
    isOrganic: true,
  },
  {
    id: '4',
    name: 'Gentle Baby Skincare Kit',
    price: 52.99,
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=400&fit=crop',
    category: 'Skincare',
    isOrganic: true,
  },
  {
    id: '5',
    name: 'Organic Sleep Sack',
    price: 38.99,
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c9da8d?w=400&h=400&fit=crop',
    category: 'Swaddles',
    isOrganic: true,
  },
  {
    id: '6',
    name: 'Eco-Friendly Baby Monitor',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1516627145497-ae3ddd112185?w=400&h=400&fit=crop',
    category: 'Gear',
    isOrganic: true,
  },
];

export default function FeaturedProductsSection() {
  return (
    <section id="products" className="w-full py-16 sm:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-primary font-display text-sm uppercase tracking-wider mb-2">
            Shop Our Collection
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground mb-4 text-balance">
            Featured Products
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Handpicked essentials for every stage of your baby's journey
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {['All', 'Swaddles', 'Gear', 'Toys', 'Skincare'].map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                category === 'All'
                  ? 'bg-primary text-white'
                  : 'bg-muted text-foreground hover:bg-primary/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {FEATURED_PRODUCTS.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-4 rounded-xl font-display text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
}
