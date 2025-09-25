export default function Hero() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-4xl px-6 py-24 md:py-28 text-center">
        <h1 className="text-[var(--fs-h1)] leading-tight font-heading font-semibold tracking-tightish text-gray-900 mb-8">
          <span className="block text-gray-900/90">
            Every Campaign We Launch
          </span>
          <span className="block bg-gradient-to-r from-primary via-orange-500 to-primary bg-clip-text text-transparent font-extrabold">
            Tells a Story
          </span>
          <span className="block text-gray-900/80">
            — and That Story Ends in Results.
          </span>
        </h1>
        
        {/* Decorative underline */}
        <div className="mx-auto mb-8 h-1 w-24 bg-gradient-to-r from-primary to-orange-500 rounded-full" />
        
        <p className="text-lg text-gray-600 font-medium max-w-2xl mx-auto leading-snug">
          We don't just create marketing campaigns. We craft narratives that connect, inspire, and drive your business forward with measurable impact.
        </p>
      </div>
    </section>
  );
}
