import SafeImage from './SafeImage';

const images = [
  { src: 'https://images.unsplash.com/photo-1644088379091-d574269d422f?q=80&w=1800', alt: 'Abstract blue data points' },
  { src: 'https://images.unsplash.com/photo-1579567761406-4684ee0c75b6?q=80&w=1800', alt: 'Futuristic data visualization' },
  { src: 'https://images.unsplash.com/photo-1650473395434-8674d953ef2f?q=80&w=1800', alt: 'Neural network concept' },
  { src: 'https://images.unsplash.com/photo-1510906594845-bc082582c8cc?q=80&w=1800', alt: 'Flowing light trails' }
];

export default function ImageGrid() {
  return (
    <section id="gallery" className="container mx-auto px-6 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Visuals That Tell Your Story</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {images.map(img => (
          <div key={img.src} className="relative aspect-[4/3] overflow-hidden rounded-xl group">
            <SafeImage
              src={img.src}
              alt={img.alt}
              fill
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur text-xs text-gray-200">
                <span className="h-1.5 w-1.5 rounded-full bg-brandCyan" /> {img.alt}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

