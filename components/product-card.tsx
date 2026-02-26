interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  category: string;
  isOrganic?: boolean;
}

export default function ProductCard({
  id,
  name,
  image,
  category,
  isOrganic = true,
}: ProductCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      {/* Card Background */}
      <div className="bg-white rounded-2xl overflow-hidden h-full">
        {/* Image Container */}
        <div className="relative overflow-hidden bg-muted h-64 sm:h-72 flex items-center justify-center">
          <div className="w-full h-full bg-gradient-to-br from-background to-background/50 flex items-center justify-center">
            <svg
              className="w-32 h-32 text-primary/20"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
            </svg>
          </div>
          <img
            src={image}
            alt={name}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />

          {/* Eco Badge */}
          {isOrganic && (
            <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md">
              Organic
            </div>
          )}

          {/* Category Label */}
          <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur text-foreground px-3 py-1 rounded-full text-xs font-medium">
            {category}
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6">
          <p className="text-xs text-foreground/60 uppercase tracking-wider mb-2">
            {category}
          </p>

          <h3 className="font-display text-lg sm:text-xl text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {name}
          </h3>

          <p className="text-foreground/70 text-sm mb-4">
            Premium quality, eco-conscious design
          </p>

          {/* Button */}
          <div className="flex items-center justify-center pt-4 border-t border-border">
            <button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-lg px-6 py-2 text-sm font-semibold transition-all duration-300 transform hover:scale-105">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
