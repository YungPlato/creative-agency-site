import Image from 'next/image';

const images = [
  { src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1887', alt: 'Cafe' },
  { src: 'https://images.unsplash.com/photo-1562322140-888a8d1fb361?q=80&w=1887', alt: 'Salon' },
  { src: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070', alt: 'E-Commerce' },
  { src: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974', alt: 'Groceries' }
];

export default function ImageGrid() {
  return (
    <section id="gallery" className="container mx-auto px-6 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Visuals That Tell Your Story</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {images.map(img => (
          <div key={img.src} className="relative aspect-[4/3] overflow-hidden rounded-xl group">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        ))}
      </div>
    </section>
  );
}

