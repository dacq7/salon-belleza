import React, { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    fecha: "",
    mensaje: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
    alert("✅ Tu solicitud de reserva ha sido enviada. Nos pondremos en contacto pronto.");
    setFormData({ nombre: "", email: "", telefono: "", fecha: "", mensaje: "" });
  };

  return (
    <section id="contacto" className="section bg-brand-dark text-white">
      <div className="container text-center max-w-2xl">
        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 text-brand-secondary">
          Reserva tu cita
        </h2>
        <p className="text-brand-light/90 mb-10">
          Completa el formulario y agenda tu cita con nosotros. ¡Te responderemos lo antes posible!
        </p>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="space-y-6 text-left">
          <div>
            <label className="block mb-2 text-sm font-semibold">Nombre</label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-brand-light/10 border border-brand-primary/20 text-white focus:outline-none focus:ring-2 focus:ring-brand-secondary"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-brand-light/10 border border-brand-primary/20 text-white focus:outline-none focus:ring-2 focus:ring-brand-secondary"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-semibold">Teléfono</label>
            <input
              type="tel"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-brand-light/10 border border-brand-primary/20 text-white focus:outline-none focus:ring-2 focus:ring-brand-secondary"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-semibold">Fecha de la cita</label>
            <input
              type="date"
              name="fecha"
              value={formData.fecha}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-brand-light/10 border border-brand-primary/20 text-white focus:outline-none focus:ring-2 focus:ring-brand-secondary"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-semibold">Mensaje (opcional)</label>
            <textarea
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              rows={4}
              placeholder="Escribe algún detalle sobre el servicio que deseas..."
              className="w-full p-3 rounded-lg bg-brand-light/10 border border-brand-primary/20 text-white focus:outline-none focus:ring-2 focus:ring-brand-secondary"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-6 rounded-lg bg-brand-secondary text-brand-dark font-semibold hover:bg-brand-primary transition"
          >
            Enviar Reserva
          </button>
        </form>
      </div>
    </section>
  );
}
