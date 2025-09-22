

const pricingPlans = [
  {
    title: "Básico",
    price: "$78.000 COP",
    description: "Ideal para un look rápido y sencillo.",
    features: ["Corte de cabello", "Peinado básico", "Lavado"],
  },
  {
    title: "Premium",
    price: "$156.000 COP",
    description: "El plan más popular para un estilo completo.",
    features: [
      "Corte y peinado",
      "Coloración o mechas",
      "Tratamiento capilar",
      "Lavado y secado",
    ],
  },
  {
    title: "Novias",
    price: "$364.000 COP",
    description: "Perfecto para el gran día, incluye prueba previa.",
    features: [
      "Maquillaje profesional",
      "Peinado especial",
      "Manicure y pedicure",
      "Prueba de maquillaje y peinado",
    ],
  },
];

const individualServices = [
  {
    title: "Tintura completa",
    price: "$117.000 COP",
    description: "Color uniforme de raíz a puntas con productos de alta calidad.",
  },
  {
    title: "Manicure & Pedicure",
    price: "$65.000 COP",
    description: "Cuidado completo de manos y pies con esmaltado tradicional.",
  },
  {
    title: "Tratamiento Capilar",
    price: "$91.000 COP",
    description: "Hidratación profunda y reparación para mantener tu cabello sano.",
  },
];

export function Pricing() {
  return (
    <section id="precios" className="section bg-brand-dark text-white">
      <div className="container text-center">
        {/* Paquetes */}
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-brand-secondary">
          Nuestros Paquetes
        </h2>
        <div className="grid gap-8 md:grid-cols-3 mb-16">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="bg-brand-light/10 p-6 rounded-xl shadow-lg border border-brand-primary/20 hover:scale-105 transition flex flex-col"
            >
              <h3 className="text-xl font-semibold text-brand-secondary mb-2">
                {plan.title}
              </h3>
              <p className="text-2xl font-bold text-brand-secondary mb-4">
                {plan.price}
              </p>
              <p className="text-sm text-brand-light/90 mb-6">
                {plan.description}
              </p>
              <ul className="text-left text-sm flex-1 mb-6 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="text-brand-light/90">
                    • {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full py-2 px-4 rounded-lg bg-brand-secondary text-brand-dark font-semibold hover:bg-brand-primary transition">
                Reservar
              </button>
            </div>
          ))}
        </div>

        {/* Servicios individuales */}
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-brand-secondary">
          Servicios Individuales
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {individualServices.map((service, index) => (
            <div
              key={index}
              className="bg-brand-light/10 p-6 rounded-xl shadow-lg border border-brand-primary/20 hover:scale-105 transition flex flex-col"
            >
              <h3 className="text-xl font-semibold text-brand-secondary mb-2">
                {service.title}
              </h3>
              <p className="text-2xl font-bold text-brand-secondary mb-4">
                {service.price}
              </p>
              <p className="text-sm text-brand-light/90 mb-6">
                {service.description}
              </p>
              <button className="w-full py-2 px-4 rounded-lg bg-brand-secondary text-brand-dark font-semibold hover:bg-brand-primary transition">
                Reservar
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
