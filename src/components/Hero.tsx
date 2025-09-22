export const Hero = () => {
  return (
    <section className="relative bg-brand-dark text-white h-[90vh] flex items-center justify-center">
      <div className="container text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Bienvenido a{" "}
          <span className="text-brand-secondary">Salón Glamour</span>
        </h1>
        <p className="text-lg md:text-xl text-brand-light/80 max-w-2xl mx-auto mb-8">
          Belleza, estilo y cuidado profesional en un solo lugar. Reserva tu cita
          hoy y vive la experiencia Glamour.
        </p>
        <a
          href="#contacto"
          className="inline-block bg-brand-secondary text-brand-dark font-semibold px-6 py-3 rounded-lg hover:bg-brand-primary transition"
        >
          Reserva tu cita
        </a>
      </div>

      {/* Imagen de fondo */}
      <img
        src={`${import.meta.env.BASE_URL}images/hero-salon.png`}
        alt="Salón Glamour"
        className="absolute inset-0 w-full h-full object-cover opacity-40 -z-10"
      />
    </section>
  );
};



