import React, { useState, useEffect } from 'react';
import { menuItems, galleryImages } from './data/menu';
import { CONTACT_INFO, generateWhatsAppLink } from './data/config';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('Entradas');
  const [lightboxImg, setLightboxImg] = useState(null);
  
  // Estado del formulario
  const [formData, setFormData] = useState({ name: '', phone: '', people: '', date: '', time: '', message: '' });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = [...new Set(menuItems.map(item => item.category))];
  const featuredItems = menuItems.filter(item => item.featured).slice(0, 3);
  const filteredMenu = menuItems.filter(item => item.category === activeCategory);

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitReservation = (e) => {
    e.preventDefault();
    const msg = `Hola BRASA, quiero solicitar una reserva:
Nombre: ${formData.name}
Personas: ${formData.people}
Fecha: ${formData.date}
Hora: ${formData.time}
Mensaje: ${formData.message || 'Sin mensaje adicional'}`;
    
    // Abre WhatsApp con los datos
    window.open(generateWhatsAppLink(msg), '_blank');
    
    // Resetea el formulario visualmente
    alert("Te redirigiremos a WhatsApp para confirmar la disponibilidad de tu mesa.");
    setFormData({ name: '', phone: '', people: '', date: '', time: '', message: '' });
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-content">
          <a href="#" className="logo">BRA<span>SA</span>.</a>
          
          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menú">
            {menuOpen ? '✕' : '☰'}
          </button>

          <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <li><a href="#inicio" onClick={() => setMenuOpen(false)}>Inicio</a></li>
            <li><a href="#menu" onClick={() => setMenuOpen(false)}>Menú</a></li>
            <li><a href="#galeria" onClick={() => setMenuOpen(false)}>Galería</a></li>
            <li><a href="#nosotros" onClick={() => setMenuOpen(false)}>Nosotros</a></li>
            <li><a href="#reservas" onClick={() => setMenuOpen(false)}>Reservas</a></li>
          </ul>
        </div>
      </nav>

      {/* HERO */}
      <header id="inicio" className="hero">
        <div className="hero-content">
          <span className="section-subtitle">Cocina Argentina Premium</span>
          <h1>El sabor argentino,<br/>llevado a la brasa.</h1>
          <p>Cortes seleccionados, ingredientes autóctonos y una experiencia pensada para compartir alrededor del fuego.</p>
          <div className="hero-btns">
            <a href="#menu" className="btn btn-outline">Ver menú</a>
            <a href="#reservas" className="btn btn-primary">Reservar mesa</a>
          </div>
        </div>
      </header>

      {/* ESPECIALIDADES (Destacados) */}
      <section className="section-pad specialties">
        <div className="container">
          <span className="section-subtitle">Selección del Chef</span>
          <h2 className="section-title">Especialidades</h2>
          <div className="grid-3">
            {featuredItems.map(item => (
              <article key={item.id} className="card-featured">
                <img src={item.img} alt={item.name} loading="lazy" />
                <div className="card-featured-overlay">
                  <span style={{color: 'var(--accent)', fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '0.5rem'}}>{item.category}</span>
                  <h3 style={{marginBottom: '0.5rem'}}>{item.name}</h3>
                  <p style={{fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)'}}>{item.price}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MENÚ DIGITAL */}
      <section id="menu" className="section-pad">
        <div className="container">
          <span className="section-subtitle">Nuestra Carta</span>
          <h2 className="section-title">Menú</h2>
          
          <div className="menu-filters">
            {categories.map(cat => (
              <button 
                key={cat} 
                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="menu-grid">
            {filteredMenu.map(item => (
              <div key={item.id} className="menu-item">
                <img src={item.img} alt={item.name} className="menu-item-img" loading="lazy" />
                <div className="menu-item-info">
                  <div className="menu-item-header">
                    <h3 className="menu-item-title">{item.name}</h3>
                    <span className="menu-item-price">{item.price}</span>
                  </div>
                  <p className="menu-item-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALERÍA CON LIGHTBOX */}
      <section id="galeria" className="section-pad" style={{background: 'var(--bg-surface)'}}>
        <div className="container">
          <span className="section-subtitle">El Ambiente</span>
          <h2 className="section-title">Galería</h2>
          <div className="gallery-grid">
            {galleryImages.map((img, i) => (
              <div key={i} className="gallery-item" onClick={() => setLightboxImg(img)}>
                <img src={img} alt={`Experiencia Brasa ${i+1}`} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Overlay */}
      {lightboxImg && (
        <div className="lightbox" onClick={() => setLightboxImg(null)}>
          <button className="lightbox-close" onClick={() => setLightboxImg(null)}>✕</button>
          <img src={lightboxImg} alt="Imagen ampliada" onClick={(e) => e.stopPropagation()} />
        </div>
      )}

      {/* NOSOTROS Y UBICACIÓN */}
      <section id="nosotros" className="section-pad">
        <div className="container">
          <div style={{maxWidth: '800px', margin: '0 auto 4rem', textAlign: 'center'}}>
            <span className="section-subtitle">Nuestra Historia</span>
            <h2 className="section-title" style={{marginBottom: '1.5rem'}}>Fuego, Madera y Tiempo</h2>
            <p style={{color: 'var(--text-muted)'}}>
              <em>*Contenido Demostrativo*</em> En BRASA honramos la tradición argentina del asado, elevándola con técnicas modernas. No somos solo un restaurante, somos el resultado de la pasión por los buenos cortes, la maduración perfecta y el humo de quebracho que envuelve cada uno de nuestros platos.
            </p>
          </div>

          <div className="info-grid">
            <div className="info-block">
              <h3 style={{color: 'var(--text-main)', marginBottom: '1rem'}}>Ubicación</h3>
              <p>{CONTACT_INFO.address}</p>
              <a href={CONTACT_INFO.mapUrl} className="btn btn-outline" style={{marginTop: '1rem', padding: '0.5rem 1rem'}}>Ver mapa</a>
            </div>
            <div className="info-block">
              <h3 style={{color: 'var(--text-main)', marginBottom: '1rem'}}>Horarios</h3>
              <p>{CONTACT_INFO.hours}</p>
            </div>
            <div className="info-block">
              <h3 style={{color: 'var(--text-main)', marginBottom: '1rem'}}>Contacto</h3>
              <p>{CONTACT_INFO.phone}</p>
              <p>{CONTACT_INFO.email}</p>
            </div>
          </div>
        </div>
      </section>

      {/* RESERVAS (Formulario) */}
      <section id="reservas" className="section-pad reservation-section">
        <div className="container">
          <span className="section-subtitle">Asegurá tu lugar</span>
          <h2 className="section-title">Reservar Mesa</h2>
          
          <form className="form-grid" onSubmit={submitReservation}>
            <div className="form-group">
              <input type="text" name="name" value={formData.name} onChange={handleFormChange} placeholder="Nombre completo" className="form-control" required />
            </div>
            <div className="form-group">
              <input type="tel" name="phone" value={formData.phone} onChange={handleFormChange} placeholder="Teléfono" className="form-control" required />
            </div>
            <div className="form-group">
              <select name="people" value={formData.people} onChange={handleFormChange} className="form-control" required>
                <option value="" disabled>Cantidad de personas</option>
                <option value="1">1 Persona</option>
                <option value="2">2 Personas</option>
                <option value="3">3 Personas</option>
                <option value="4">4 Personas</option>
                <option value="5+">5 o más (Contactar)</option>
              </select>
            </div>
            <div className="form-group" style={{display: 'flex', gap: '1rem'}}>
              <input type="date" name="date" value={formData.date} onChange={handleFormChange} className="form-control" required />
              <input type="time" name="time" value={formData.time} onChange={handleFormChange} className="form-control" required />
            </div>
            <div className="form-group full">
              <textarea name="message" value={formData.message} onChange={handleFormChange} placeholder="Mensaje adicional (Opcional, ej: alergias, celebraciones)" className="form-control" rows="3"></textarea>
            </div>
            <div className="form-group full" style={{textAlign: 'center', marginTop: '1rem'}}>
              <button type="submit" className="btn btn-primary" style={{width: '100%', maxWidth: '300px'}}>Confirmar Disponibilidad</button>
            </div>
          </form>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section-pad" style={{textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)'}}>
        <div className="container">
          <h2 style={{fontSize: 'clamp(2rem, 4vw, 2.5rem)', marginBottom: '1.5rem'}}>Tu mesa está a un mensaje de distancia.</h2>
          <a href={generateWhatsAppLink("Hola, quiero realizar una consulta general.")} target="_blank" rel="noreferrer" className="btn btn-primary">
            Reservar por WhatsApp
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <span className="logo" style={{display: 'block', marginBottom: '1rem'}}>BRA<span>SA</span>.</span>
              <p style={{color: 'var(--text-muted)', fontSize: '0.9rem'}}>Proyecto demostrativo de desarrollo web gastronómico premium.</p>
            </div>
            <div className="footer-col">
              <h4>Secciones</h4>
              <ul>
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#menu">Menú</a></li>
                <li><a href="#galeria">Galería</a></li>
                <li><a href="#reservas">Reservas</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Contacto</h4>
              <ul>
                <li><a href={generateWhatsAppLink("Hola!")} target="_blank" rel="noreferrer">WhatsApp</a></li>
                <li><a href="#">{CONTACT_INFO.instagram}</a></li>
                <li><a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} BRASA Cocina Argentina. Proyecto Demostrativo.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;