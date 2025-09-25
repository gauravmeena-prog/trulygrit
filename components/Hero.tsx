export default function Hero() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-5xl px-6 py-24 md:py-28">
        <h1 className="text-[var(--fs-h1)] leading-tight font-heading font-semibold tracking-tightish text-gray-900">
          Truly Grit isn't just a name.<br className="hidden md:block" />
          It's a mission to create brands with courage.
        </h1>
        {/* Optional supporting line
        <p className="mt-4 max-w-2xl text-gray-600 leading-snug">
          No fluff. Just bold strategies that drive real growth.
        </p>
        */}
      </div>
    </section>
  );
}
