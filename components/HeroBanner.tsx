interface HeroBannerProps {
  title: string;
  subtitle?: string;
  description?: string;
}

export default function HeroBanner({ title, subtitle, description }: HeroBannerProps) {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {subtitle && (
          <p className="text-blue-100 text-sm font-semibold uppercase tracking-wide mb-2">
            {subtitle}
          </p>
        )}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {title}
        </h1>
        {description && (
          <p className="text-xl text-blue-100 max-w-3xl">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
