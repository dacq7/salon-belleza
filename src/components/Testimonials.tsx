
const testimonials = [
  {
    name: "María López",
    text: "El servicio es espectacular, me hice un cambio de look y quedé fascinada. La atención fue muy profesional.",
  },
  {
    name: "Camila Rodríguez",
    text: "Mi maquillaje para la boda fue increíble. Me sentí hermosa y recibí muchos elogios.",
  },
  {
    name: "Valentina Gómez",
    text: "La manicura fue perfecta, muy detallada y duradera. Recomiendo totalmente este salón.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonios" className="section bg-brand-dark text-white">
      <div className="container text-center">
        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-brand-secondary">
          Lo que dicen nuestras clientas
        </h2>

        {/* Grid de testimonios */}
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-brand-light/10 p-6 rounded-xl shadow-lg border border-brand-primary/20 hover:scale-105 transition"
            >
              <p className="italic text-brand-light/90 mb-4">“{t.text}”</p>
              <h3 className="text-lg font-semibold text-brand-secondary">
                – {t.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
