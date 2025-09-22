
const team = [
  {
    name: "Laura Gómez",
    role: "Cortes & Peinados",
    img: `${import.meta.env.BASE_URL}images/stylist1.png`,
  },
  {
    name: "Ana Torres",
    role: "Coloración & Mechas",
    img: `${import.meta.env.BASE_URL}images/stylist2.png`,
  },
  {
    name: "Carolina Pérez",
    role: "Manicure & Pedicure",
    img: `${import.meta.env.BASE_URL}images/stylist3.png`,
  },
  {
    name: "Sofía Martínez",
    role: "Maquillaje Profesional",
    img: `${import.meta.env.BASE_URL}images/stylist4.png`,
  },
];

export function Team() {
  return (
    <section id="equipo" className="section bg-brand-dark text-white">
      <div className="container text-center">
        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-brand-secondary">
          Nuestro Equipo
        </h2>

        {/* Grid de equipo */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-brand-light/10 p-6 rounded-xl shadow-lg hover:scale-105 transition border border-brand-primary/20"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-32 h-32 object-cover rounded-full border-2 border-brand-secondary mb-4"
              />
              <h3 className="text-lg font-semibold text-brand-secondary">
                {member.name}
              </h3>
              <p className="text-sm text-brand-light/90">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

