export const CONTACT_INFO = {
  whatsappNumber: "5491123456789",
  phone: "+5493516807135",
  email: "reservas@demo-brasa.com",
  instagram: "@brasa.demo",
  address: "Av. Ficticia 456, Palermo Soho, CABA",
  hours: "Martes a Domingos: 19:30 a 01:00 hs.",
  mapUrl: "#" // Demo link
};

export const generateWhatsAppLink = (message) => {
  return `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
};