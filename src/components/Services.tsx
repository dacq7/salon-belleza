
const services = [
  {
    title: "Corte & Peinado",
    img: "/images/corte.png",
    description:
      "Desde cortes clásicos hasta estilos modernos, cuidamos cada detalle para resaltar tu personalidad.",
  },
  {
    title: "Color & Mechas",
    img: "/images/color.png",
    description:
      "Colores vibrantes, mechas luminosas y técnicas profesionales para transformar tu look.",
  },
  {
    title: "Manicure & Pedicure",
    img: "/images/uñas.png",
    description:
      "Un cuidado completo para tus manos y pies con acabados duraderos y elegantes.",
  },
  {
    title: "Maquillaje & Novias",
    img: "/images/maquillaje.png",
    description:
      "Realzamos tu belleza natural con maquillaje profesional para toda ocasión, incluyendo novias.",
  },
  {
    title: "Tratamientos Capilares",
    img: "/images/tratamientos.png",
    description:
      "Hidratación profunda, nutrición y reparación para mantener tu cabello sano y radiante.",
  },
];

export function Services() {
  return (
    <section id="servicios" className="section bg-brand-dark text-white">
      <div className="container text-center">
        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-brand-secondary">
          Nuestros Servicios
        </h2>

        {/* Grid de servicios */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-brand-light/10 rounded-xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition border border-brand-primary/20"
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-28 h-28 object-cover mb-4 rounded-full border-2 border-brand-secondary"
              />
              <h3 className="text-xl font-semibold text-brand-secondary mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-brand-light/90">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

