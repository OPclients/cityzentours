const pages = [
  ["Home", "nav.home", "index.html"],
  ["Tours", "nav.tours", "tours.html"],
  ["Transport", "nav.transport", "transport.html"],
  ["About", "nav.about", "about.html"],
  ["Contact", "nav.contact", "contact.html"],
];

const legalLinks = [
  ["footer.legal.privacy", "privacy.html"],
  ["footer.legal.refund", "refund.html"],
  ["footer.legal.terms", "terms.html"],
];

const languages = ["en", "fr", "ar"];
const defaultLanguage = "fr";
const languageStorageKey = "cityzen-language";
const pageName = document.body.dataset.page || "Home";
const whatsappNumber = "212600000000";
const businessEmail = "hello@cityzentours.example";
let currentLanguage = defaultLanguage;
let menuIsOpen = false;
let menuToggleButton;

const pageMetaKeys = {
  Home: "meta.home",
  Tours: "meta.tours",
  Transport: "meta.transport",
  About: "meta.about",
  Contact: "meta.contact",
  "Privacy Policy": "meta.privacy",
  "Refund Policy": "meta.refund",
  "Terms & Conditions": "meta.terms",
};

const translations = {
  en: {
    "meta.home.title": "CityZen Tours | Custom Tours & Luxury Transport in Morocco",
    "meta.home.description": "Private custom tours in Morocco and luxury transport services with private chauffeur.",
    "meta.tours.title": "Private Tours in Morocco | CityZen Tours",
    "meta.tours.description": "Private custom tours in Morocco for Marrakech, Fes, Chefchaouen, Merzouga, Casablanca, Rabat, and Essaouira.",
    "meta.transport.title": "Luxury Transport | CityZen Tours",
    "meta.transport.description": "Luxury transport, airport transfers, VIP private chauffeur and city-to-city rides in Morocco.",
    "meta.about.title": "About | CityZen Tours",
    "meta.about.description": "About CityZen Tours, specialist in private custom journeys and luxury transport in Morocco.",
    "meta.contact.title": "Contact | CityZen Tours",
    "meta.contact.description": "Contact CityZen Tours for custom Morocco tours and luxury transport.",
    "meta.privacy.title": "Privacy Policy | CityZen Tours",
    "meta.privacy.description": "Privacy Policy for CityZen Tours.",
    "meta.refund.title": "Refund Policy | CityZen Tours",
    "meta.refund.description": "Refund Policy for CityZen Tours and transport.",
    "meta.terms.title": "Terms & Conditions | CityZen Tours",
    "meta.terms.description": "Terms and Conditions for CityZen Tours and transport.",

    "nav.home": "Home",
    "nav.tours": "Tours",
    "nav.transport": "Transport",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.cta": "Start Planning",
    "nav.menu.open": "Open menu",
    "nav.menu.close": "Close menu",
    "brand.homeLabel": "CityZen Tours home",
    "brand.logoAlt": "CityZen Tours logo",

    "language.label": "Choose language",
    "language.english": "Switch to English",
    "language.french": "Switch to French",
    "language.arabic": "Switch to Arabic",

    "footer.description": "Private Moroccan journeys, elegant chauffeur services, and luxury transport arranged around your schedule, style, and pace.",
    "footer.navigation": "Navigation",
    "footer.services": "Services",
    "footer.service.customTours": "Custom tours",
    "footer.service.luxuryTransport": "Luxury transport",
    "footer.service.airportTransfers": "Airport transfers",
    "footer.service.privateChauffeur": "Private chauffeur",
    "footer.legal.title": "Legal",
    "footer.legal.privacy": "Privacy Policy",
    "footer.legal.refund": "Refund Policy",
    "footer.legal.terms": "Terms & Conditions",
    "footer.contact": "Contact",
    "footer.location": "Marrakech, Morocco<br>Available across Morocco",
    "footer.copyright": "Copyright {year} CityZen Tours. All rights reserved.",
    "footer.tagline": "Luxury custom tours and private chauffeur service in Morocco.",

    "home.hero.title": "Private Moroccan Tours & Luxury Transport, Designed Around You",
    "home.hero.subtitle": "Personalized private tours, VIP transfers, luxury vehicles, airport welcome, city-to-city rides, and private chauffeur service across Morocco.",
    "home.hero.toursCta": "Plan Your Custom Tour",
    "home.hero.transportCta": "Book Luxury Transport",
    "home.custom.title": "Tours shaped around your rhythm and desires.",
    "home.custom.body": "Every itinerary is fully personalized around your interests, dates, accommodation, travel style, and the cities you wish to discover. We handle every detail so each day feels fluid, exclusive, and authentically Moroccan.",
    "home.feature.itinerary.title": "Tailor-made itineraries",
    "home.feature.itinerary.body": "From medina walks to magical desert nights, every route is designed around your wishes for a unique and personalized experience.",
    "home.feature.local.title": "Private local experience",
    "home.feature.local.body": "Enjoy discreet guidance, elegant pacing, and privileged access to Morocco’s most authentic places.",
    "home.feature.flexible.title": "Flexible schedule",
    "home.feature.flexible.body": "Travel at your own rhythm with flexible pickup times and days organized around your preferences.",
    "home.cities.title": "Morocco, city by city.",
    "home.cities.body": "Elegant private journeys through imperial cities, blue mountain streets, Atlantic light, and the dunes of the Sahara.",
    "home.cities.cta": "Explore Tours",
    "home.city.marrakech": "Marrakech",
    "home.city.marrakech.body": "Palaces, souks, riads, gardens, and hidden medina streets.",
    "home.city.fes": "Fes",
    "home.city.fes.body": "Ancient craftsmanship, sacred history, tanneries, gates, and souks.",
    "home.city.casablanca": "Casablanca",
    "home.city.casablanca.body": "Coastal energy, modern boulevards, and Hassan II Mosque.",
    "home.city.chefchaouen": "Chefchaouen",
    "home.city.chefchaouen.body": "Blue streets, mountain viewpoints, kasbah corners, and calm.",
    "home.city.merzouga": "Merzouga Desert",
    "home.city.merzouga.body": "Erg Chebbi dunes, camel rides, sunset, and luxury camp nights.",
    "home.city.essaouira": "Essaouira",
    "home.city.essaouira.body": "Ocean medina, art galleries, seafood, ramparts, and sea air.",
    "home.vehicles.title": "Luxury vehicles for every private journey.",
    "home.vehicles.body": "Choose refined comfort for airport arrivals, business travel, VIP tours, events, and long-distance transfers.",
    "home.vehicle.vclass.body": "Executive comfort for families, VIP guests, and private tours.",
    "home.vehicle.eclass.body": "Elegant sedan service for airport transfers and business travel.",
    "home.vehicle.sprinter.body": "Comfortable movement for tours, weddings, events, and conferences.",
    "home.vehicle.range.body": "Premium SUV presence for mountain roads, events, and distinguished arrivals.",
    "home.vehicle.prado.body": "Reliable 4x4 comfort for Atlas routes, long-distance transfers, and desert access.",
    "home.vehicle.skoda.body": "Reliable comfort for long-distance rides and varied itineraries.",
    "home.confidence.title": "Quiet confidence from arrival to farewell.",
    "home.confidence.body": "Your journey is managed with discretion, precision, comfort, and local knowledge, whether you need a full itinerary or one perfectly orchestrated transfer.",
    "home.confidence.planning": "Custom tour planning",
    "home.confidence.vehicles": "Comfortable luxury vehicles",
    "home.confidence.drivers": "Professional private drivers",
    "home.confidence.pickup": "Airport and hotel pickup",
    "home.confidence.multilingual": "Multilingual service",
    "home.confidence.support": "Premium client support",
    "home.finalCta.title": "Tell us your dream Moroccan journey, and we will design it for you.",
    "home.finalCta.button": "Contact Us",

    "vehicle.capacity": "Passenger capacity:",
    "vehicle.serviceType": "Service type:",
    "vehicle.upTo3": "Up to 3",
    "vehicle.upTo4": "Up to 4",
    "vehicle.upTo6": "Up to 6",
    "vehicle.upTo17": "Up to 17",
    "vehicle.vipTourismTransport": "VIP tourism transport",
    "vehicle.airportBusiness": "Airport and business",
    "vehicle.groupTransport": "Group transport",
    "vehicle.premium4x4": "Premium 4x4 routes",
    "vehicle.longDistance": "Long-distance transfers",
    "vehicle.privateChauffeur": "Private chauffeur",
    "vehicle.familiesVip": "Families and VIP tourism",
    "vehicle.premiumSuv": "Premium SUV transport",
    "vehicle.book": "Book Now",

    "tours.hero.title": "Private Tours in Morocco",
    "tours.hero.body": "Every tour is personalized around your interests, dates, budget, preferred cities, and travel style.",
    "tours.hero.cta": "Request a Custom Tour",
    "tours.marrakech.title": "Marrakech Medina & Palaces",
    "tours.marrakech.body": "Visit Jemaa el-Fnaa, Majorelle Garden, Bahia Palace, Koutoubia Mosque, souks, traditional riads, and hidden medina streets at your pace with thoughtful private guidance.",
    "tours.marrakech.item1": "Jemaa el-Fnaa, an essential place where culture, traditions, and energy meet",
    "tours.marrakech.item2": "Bahia Palace, Koutoubia, and historic riad architecture",
    "tours.marrakech.item3": "Garden visits, artisan encounters, and photography stops",
    "tours.fes.title": "Fes Cultural Tour",
    "tours.fes.body": "Discover the old medina, the Al Quaraouiyine district, the famous tanneries, artisan workshops, historic gates, and traditional souks with a local guide and custom private service.",
    "tours.fes.item1": "Old medina routes and historic city gates",
    "tours.fes.item2": "Tanneries, artisan workshops, and traditional souks",
    "tours.fes.item3": "Private cultural guidance at your rhythm",
    "tours.chefchaouen.title": "Chefchaouen, the Blue City",
    "tours.chefchaouen.body": "Walk blue streets, mountain viewpoints, artisan shops, the kasbah, and peaceful medina corners in one of Morocco’s most poetic towns.",
    "tours.chefchaouen.item1": "Blue streets and quiet medina corners",
    "tours.chefchaouen.item2": "Mountain viewpoints and the kasbah quarter",
    "tours.chefchaouen.item3": "Artisan shops and relaxed private timing",
    "tours.merzouga.title": "Merzouga Desert",
    "tours.merzouga.body": "Discover the Erg Chebbi dunes, a camel ride, a luxury desert camp, sunset and sunrise, Berber music, and a private 4x4 excursion.",
    "tours.merzouga.item1": "Erg Chebbi dunes at sunset and sunrise",
    "tours.merzouga.item2": "Luxury desert camp and Berber music",
    "tours.merzouga.item3": "Camel ride and private 4x4 excursion",
    "tours.casablanca.title": "Casablanca & Rabat",
    "tours.casablanca.body": "Visit Hassan II Mosque, the Corniche, Mohammed V Square, Rabat’s Kasbah of the Udayas, Hassan Tower, and the Royal Palace surroundings.",
    "tours.casablanca.item1": "Hassan II Mosque and Casablanca Corniche",
    "tours.casablanca.item2": "Kasbah of the Udayas in Rabat and Hassan Tower",
    "tours.casablanca.item3": "Modern city highlights with private transfers",
    "tours.essaouira.title": "Essaouira Coastal Tour",
    "tours.essaouira.body": "Visit the ocean medina, Skala de la Ville, fishing port, beach, art galleries, and seafood restaurants, with time to enjoy Atlantic air and artisan streets.",
    "tours.essaouira.item1": "Ocean medina, ramparts, and fishing port",
    "tours.essaouira.item2": "Art galleries, beach walk, and seafood stops",
    "tours.essaouira.item3": "Relaxed coastal day trip from Marrakech",
    "tours.card.cta": "Ask About This Tour",

    "transport.hero.title": "Luxury Transport & Private Chauffeur Service",
    "transport.hero.body": "VIP transfers, airport welcome, city-to-city rides, tourist transport, events, and private chauffeur service across Morocco.",
    "transport.hero.cta": "Book Your Ride",
    "transport.choose.title": "Choose your private vehicle.",
    "transport.choose.body": "Each ride is arranged around your comfort, luggage needs, passenger count, destination, and desired level of discretion.",
    "transport.vehicle.vclass.body": "Spacious premium cabin for private tours and airport arrivals.",
    "transport.vehicle.eclass.body": "Elegant sedan for solo travelers, couples, and airport transfers.",
    "transport.vehicle.sprinter.body": "Comfortable group movement for tours, weddings, events, and conferences.",
    "transport.vehicle.range.body": "Luxury SUV for mountain roads, events, private arrivals, and premium 4x4 routes.",
    "transport.vehicle.prado.body": "Reliable comfort for long distances, Atlas roads, and desert access.",
    "transport.vehicle.skoda.body": "Reliable comfort for long-distance rides and varied itineraries.",
    "transport.services.title": "Transport services arranged with precision",
    "transport.services.body": "From airport welcome to desert roads, every journey is planned with rigor, punctuality, and professionalism. We provide our travelers with reliable service, comfort, and personalized support at every stage.",
    "transport.services.airport.title": "Airport transfers",
    "transport.services.airport.body": "Pickup on arrival, luggage assistance, and a smooth ride to your hotel in absolute comfort.",
    "transport.services.city.title": "Private city-to-city transfers",
    "transport.services.city.body": "Travel through Morocco with peace of mind thanks to comfortable vehicles and professional support at each stage.",
    "transport.services.chauffeur.title": "Private chauffeur",
    "transport.services.chauffeur.body": "Custom private rides with a dedicated chauffeur, combining discretion, punctuality, and luxury comfort.",
    "transport.services.events.title": "Events & VIP transport",
    "transport.services.events.body": "Elegant, perfectly organized transport for weddings, private evenings, business appointments, and prestige events.",
    "transport.services.tourist.title": "Tourist transport",
    "transport.services.tourist.body": "Comfortable, air-conditioned vehicles for sightseeing days and multi-destination journeys with flexibility.",
    "transport.services.pickup.title": "Premium pickup service",
    "transport.services.pickup.body": "From hotels, riads, villas, restaurants, and private or event venues, with punctuality, comfort, and dedicated assistance.",
    "transport.finalCta.title": "Need luxury transport in Morocco? Contact us so we can recommend the ideal vehicle for your movements.",
    "transport.finalCta.button": "Contact Us",

    "about.hero.title": "Moroccan travel, privately composed.",
    "about.hero.body": "Discover Morocco at your own rhythm through custom private journeys combining premium comfort, authentic local knowledge, and attentive professional service.",
    "about.story.title": "Our Story",
    "about.story.p1": "At CityZen Tours, we created a more personal way to discover Morocco, where every journey unfolds with fluidity, comfort, and elegance. By combining private planning and premium transport, we design refined experiences where each stage flows naturally, from your arrival to your most memorable discoveries.",
    "about.story.p2": "Our team always begins by listening: your dates, interests, hotel, travel rhythm, vehicle preferences, and the experiences that truly matter to you. Each itinerary is then carefully shaped to offer a private, harmonious, and authentically Moroccan journey.",
    "about.stats.clients": "Happy clients",
    "about.stats.cities": "Cities covered",
    "about.stats.vehicles": "Luxury vehicles",
    "about.stats.years": "Years of experience",
    "about.mission.title": "Our Mission",
    "about.mission.body": "To design private Moroccan journeys that feel elegant, human, and reliable, pairing immersive local experiences with premium transport standards.",
    "about.values.title": "Our values",
    "about.values.body": "Discretion, punctuality, hospitality, local respect, safety, and attention to detail.",
    "about.trust.title": "Why clients trust us",
    "about.trust.body": "Clear communication, private chauffeurs, flexible planning, and support throughout the journey.",
    "about.luxuryTransport.title": "Luxury transport",
    "about.luxuryTransport.body": "Clean vehicles, professional chauffeurs, and smooth transfers between every stage.",
    "about.customTours.title": "Custom tours",
    "about.customTours.body": "Private itineraries shaped around culture, gastronomy, architecture, nature, and comfort.",
    "about.timing.title": "Luxury is in the timing.",
    "about.timing.body": "A premium journey is not only a beautiful hotel or an immaculate vehicle. It is the feeling that every pickup, pause, route, view, and local encounter has been considered before you arrive.",
    "about.timing.cta": "Plan With Us",

    "contact.hero.title": "Begin your private Morocco experience.",
    "contact.hero.body": "Tell us where you want to go, how you like to travel, and what service you need. We will prepare a refined proposal.",
    "contact.reserve.title": "Reserve your journey.",
    "contact.reserve.body": "Share your itinerary details and preferences. Our team will confirm availability and prepare a refined tour or transport proposal.",
    "contact.form.title": "Booking request",
    "contact.form.body": "A dedicated coordinator will review your request and reply with the best route, vehicle, and timing.",
    "form.section.itinerary": "Itinerary details",
    "form.section.contact": "Contact and preferences",
    "form.label.serviceDestination": "Service or destination",
    "form.label.vehicle": "Preferred vehicle",
    "form.label.pickup": "Pickup location",
    "form.label.datetime": "Date and time",
    "form.label.name": "Full name",
    "form.label.phone": "WhatsApp / phone number",
    "form.label.email": "Email",
    "form.label.people": "Number of people",
    "form.label.requests": "Special requests",
    "form.placeholder.destination": "Select your destination...",
    "form.placeholder.vehicle": "Select the category...",
    "form.placeholder.pickup": "Hotel, Airport, or Riad",
    "form.placeholder.name": "Your name",
    "form.placeholder.phone": "+...",
    "form.placeholder.email": "your@email.com",
    "form.placeholder.people": "Ex: 2",
    "form.placeholder.requests": "Flight numbers, child seats, or specific requests...",
    "form.option.customTour": "Custom Morocco Tour",
    "form.option.marrakech": "Marrakech",
    "form.option.fes": "Fes",
    "form.option.chefchaouen": "Chefchaouen",
    "form.option.merzouga": "Merzouga Desert",
    "form.option.casablanca": "Casablanca & Rabat",
    "form.option.essaouira": "Essaouira",
    "form.option.airport": "Airport Transfer",
    "form.option.luxuryTransport": "Luxury Transport",
    "form.option.privateChauffeur": "Private Chauffeur",
    "form.option.vclass": "Mercedes-Benz V-Class",
    "form.option.eclass": "Mercedes-Benz E-Class",
    "form.option.sclass": "Mercedes-Benz S-Class",
    "form.option.range": "Range Rover",
    "form.option.prado": "Toyota Prado",
    "form.option.h1": "Hyundai H1 VIP Van",
    "form.option.minibus": "Luxury Minibus",
    "form.option.noVehicle": "No vehicle needed",
    "form.submit": "Request Reservation",
    "form.status.error": "An error occurred. Please try again or contact us on WhatsApp.",
    "form.status.success": "Thank you, your request has been sent successfully. We will contact you soon.",
    "form.email.subject": "New Tour / Transport Reservation Request",
    "form.email.heading": "New Tour / Transport Reservation Request",
    "contact.info.whatsapp.body": "Fastest response for itinerary and transport requests.",
    "contact.info.email.body": "For detailed programs, business bookings, and event transport.",
    "contact.info.area.title": "Service Area",
    "contact.info.area.body": "Morocco, including Marrakech, Fes, Casablanca, Rabat, Chefchaouen, Merzouga, and Essaouira.",
    "contact.info.availability.title": "Availability",
    "contact.info.availability.body": "7/7 on request for private tours, transfers, events, and chauffeur service.",
    "contact.area.title": "Service area",
    "contact.area.body": "Marrakech, Casablanca, Rabat, Fes, Tangier, Chefchaouen, Essaouira, Agafay, Atlas Mountains, Merzouga, and long-distance routes across Morocco.",
    "contact.area.cta": "WhatsApp Us Now",
    "contact.coverage.title": "Morocco Coverage",
    "contact.coverage.body": "Airport pickup, private chauffeur, tour transport, and city-to-city transfers from the country’s major travel hubs.",

    "legal.eyebrow": "Legal",
    "privacy.title": "Privacy Policy",
    "privacy.updated": "<strong>Last updated:</strong> May 19, 2026. This Privacy Policy explains how CityZen Tours collects and uses information when you request custom tours, luxury transport, airport transfers, or chauffeur services.",
    "privacy.collect.title": "Information We Collect",
    "privacy.collect.body": "We may collect your name, email address, phone number, travel dates, number of guests, preferred services, pickup locations, destination details, and messages you send through our forms, WhatsApp, email, or phone.",
    "privacy.use.title": "How We Use Information",
    "privacy.use.body": "Your information is used to respond to inquiries, prepare tour or transport proposals, coordinate bookings, manage pickup details, provide client support, and improve our services.",
    "privacy.share.title": "Sharing Information",
    "privacy.share.body": "We only share necessary details with trusted drivers, guides, hotels, camps, or service partners when required to deliver the requested service. We do not sell your personal information.",
    "privacy.retention.title": "Data Retention",
    "privacy.retention.body": "We keep booking and inquiry records for a reasonable period to manage service history, accounting, legal obligations, and client support.",
    "privacy.choices.title": "Your Choices",
    "privacy.choices.body": "You may request access, correction, or deletion of your personal information by contacting us at hello@cityzentours.example.",
    "refund.title": "Refund Policy",
    "refund.updated": "<strong>Last updated:</strong> May 19, 2026. This Refund Policy applies to private tours, luxury transport, airport transfers, chauffeur services, and related reservations arranged by CityZen Tours.",
    "refund.deposits.title": "Deposits and Reservations",
    "refund.deposits.body": "Some bookings may require a deposit to reserve vehicles, drivers, guides, hotels, camps, or partner services. Deposit terms will be shared before confirmation.",
    "refund.cancel.title": "Client Cancellations",
    "refund.cancel.body": "Cancellations made more than 7 days before the service date may be eligible for a partial refund after deducting non-refundable partner costs. Cancellations within 7 days may be non-refundable depending on the service and suppliers involved.",
    "refund.sameDay.title": "Same-Day Transport",
    "refund.sameDay.body": "Airport transfers, chauffeur service, and same-day transport cancellations may be charged if the driver or vehicle has already been dispatched.",
    "refund.changes.title": "Changes to Bookings",
    "refund.changes.body": "We will do our best to adjust dates, pickup times, routes, and vehicle categories when availability allows. Price changes may apply for revised services.",
    "refund.weather.title": "Weather and Force Majeure",
    "refund.weather.body": "If weather, road closures, safety concerns, or events beyond our control affect your trip, we may offer an alternative route, date change, credit, or partial refund depending on the circumstances.",
    "terms.title": "Terms & Conditions",
    "terms.updated": "<strong>Last updated:</strong> May 19, 2026. By requesting or booking a service with CityZen Tours, you agree to these Terms & Conditions.",
    "terms.services.title": "Services",
    "terms.services.body": "We provide custom private tours, luxury transport, airport transfers, private chauffeur service, VIP event transport, and city-to-city transfers in Morocco. Final service details are based on written confirmation.",
    "terms.client.title": "Client Responsibilities",
    "terms.client.body": "Clients are responsible for providing accurate names, contact details, pickup times, luggage requirements, flight information, accommodation details, and any special needs before service begins.",
    "terms.pricing.title": "Pricing and Payment",
    "terms.pricing.body": "Prices depend on route, duration, vehicle category, number of guests, season, partner availability, and included experiences. Payment terms will be provided before booking confirmation.",
    "terms.adjustments.title": "Itinerary Adjustments",
    "terms.adjustments.body": "Custom tours may be adjusted for safety, weather, traffic, opening hours, local conditions, or client preferences. We aim to preserve the quality of the experience while keeping timing realistic.",
    "terms.liability.title": "Limitations of Liability",
    "terms.liability.body": "We are not responsible for delays or losses caused by flight changes, traffic, road closures, weather, third-party suppliers, personal belongings, or events outside our reasonable control.",
    "terms.contact.title": "Contact",
    "terms.contact.body": "Questions about these terms may be sent to hello@cityzentours.example or through our Contact page.",
  },
  fr: {
    "meta.home.title": "CityZen Tours | Circuits sur mesure & transport de luxe au Maroc",
    "meta.home.description": "Circuits privés sur mesure au Maroc et services de transport de luxe avec chauffeur privé.",
    "meta.tours.title": "Circuits privés au Maroc | CityZen Tours",
    "meta.tours.description": "Circuits privés sur mesure au Maroc pour Marrakech, Fès, Chefchaouen, Merzouga, Casablanca, Rabat et Essaouira.",
    "meta.transport.title": "Transport de luxe | CityZen Tours",
    "meta.transport.description": "Transport de luxe, transferts aéroportuaires, chauffeur privé VIP et trajets interurbains au Maroc.",
    "meta.about.title": "À propos | CityZen Tours",
    "meta.about.description": "À propos de CityZen Tours, spécialiste des voyages privés sur mesure et du transport de luxe au Maroc.",
    "meta.contact.title": "Contact | CityZen Tours",
    "meta.contact.description": "Contactez CityZen Tours pour vos circuits sur mesure au Maroc et vos services de transport de luxe.",
    "meta.privacy.title": "Politique de confidentialité | CityZen Tours",
    "meta.privacy.description": "Politique de confidentialité de CityZen Tours.",
    "meta.refund.title": "Politique de remboursement | CityZen Tours",
    "meta.refund.description": "Politique de remboursement de CityZen Tours et de ses services de transport.",
    "meta.terms.title": "Conditions générales | CityZen Tours",
    "meta.terms.description": "Conditions générales de CityZen Tours et de ses services de transport.",

    "nav.home": "Accueil",
    "nav.tours": "Circuits",
    "nav.transport": "Transport",
    "nav.about": "À propos",
    "nav.contact": "Contact",
    "nav.cta": "Commencer à planifier",
    "nav.menu.open": "Ouvrir le menu",
    "nav.menu.close": "Fermer le menu",
    "brand.homeLabel": "Accueil CityZen Tours",
    "brand.logoAlt": "Logo CityZen Tours",

    "language.label": "Choisir la langue",
    "language.english": "Passer en anglais",
    "language.french": "Passer en français",
    "language.arabic": "Passer en arabe",

    "footer.description": "Voyages privés au Maroc, services de chauffeur élégants et transport de luxe organisés selon vos horaires, votre style et votre rythme.",
    "footer.navigation": "Navigation",
    "footer.services": "Services",
    "footer.service.customTours": "Circuits sur mesure",
    "footer.service.luxuryTransport": "Transport de luxe",
    "footer.service.airportTransfers": "Transferts aéroportuaires",
    "footer.service.privateChauffeur": "Chauffeur privé",
    "footer.legal.title": "Mentions légales",
    "footer.legal.privacy": "Politique de confidentialité",
    "footer.legal.refund": "Politique de remboursement",
    "footer.legal.terms": "Conditions générales",
    "footer.contact": "Contact",
    "footer.location": "Marrakech, Maroc<br>Disponible dans tout le Maroc",
    "footer.copyright": "Copyright {year} CityZen Tours. Tous droits réservés.",
    "footer.tagline": "Circuits de luxe sur mesure et service de chauffeur privé au Maroc.",

    "home.hero.title": "Circuits privés au Maroc & transport de luxe, pensés pour vous",
    "home.hero.subtitle": "Circuits privés sur mesure, transferts VIP, véhicules haut de gamme, accueil aéroportuaire, trajets interurbains et service de chauffeur privé à travers tout le Maroc.",
    "home.hero.toursCta": "Planifier votre circuit",
    "home.hero.transportCta": "Réserver un transport de luxe",
    "home.custom.title": "Des circuits conçus selon votre rythme et vos envies.",
    "home.custom.body": "Chaque itinéraire est entièrement personnalisé en fonction de vos centres d’intérêt, de vos dates, du lieu de votre hébergement, de votre style de voyage et des villes que vous souhaitez découvrir. Nous prenons en charge chaque détail afin que chaque journée soit fluide, exclusive et authentiquement marocaine.",
    "home.feature.itinerary.title": "Itinéraires sur mesure",
    "home.feature.itinerary.body": "Des balades dans la médina aux nuits magiques dans le désert, chaque itinéraire est conçu selon vos envies pour une expérience unique et personnalisée.",
    "home.feature.local.title": "Expérience locale privée",
    "home.feature.local.body": "Profitez d’un accompagnement discret, d’un rythme élégant et d’un accès privilégié aux lieux les plus authentiques du Maroc.",
    "home.feature.flexible.title": "Calendrier flexible",
    "home.feature.flexible.body": "Voyagez à votre rythme grâce à des horaires de prise en charge souples et des journées organisées selon vos envies.",
    "home.cities.title": "Le Maroc, ville par ville.",
    "home.cities.body": "Des voyages privés élégants entre cités impériales, ruelles bleues de montagne, lumière atlantique et dunes du Sahara.",
    "home.cities.cta": "Découvrir les circuits",
    "home.city.marrakech": "Marrakech",
    "home.city.marrakech.body": "Palais, souks, riads, jardins et ruelles cachées de la médina.",
    "home.city.fes": "Fès",
    "home.city.fes.body": "Artisanat ancestral, histoire sacrée, tanneries, portes et souks.",
    "home.city.casablanca": "Casablanca",
    "home.city.casablanca.body": "Énergie côtière, boulevards modernes et mosquée Hassan II.",
    "home.city.chefchaouen": "Chefchaouen",
    "home.city.chefchaouen.body": "Ruelles bleues, belvédères de montagne, kasbah et douceur.",
    "home.city.merzouga": "Désert de Merzouga",
    "home.city.merzouga.body": "Dunes de l’Erg Chebbi, balade à dos de chameau, coucher de soleil et nuits en camp de luxe.",
    "home.city.essaouira": "Essaouira",
    "home.city.essaouira.body": "Médina océane, galeries d’art, fruits de mer, remparts et air marin.",
    "home.vehicles.title": "Des véhicules de luxe pour chaque voyage privé.",
    "home.vehicles.body": "Choisissez un confort raffiné pour vos arrivées à l’aéroport, vos déplacements professionnels, vos circuits VIP, vos événements et vos transferts longue distance.",
    "home.vehicle.vclass.body": "Confort exécutif pour les familles, les invités VIP et les circuits privés.",
    "home.vehicle.eclass.body": "Berline élégante pour les transferts aéroportuaires et les voyages d’affaires.",
    "home.vehicle.sprinter.body": "Déplacements confortables pour circuits, mariages, événements et conférences.",
    "home.vehicle.range.body": "SUV premium pour routes de montagne, événements et arrivées distinguées.",
    "home.vehicle.prado.body": "4x4 fiable et confortable pour l’Atlas, les transferts longue distance et l’accès au désert.",
    "home.vehicle.skoda.body": "Confort fiable pour les trajets longue distance et les itinéraires variés.",
    "home.confidence.title": "Une sérénité discrète, de l’arrivée au départ.",
    "home.confidence.body": "Votre voyage est géré avec discrétion, précision, confort et connaissance locale, que vous ayez besoin d’un itinéraire complet ou d’un transfert parfaitement orchestré.",
    "home.confidence.planning": "Planification de circuits sur mesure",
    "home.confidence.vehicles": "Véhicules de luxe confortables",
    "home.confidence.drivers": "Chauffeurs privés professionnels",
    "home.confidence.pickup": "Prise en charge à l’aéroport et à l’hôtel",
    "home.confidence.multilingual": "Service multilingue",
    "home.confidence.support": "Assistance client haut de gamme",
    "home.finalCta.title": "Confiez-nous le voyage marocain dont vous rêvez, nous le dessinerons pour vous.",
    "home.finalCta.button": "Nous contacter",

    "vehicle.capacity": "Capacité passagers :",
    "vehicle.serviceType": "Type de service :",
    "vehicle.upTo3": "Jusqu’à 3",
    "vehicle.upTo4": "Jusqu’à 4",
    "vehicle.upTo6": "Jusqu’à 6",
    "vehicle.upTo17": "Jusqu’à 17",
    "vehicle.vipTourismTransport": "Transport touristique VIP",
    "vehicle.airportBusiness": "Aéroport et affaires",
    "vehicle.groupTransport": "Transport de groupe",
    "vehicle.premium4x4": "Itinéraires premium 4x4",
    "vehicle.longDistance": "Transferts longue distance",
    "vehicle.privateChauffeur": "Chauffeur privé",
    "vehicle.familiesVip": "Familles et tourisme VIP",
    "vehicle.premiumSuv": "Transport SUV premium",
    "vehicle.book": "Réserver",

    "tours.hero.title": "Circuits privés au Maroc",
    "tours.hero.body": "Chaque circuit est personnalisé selon vos centres d’intérêt, vos dates, votre budget, les villes souhaitées et votre style de voyage.",
    "tours.hero.cta": "Demander un circuit sur mesure",
    "tours.marrakech.title": "Médina et palais de Marrakech",
    "tours.marrakech.body": "Visitez Jemaa el-Fnaa, le jardin Majorelle, le palais Bahia, la mosquée Koutoubia, les souks, les riads traditionnels et les ruelles cachées de la médina, à votre rythme et avec un accompagnement privé soigné.",
    "tours.marrakech.item1": "Jemaa el-Fnaa, lieu incontournable où culture, traditions et énergie se rencontrent",
    "tours.marrakech.item2": "Palais Bahia, Koutoubia et architecture historique des riads",
    "tours.marrakech.item3": "Visites de jardins, rencontres avec des artisans et arrêts photo",
    "tours.fes.title": "Visite culturelle de Fès",
    "tours.fes.body": "Découvrez l’ancienne médina, le quartier d’Al Quaraouiyine, les célèbres tanneries, les ateliers d’artisans, les portes historiques et les souks traditionnels, accompagnés d’un guide local et d’un service privé sur mesure.",
    "tours.fes.item1": "Parcours dans l’ancienne médina et portes historiques",
    "tours.fes.item2": "Tanneries, ateliers d’artisans et souks traditionnels",
    "tours.fes.item3": "Accompagnement culturel privé à votre rythme",
    "tours.chefchaouen.title": "Chefchaouen, la ville bleue",
    "tours.chefchaouen.body": "Parcourez les ruelles bleues, les belvédères de montagne, les échoppes d’artisans, la kasbah et les coins paisibles de la médina dans l’une des villes les plus poétiques du Maroc.",
    "tours.chefchaouen.item1": "Ruelles bleues et coins tranquilles de la médina",
    "tours.chefchaouen.item2": "Belvédères de montagne et quartier de la kasbah",
    "tours.chefchaouen.item3": "Boutiques d’artisans et rythme privé détendu",
    "tours.merzouga.title": "Désert de Merzouga",
    "tours.merzouga.body": "Découvrez les dunes de l’Erg Chebbi, une balade à dos de chameau, un camp de luxe dans le désert, le coucher et le lever du soleil, la musique berbère et une excursion privée en 4x4.",
    "tours.merzouga.item1": "Dunes de l’Erg Chebbi au coucher et au lever du soleil",
    "tours.merzouga.item2": "Camp de luxe dans le désert et musique berbère",
    "tours.merzouga.item3": "Balade à dos de chameau et excursion privée en 4x4",
    "tours.casablanca.title": "Casablanca & Rabat",
    "tours.casablanca.body": "Visitez la mosquée Hassan II, la Corniche, la place Mohammed V, la kasbah des Oudayas à Rabat, la tour Hassan et les abords du Palais royal.",
    "tours.casablanca.item1": "Mosquée Hassan II et Corniche de Casablanca",
    "tours.casablanca.item2": "Kasbah des Oudayas à Rabat et tour Hassan",
    "tours.casablanca.item3": "Temps forts urbains avec transferts privés",
    "tours.essaouira.title": "Essaouira, circuit côtier",
    "tours.essaouira.body": "Visitez la médina océane, la Skala de la Ville, le port de pêche, la plage, les galeries d’art et les restaurants de fruits de mer, avec le temps de profiter de l’air atlantique et des rues artisanales.",
    "tours.essaouira.item1": "Médina océane, remparts et port de pêche",
    "tours.essaouira.item2": "Galeries d’art, promenade sur la plage et pauses fruits de mer",
    "tours.essaouira.item3": "Journée côtière détendue au départ de Marrakech",
    "tours.card.cta": "Demander ce circuit",

    "transport.hero.title": "Transport de luxe & service de chauffeur privé",
    "transport.hero.body": "Transferts VIP, accueil aéroportuaire, trajets interurbains, transport touristique, événements et service de chauffeur privé à travers tout le Maroc.",
    "transport.hero.cta": "Réserver votre trajet",
    "transport.choose.title": "Choisissez votre véhicule privé.",
    "transport.choose.body": "Chaque trajet est organisé selon votre confort, vos besoins de bagages, le nombre de passagers, votre destination et le niveau de discrétion souhaité.",
    "transport.vehicle.vclass.body": "Cabine premium spacieuse pour circuits privés et arrivées à l’aéroport.",
    "transport.vehicle.eclass.body": "Berline élégante pour voyageurs seuls, couples et transferts aéroportuaires.",
    "transport.vehicle.sprinter.body": "Déplacements de groupe confortables pour circuits, mariages, événements et conférences.",
    "transport.vehicle.range.body": "SUV de luxe pour routes de montagne, événements, arrivées privées et itinéraires 4x4 premium.",
    "transport.vehicle.prado.body": "Confort fiable pour les longues distances, les routes de l’Atlas et l’accès au désert.",
    "transport.vehicle.skoda.body": "Confort fiable pour les trajets longue distance et les itinéraires variés.",
    "transport.services.title": "Services de transport organisés avec précision",
    "transport.services.body": "De l’accueil à l’aéroport aux routes du désert, chaque trajet est planifié avec rigueur, ponctualité et professionnalisme. Nous assurons à nos voyageurs un service fiable, confortable et un accompagnement personnalisé à chaque étape du parcours.",
    "transport.services.airport.title": "Transferts aéroportuaires",
    "transport.services.airport.body": "Prise en charge dès votre arrivée, assistance avec vos bagages et trajet fluide vers votre hôtel dans un confort absolu.",
    "transport.services.city.title": "Transferts interurbains privés",
    "transport.services.city.body": "Voyagez à travers le Maroc en toute tranquillité grâce à des véhicules confortables et un accompagnement professionnel à chaque étape.",
    "transport.services.chauffeur.title": "Chauffeur privé",
    "transport.services.chauffeur.body": "Déplacements privés sur mesure avec chauffeur dédié, alliant discrétion, ponctualité et confort de luxe.",
    "transport.services.events.title": "Événements & transport VIP",
    "transport.services.events.body": "Des déplacements élégants et parfaitement organisés pour vos mariages, soirées privées, rendez-vous professionnels et événements de prestige.",
    "transport.services.tourist.title": "Transport touristique",
    "transport.services.tourist.body": "Des véhicules confortables et climatisés pour accompagner vos journées de découverte et vos voyages multi-destinations avec flexibilité.",
    "transport.services.pickup.title": "Prise en charge haut de gamme",
    "transport.services.pickup.body": "Depuis hôtels, riads, villas, restaurants et lieux privés ou événementiels, avec ponctualité, confort et assistance dédiée.",
    "transport.finalCta.title": "Besoin d’un transport de luxe au Maroc ? Contactez-nous afin que nous vous proposions le véhicule idéal pour vos déplacements.",
    "transport.finalCta.button": "Nous contacter",

    "about.hero.title": "Voyage marocain, composé en privé.",
    "about.hero.body": "Découvrez le Maroc à votre rythme grâce à des voyages privés sur mesure, combinant confort haut de gamme, connaissances locales authentiques et service professionnel attentionné.",
    "about.story.title": "Notre histoire",
    "about.story.p1": "Chez CityZen Tours, nous avons créé une manière plus personnelle de découvrir le Maroc, où chaque voyage se déroule avec fluidité, confort et élégance. En associant planification privée et transport haut de gamme, nous concevons des expériences raffinées où chaque étape s’enchaîne naturellement, de votre arrivée jusqu’à vos découvertes les plus mémorables.",
    "about.story.p2": "Notre équipe commence toujours par vous écouter : vos dates, vos centres d’intérêt, votre hôtel, votre rythme de voyage, vos préférences de véhicule et les expériences qui comptent vraiment pour vous. Chaque itinéraire est ensuite pensé avec soin pour offrir un voyage privé, harmonieux et authentiquement marocain.",
    "about.stats.clients": "Clients satisfaits",
    "about.stats.cities": "Villes desservies",
    "about.stats.vehicles": "Véhicules de luxe",
    "about.stats.years": "Années d’expérience",
    "about.mission.title": "Notre mission",
    "about.mission.body": "Concevoir des voyages privés au Maroc qui soient élégants, humains et fiables, en associant des expériences locales immersives à des standards de transport haut de gamme.",
    "about.values.title": "Nos valeurs",
    "about.values.body": "Discrétion, ponctualité, hospitalité, respect local, sécurité et attention aux détails.",
    "about.trust.title": "Pourquoi nos clients nous font confiance",
    "about.trust.body": "Communication claire, chauffeurs privés, planification flexible et assistance pendant le voyage.",
    "about.luxuryTransport.title": "Transport de luxe",
    "about.luxuryTransport.body": "Véhicules propres, chauffeurs professionnels et transferts fluides entre chaque étape.",
    "about.customTours.title": "Circuits sur mesure",
    "about.customTours.body": "Itinéraires privés autour de la culture, de la gastronomie, de l’architecture, de la nature et du confort.",
    "about.timing.title": "Le luxe est dans le timing.",
    "about.timing.body": "Un voyage haut de gamme ne se résume pas à un bel hôtel ou à un véhicule impeccable. C’est le sentiment que chaque prise en charge, chaque pause, chaque itinéraire, chaque vue et chaque rencontre locale a été pensé avant votre arrivée.",
    "about.timing.cta": "Planifier avec nous",

    "contact.hero.title": "Commencez votre expérience privée au Maroc.",
    "contact.hero.body": "Dites-nous où vous souhaitez aller, comment vous aimez voyager et le service dont vous avez besoin. Nous préparerons une proposition raffinée.",
    "contact.reserve.title": "Réservez votre voyage.",
    "contact.reserve.body": "Partagez les détails de votre itinéraire et vos préférences. Notre équipe confirmera les disponibilités et préparera une proposition raffinée de circuit ou de transport.",
    "contact.form.title": "Demande de réservation",
    "contact.form.body": "Un coordinateur dédié étudiera votre demande et vous répondra avec le meilleur itinéraire, le véhicule adapté et le timing idéal.",
    "form.section.itinerary": "Détails de l’itinéraire",
    "form.section.contact": "Contact et préférences",
    "form.label.serviceDestination": "Service ou destination",
    "form.label.vehicle": "Véhicule préféré",
    "form.label.pickup": "Lieu de prise en charge",
    "form.label.datetime": "Date et heure",
    "form.label.name": "Nom complet",
    "form.label.phone": "Numéro WhatsApp / téléphone",
    "form.label.email": "Email",
    "form.label.people": "Nombre de personnes",
    "form.label.requests": "Demandes particulières",
    "form.placeholder.destination": "Sélectionnez votre destination...",
    "form.placeholder.vehicle": "Sélectionnez la catégorie...",
    "form.placeholder.pickup": "Hôtel, Aéroport ou Riad",
    "form.placeholder.name": "Votre nom",
    "form.placeholder.phone": "+...",
    "form.placeholder.email": "votre@email.com",
    "form.placeholder.people": "Ex : 2",
    "form.placeholder.requests": "Numéros de vol, sièges enfants ou demandes spécifiques...",
    "form.option.customTour": "Circuit sur mesure au Maroc",
    "form.option.marrakech": "Marrakech",
    "form.option.fes": "Fès",
    "form.option.chefchaouen": "Chefchaouen",
    "form.option.merzouga": "Désert de Merzouga",
    "form.option.casablanca": "Casablanca & Rabat",
    "form.option.essaouira": "Essaouira",
    "form.option.airport": "Transfert aéroportuaire",
    "form.option.luxuryTransport": "Transport de luxe",
    "form.option.privateChauffeur": "Chauffeur privé",
    "form.option.vclass": "Mercedes-Benz V-Class",
    "form.option.eclass": "Mercedes-Benz E-Class",
    "form.option.sclass": "Mercedes-Benz S-Class",
    "form.option.range": "Range Rover",
    "form.option.prado": "Toyota Prado",
    "form.option.h1": "Hyundai H1 VIP Van",
    "form.option.minibus": "Minibus de luxe",
    "form.option.noVehicle": "Aucun véhicule nécessaire",
    "form.submit": "Demander la réservation",
    "form.status.error": "Une erreur est survenue. Veuillez réessayer ou nous contacter sur WhatsApp.",
    "form.status.success": "Merci, votre demande a été envoyée avec succès. Nous vous contacterons bientôt.",
    "form.email.subject": "Nouvelle demande de réservation circuit / transport",
    "form.email.heading": "Nouvelle demande de réservation circuit / transport",
    "contact.info.whatsapp.body": "Réponse la plus rapide pour les demandes d’itinéraire et de transport.",
    "contact.info.email.body": "Pour les programmes détaillés, réservations professionnelles et transports événementiels.",
    "contact.info.area.title": "Zone de service",
    "contact.info.area.body": "Le Maroc, notamment Marrakech, Fès, Casablanca, Rabat, Chefchaouen, Merzouga et Essaouira.",
    "contact.info.availability.title": "Disponibilité",
    "contact.info.availability.body": "7j/7 sur demande pour les circuits privés, transferts, événements et services de chauffeur.",
    "contact.area.title": "Zone de service",
    "contact.area.body": "Marrakech, Casablanca, Rabat, Fès, Tanger, Chefchaouen, Essaouira, Agafay, montagnes de l’Atlas, Merzouga et trajets longue distance à travers le Maroc.",
    "contact.area.cta": "Nous écrire sur WhatsApp",
    "contact.coverage.title": "Couverture du Maroc",
    "contact.coverage.body": "Accueil aéroportuaire, chauffeur privé, transport touristique et transferts interurbains depuis les principaux pôles de voyage du pays.",

    "legal.eyebrow": "Mentions légales",
    "privacy.title": "Politique de confidentialité",
    "privacy.updated": "<strong>Dernière mise à jour :</strong> 19 mai 2026. Cette politique de confidentialité explique comment CityZen Tours collecte et utilise les informations lorsque vous demandez des circuits sur mesure, du transport de luxe, des transferts aéroportuaires ou des services de chauffeur.",
    "privacy.collect.title": "Informations que nous collectons",
    "privacy.collect.body": "Nous pouvons collecter votre nom, adresse email, numéro de téléphone, dates de voyage, nombre de voyageurs, services préférés, lieux de prise en charge, détails de destination et messages envoyés via nos formulaires, WhatsApp, email ou téléphone.",
    "privacy.use.title": "Utilisation des informations",
    "privacy.use.body": "Vos informations sont utilisées pour répondre aux demandes, préparer des propositions de circuit ou de transport, coordonner les réservations, gérer les détails de prise en charge, assurer le support client et améliorer nos services.",
    "privacy.share.title": "Partage des informations",
    "privacy.share.body": "Nous partageons uniquement les détails nécessaires avec des chauffeurs, guides, hôtels, camps ou partenaires de confiance lorsque cela est requis pour fournir le service demandé. Nous ne vendons pas vos informations personnelles.",
    "privacy.retention.title": "Conservation des données",
    "privacy.retention.body": "Nous conservons les dossiers de réservation et de demande pendant une durée raisonnable afin de gérer l’historique des services, la comptabilité, les obligations légales et le support client.",
    "privacy.choices.title": "Vos choix",
    "privacy.choices.body": "Vous pouvez demander l’accès, la correction ou la suppression de vos informations personnelles en nous contactant à hello@cityzentours.example.",
    "refund.title": "Politique de remboursement",
    "refund.updated": "<strong>Dernière mise à jour :</strong> 19 mai 2026. Cette politique de remboursement s’applique aux circuits privés, transports de luxe, transferts aéroportuaires, services de chauffeur et réservations associées organisés par CityZen Tours.",
    "refund.deposits.title": "Acomptes et réservations",
    "refund.deposits.body": "Certaines réservations peuvent nécessiter un acompte afin de réserver véhicules, chauffeurs, guides, hôtels, camps ou services partenaires. Les conditions d’acompte sont communiquées avant confirmation.",
    "refund.cancel.title": "Annulations par le client",
    "refund.cancel.body": "Les annulations effectuées plus de 7 jours avant la date du service peuvent donner droit à un remboursement partiel après déduction des frais partenaires non remboursables. Les annulations dans les 7 jours peuvent être non remboursables selon le service et les prestataires concernés.",
    "refund.sameDay.title": "Transport le jour même",
    "refund.sameDay.body": "Les transferts aéroportuaires, services de chauffeur et annulations de transport le jour même peuvent être facturés si le chauffeur ou le véhicule a déjà été mobilisé.",
    "refund.changes.title": "Modifications de réservation",
    "refund.changes.body": "Nous ferons de notre mieux pour ajuster les dates, horaires de prise en charge, itinéraires et catégories de véhicules lorsque les disponibilités le permettent. Des ajustements tarifaires peuvent s’appliquer aux services modifiés.",
    "refund.weather.title": "Météo et force majeure",
    "refund.weather.body": "Si la météo, des fermetures de routes, des raisons de sécurité ou des événements indépendants de notre volonté affectent votre voyage, nous pouvons proposer un itinéraire alternatif, un changement de date, un avoir ou un remboursement partiel selon les circonstances.",
    "terms.title": "Conditions générales",
    "terms.updated": "<strong>Dernière mise à jour :</strong> 19 mai 2026. En demandant ou en réservant un service auprès de CityZen Tours, vous acceptez les présentes conditions générales.",
    "terms.services.title": "Services",
    "terms.services.body": "Nous proposons des circuits privés sur mesure, du transport de luxe, des transferts aéroportuaires, un service de chauffeur privé, du transport événementiel VIP et des transferts interurbains au Maroc. Les détails finaux du service reposent sur une confirmation écrite.",
    "terms.client.title": "Responsabilités du client",
    "terms.client.body": "Les clients doivent fournir des noms, coordonnées, horaires de prise en charge, besoins en bagages, informations de vol, détails d’hébergement et besoins particuliers exacts avant le début du service.",
    "terms.pricing.title": "Tarifs et paiement",
    "terms.pricing.body": "Les tarifs dépendent de l’itinéraire, de la durée, de la catégorie de véhicule, du nombre de voyageurs, de la saison, des disponibilités partenaires et des expériences incluses. Les conditions de paiement sont communiquées avant confirmation de réservation.",
    "terms.adjustments.title": "Ajustements d’itinéraire",
    "terms.adjustments.body": "Les circuits sur mesure peuvent être ajustés pour des raisons de sécurité, météo, circulation, horaires d’ouverture, conditions locales ou préférences du client. Nous veillons à préserver la qualité de l’expérience tout en gardant un timing réaliste.",
    "terms.liability.title": "Limitation de responsabilité",
    "terms.liability.body": "Nous ne sommes pas responsables des retards ou pertes causés par des changements de vol, la circulation, des fermetures de routes, la météo, des prestataires tiers, des effets personnels ou des événements hors de notre contrôle raisonnable.",
    "terms.contact.title": "Contact",
    "terms.contact.body": "Les questions concernant ces conditions peuvent être envoyées à hello@cityzentours.example ou via notre page Contact.",
  },
  ar: {
    "meta.home.title": "CityZen Tours | جولات خاصة ونقل فاخر في المغرب",
    "meta.home.description": "جولات خاصة مصممة حسب الطلب في المغرب وخدمات نقل فاخرة مع سائق خاص.",
    "meta.tours.title": "جولات خاصة في المغرب | CityZen Tours",
    "meta.tours.description": "جولات خاصة مصممة حسب الطلب في المغرب لمراكش وفاس وشفشاون ومرزوكة والدار البيضاء والرباط والصويرة.",
    "meta.transport.title": "نقل فاخر | CityZen Tours",
    "meta.transport.description": "نقل فاخر، استقبال في المطار، سائق خاص VIP ورحلات بين المدن في المغرب.",
    "meta.about.title": "من نحن | CityZen Tours",
    "meta.about.description": "عن CityZen Tours، المتخصصة في الرحلات الخاصة المصممة حسب الطلب والنقل الفاخر في المغرب.",
    "meta.contact.title": "اتصل بنا | CityZen Tours",
    "meta.contact.description": "تواصل مع CityZen Tours لتنظيم جولات خاصة في المغرب وخدمات نقل فاخرة.",
    "meta.privacy.title": "سياسة الخصوصية | CityZen Tours",
    "meta.privacy.description": "سياسة الخصوصية الخاصة بـ CityZen Tours.",
    "meta.refund.title": "سياسة الاسترداد | CityZen Tours",
    "meta.refund.description": "سياسة الاسترداد الخاصة بـ CityZen Tours وخدمات النقل.",
    "meta.terms.title": "الشروط والأحكام | CityZen Tours",
    "meta.terms.description": "الشروط والأحكام الخاصة بـ CityZen Tours وخدمات النقل.",

    "nav.home": "الرئيسية",
    "nav.tours": "الجولات",
    "nav.transport": "النقل",
    "nav.about": "من نحن",
    "nav.contact": "اتصل بنا",
    "nav.cta": "ابدأ التخطيط",
    "nav.menu.open": "فتح القائمة",
    "nav.menu.close": "إغلاق القائمة",
    "brand.homeLabel": "الرئيسية CityZen Tours",
    "brand.logoAlt": "شعار CityZen Tours",

    "language.label": "اختيار اللغة",
    "language.english": "التبديل إلى الإنجليزية",
    "language.french": "التبديل إلى الفرنسية",
    "language.arabic": "التبديل إلى العربية",

    "footer.description": "رحلات خاصة في المغرب، خدمات سائق أنيقة، ونقل فاخر ينظم وفق جدولكم وأسلوبكم وإيقاع سفركم.",
    "footer.navigation": "التنقل",
    "footer.services": "الخدمات",
    "footer.service.customTours": "جولات مصممة حسب الطلب",
    "footer.service.luxuryTransport": "نقل فاخر",
    "footer.service.airportTransfers": "استقبال المطار",
    "footer.service.privateChauffeur": "سائق خاص",
    "footer.legal.title": "قانوني",
    "footer.legal.privacy": "سياسة الخصوصية",
    "footer.legal.refund": "سياسة الاسترداد",
    "footer.legal.terms": "الشروط والأحكام",
    "footer.contact": "اتصل بنا",
    "footer.location": "مراكش، المغرب<br>متوفرون في جميع أنحاء المغرب",
    "footer.copyright": "حقوق النشر {year} CityZen Tours. جميع الحقوق محفوظة.",
    "footer.tagline": "جولات فاخرة مصممة حسب الطلب وخدمة سائق خاص في المغرب.",

    "home.hero.title": "جولات خاصة في المغرب ونقل فاخر، مصممة حولكم",
    "home.hero.subtitle": "جولات خاصة حسب الطلب، تحويلات VIP، سيارات فاخرة، استقبال في المطار، رحلات بين المدن، وخدمة سائق خاص في جميع أنحاء المغرب.",
    "home.hero.toursCta": "خطط لجولتك الخاصة",
    "home.hero.transportCta": "احجز نقلاً فاخراً",
    "home.custom.title": "جولات مصممة وفق إيقاعكم ورغباتكم.",
    "home.custom.body": "كل مسار يصمم بالكامل وفق اهتماماتكم وتواريخكم ومكان إقامتكم وأسلوب سفركم والمدن التي ترغبون في اكتشافها. نهتم بكل التفاصيل لتكون كل يومية سلسة وحصرية وأصيلة بروح المغرب.",
    "home.feature.itinerary.title": "مسارات حسب الطلب",
    "home.feature.itinerary.body": "من جولات المدينة العتيقة إلى ليالي الصحراء الساحرة، يصمم كل مسار وفق رغباتكم لتجربة فريدة وشخصية.",
    "home.feature.local.title": "تجربة محلية خاصة",
    "home.feature.local.body": "استمتعوا بمرافقة راقية ووتيرة أنيقة ووصول مميز إلى أكثر الأماكن أصالة في المغرب.",
    "home.feature.flexible.title": "جدول مرن",
    "home.feature.flexible.body": "سافروا وفق إيقاعكم مع أوقات استقبال مرنة وبرامج يومية تنظم حسب تفضيلاتكم.",
    "home.cities.title": "المغرب، مدينة بعد مدينة.",
    "home.cities.body": "رحلات خاصة أنيقة بين المدن الإمبراطورية والأزقة الزرقاء في الجبال وضوء الأطلسي وكثبان الصحراء.",
    "home.cities.cta": "اكتشف الجولات",
    "home.city.marrakech": "مراكش",
    "home.city.marrakech.body": "قصور وأسواق ورياضات وحدائق وأزقة مخفية في المدينة العتيقة.",
    "home.city.fes": "فاس",
    "home.city.fes.body": "حرف عريقة وتاريخ روحي ودباغات وأبواب وأسواق.",
    "home.city.casablanca": "الدار البيضاء",
    "home.city.casablanca.body": "طاقة ساحلية وشوارع حديثة ومسجد الحسن الثاني.",
    "home.city.chefchaouen": "شفشاون",
    "home.city.chefchaouen.body": "أزقة زرقاء وإطلالات جبلية وقصبة وهدوء.",
    "home.city.merzouga": "صحراء مرزوكة",
    "home.city.merzouga.body": "كثبان عرق الشبي، ركوب الجمال، الغروب، وليال في مخيم فاخر.",
    "home.city.essaouira": "الصويرة",
    "home.city.essaouira.body": "مدينة عتيقة على المحيط، معارض فنية، مأكولات بحرية، أسوار وهواء البحر.",
    "home.vehicles.title": "سيارات فاخرة لكل رحلة خاصة.",
    "home.vehicles.body": "اختاروا راحة راقية لاستقبال المطار، التنقلات المهنية، الجولات VIP، الفعاليات، والتحويلات الطويلة.",
    "home.vehicle.vclass.body": "راحة تنفيذية للعائلات والضيوف VIP والجولات الخاصة.",
    "home.vehicle.eclass.body": "خدمة سيدان أنيقة لتحويلات المطار ورحلات الأعمال.",
    "home.vehicle.sprinter.body": "تنقل مريح للجولات وحفلات الزفاف والفعاليات والمؤتمرات.",
    "home.vehicle.range.body": "حضور SUV فاخر للطرق الجبلية والفعاليات والوصول المميز.",
    "home.vehicle.prado.body": "راحة 4x4 موثوقة لطرق الأطلس والتحويلات الطويلة والوصول إلى الصحراء.",
    "home.vehicle.skoda.body": "راحة موثوقة للرحلات الطويلة والمسارات المتنوعة.",
    "home.confidence.title": "طمأنينة هادئة من الوصول إلى الوداع.",
    "home.confidence.body": "تدار رحلتكم بسرية ودقة وراحة ومعرفة محلية، سواء احتجتم إلى مسار كامل أو تحويل واحد منظم بإتقان.",
    "home.confidence.planning": "تخطيط جولات حسب الطلب",
    "home.confidence.vehicles": "سيارات فاخرة ومريحة",
    "home.confidence.drivers": "سائقون خاصون محترفون",
    "home.confidence.pickup": "استقبال في المطار والفندق",
    "home.confidence.multilingual": "خدمة متعددة اللغات",
    "home.confidence.support": "دعم راق للعملاء",
    "home.finalCta.title": "أخبرونا برحلتكم المغربية التي تحلمون بها، وسنصممها لكم.",
    "home.finalCta.button": "تواصلوا معنا",

    "vehicle.capacity": "سعة الركاب:",
    "vehicle.serviceType": "نوع الخدمة:",
    "vehicle.upTo3": "حتى 3",
    "vehicle.upTo4": "حتى 4",
    "vehicle.upTo6": "حتى 6",
    "vehicle.upTo17": "حتى 17",
    "vehicle.vipTourismTransport": "نقل سياحي VIP",
    "vehicle.airportBusiness": "المطار والأعمال",
    "vehicle.groupTransport": "نقل جماعي",
    "vehicle.premium4x4": "مسارات 4x4 فاخرة",
    "vehicle.longDistance": "تحويلات طويلة",
    "vehicle.privateChauffeur": "سائق خاص",
    "vehicle.familiesVip": "عائلات وسياحة VIP",
    "vehicle.premiumSuv": "نقل SUV فاخر",
    "vehicle.book": "احجز الآن",

    "tours.hero.title": "جولات خاصة في المغرب",
    "tours.hero.body": "كل جولة تصمم وفق اهتماماتكم وتواريخكم وميزانيتكم والمدن المفضلة وأسلوب سفركم.",
    "tours.hero.cta": "اطلب جولة حسب الطلب",
    "tours.marrakech.title": "مدينة مراكش وقصورها",
    "tours.marrakech.body": "زوروا جامع الفنا وحديقة ماجوريل وقصر الباهية ومسجد الكتبية والأسواق والرياضات التقليدية وأزقة المدينة المخفية بوتيرة خاصة ومرافقة دقيقة.",
    "tours.marrakech.item1": "جامع الفنا، مكان لا بد منه حيث تلتقي الثقافة والتقاليد والطاقة",
    "tours.marrakech.item2": "قصر الباهية والكتبية وعمارة الرياض التاريخية",
    "tours.marrakech.item3": "زيارات للحدائق ولقاءات مع الحرفيين ومحطات للتصوير",
    "tours.fes.title": "جولة ثقافية في فاس",
    "tours.fes.body": "اكتشفوا المدينة العتيقة ومنطقة القرويين والدباغات الشهيرة وورش الحرفيين والأبواب التاريخية والأسواق التقليدية مع دليل محلي وخدمة خاصة حسب الطلب.",
    "tours.fes.item1": "مسارات المدينة العتيقة والأبواب التاريخية",
    "tours.fes.item2": "الدباغات وورش الحرفيين والأسواق التقليدية",
    "tours.fes.item3": "إرشاد ثقافي خاص وفق إيقاعكم",
    "tours.chefchaouen.title": "شفشاون، المدينة الزرقاء",
    "tours.chefchaouen.body": "تجولوا في الأزقة الزرقاء والإطلالات الجبلية ومحلات الحرفيين والقصبة وزوايا المدينة الهادئة في واحدة من أكثر مدن المغرب شاعرية.",
    "tours.chefchaouen.item1": "أزقة زرقاء وزوايا هادئة في المدينة",
    "tours.chefchaouen.item2": "إطلالات جبلية ومنطقة القصبة",
    "tours.chefchaouen.item3": "متاجر حرفية وتوقيت خاص مريح",
    "tours.merzouga.title": "صحراء مرزوكة",
    "tours.merzouga.body": "اكتشفوا كثبان عرق الشبي، ركوب الجمال، مخيماً فاخراً في الصحراء، الغروب والشروق، الموسيقى الأمازيغية، وجولة خاصة بسيارة 4x4.",
    "tours.merzouga.item1": "كثبان عرق الشبي عند الغروب والشروق",
    "tours.merzouga.item2": "مخيم صحراوي فاخر وموسيقى أمازيغية",
    "tours.merzouga.item3": "ركوب الجمال وجولة خاصة بسيارة 4x4",
    "tours.casablanca.title": "الدار البيضاء والرباط",
    "tours.casablanca.body": "زوروا مسجد الحسن الثاني والكورنيش وساحة محمد الخامس وقصبة الأوداية في الرباط وصومعة حسان ومحيط القصر الملكي.",
    "tours.casablanca.item1": "مسجد الحسن الثاني وكورنيش الدار البيضاء",
    "tours.casablanca.item2": "قصبة الأوداية في الرباط وصومعة حسان",
    "tours.casablanca.item3": "أبرز المعالم الحضرية مع تحويلات خاصة",
    "tours.essaouira.title": "الصويرة، جولة ساحلية",
    "tours.essaouira.body": "زوروا المدينة المطلة على المحيط وسقالة المدينة وميناء الصيد والشاطئ والمعارض الفنية ومطاعم المأكولات البحرية مع وقت للاستمتاع بنسمات الأطلسي وشوارع الحرفيين.",
    "tours.essaouira.item1": "مدينة محيطية وأسوار وميناء صيد",
    "tours.essaouira.item2": "معارض فنية ونزهة على الشاطئ وتوقفات للمأكولات البحرية",
    "tours.essaouira.item3": "يوم ساحلي هادئ انطلاقاً من مراكش",
    "tours.card.cta": "اسأل عن هذه الجولة",

    "transport.hero.title": "نقل فاخر وخدمة سائق خاص",
    "transport.hero.body": "تحويلات VIP، استقبال في المطار، رحلات بين المدن، نقل سياحي، فعاليات وخدمة سائق خاص في جميع أنحاء المغرب.",
    "transport.hero.cta": "احجز رحلتك",
    "transport.choose.title": "اختاروا سيارتكم الخاصة.",
    "transport.choose.body": "ينظم كل تنقل وفق راحتكم واحتياجات الأمتعة وعدد الركاب والوجهة ومستوى الخصوصية المطلوب.",
    "transport.vehicle.vclass.body": "مقصورة فاخرة واسعة للجولات الخاصة والوصول إلى المطار.",
    "transport.vehicle.eclass.body": "سيدان أنيقة للمسافرين المنفردين والأزواج وتحويلات المطار.",
    "transport.vehicle.sprinter.body": "تنقل جماعي مريح للجولات وحفلات الزفاف والفعاليات والمؤتمرات.",
    "transport.vehicle.range.body": "SUV فاخر للطرق الجبلية والفعاليات والوصول الخاص ومسارات 4x4 الراقية.",
    "transport.vehicle.prado.body": "راحة موثوقة للمسافات الطويلة وطرق الأطلس والوصول إلى الصحراء.",
    "transport.vehicle.skoda.body": "راحة موثوقة للرحلات الطويلة والمسارات المتنوعة.",
    "transport.services.title": "خدمات نقل منظمة بدقة",
    "transport.services.body": "من الاستقبال في المطار إلى طرق الصحراء، يخطط كل مسار بدقة والتزام ومهنية. نوفر للمسافرين خدمة موثوقة ومريحة ومرافقة شخصية في كل مرحلة.",
    "transport.services.airport.title": "تحويلات المطار",
    "transport.services.airport.body": "استقبال عند الوصول، مساعدة في الأمتعة، وتنقل سلس إلى الفندق براحة مطلقة.",
    "transport.services.city.title": "تحويلات خاصة بين المدن",
    "transport.services.city.body": "سافروا عبر المغرب براحة بال بفضل سيارات مريحة ومرافقة مهنية في كل مرحلة.",
    "transport.services.chauffeur.title": "سائق خاص",
    "transport.services.chauffeur.body": "تنقلات خاصة حسب الطلب مع سائق مخصص تجمع بين السرية والالتزام والراحة الفاخرة.",
    "transport.services.events.title": "فعاليات ونقل VIP",
    "transport.services.events.body": "تنقلات أنيقة ومنظمة بإتقان لحفلات الزفاف والسهرات الخاصة والمواعيد المهنية والفعاليات الراقية.",
    "transport.services.tourist.title": "نقل سياحي",
    "transport.services.tourist.body": "سيارات مريحة ومكيفة ترافق أيام الاكتشاف والرحلات متعددة الوجهات بمرونة عالية.",
    "transport.services.pickup.title": "استقبال راق",
    "transport.services.pickup.body": "من الفنادق والرياضات والفيلات والمطاعم والأماكن الخاصة أو مواقع الفعاليات مع الالتزام والراحة والمساعدة المخصصة.",
    "transport.finalCta.title": "هل تحتاجون إلى نقل فاخر في المغرب؟ تواصلوا معنا لنقترح عليكم السيارة المثالية لتنقلاتكم.",
    "transport.finalCta.button": "تواصلوا معنا",

    "about.hero.title": "سفر مغربي بصياغة خاصة.",
    "about.hero.body": "اكتشفوا المغرب وفق إيقاعكم من خلال رحلات خاصة حسب الطلب تجمع بين الراحة الراقية والمعرفة المحلية الأصيلة والخدمة المهنية المتقنة.",
    "about.story.title": "قصتنا",
    "about.story.p1": "في CityZen Tours ابتكرنا طريقة أكثر خصوصية لاكتشاف المغرب، حيث تسير كل رحلة بسلاسة وراحة وأناقة. من خلال الجمع بين التخطيط الخاص والنقل الراقي، نصمم تجارب مصقولة تتتابع مراحلها طبيعياً من لحظة وصولكم إلى أجمل اكتشافاتكم.",
    "about.story.p2": "يبدأ فريقنا دائماً بالاستماع إليكم: تواريخكم، اهتماماتكم، فندقكم، إيقاع سفركم، تفضيلات السيارة، والتجارب التي تهمكم حقاً. بعد ذلك يصمم كل مسار بعناية ليقدم رحلة خاصة متناغمة وأصيلة بروح المغرب.",
    "about.stats.clients": "عملاء سعداء",
    "about.stats.cities": "مدن مغطاة",
    "about.stats.vehicles": "سيارات فاخرة",
    "about.stats.years": "سنوات خبرة",
    "about.mission.title": "مهمتنا",
    "about.mission.body": "تصميم رحلات خاصة في المغرب تكون أنيقة وإنسانية وموثوقة، تجمع بين تجارب محلية غامرة ومعايير نقل راقية.",
    "about.values.title": "قيمنا",
    "about.values.body": "السرية، الالتزام بالمواعيد، حسن الضيافة، احترام الثقافة المحلية، السلامة، والعناية بالتفاصيل.",
    "about.trust.title": "لماذا يثق بنا عملاؤنا",
    "about.trust.body": "تواصل واضح، سائقون خاصون، تخطيط مرن، ودعم طوال الرحلة.",
    "about.luxuryTransport.title": "نقل فاخر",
    "about.luxuryTransport.body": "سيارات نظيفة، سائقون محترفون، وتحويلات سلسة بين كل مرحلة.",
    "about.customTours.title": "جولات حسب الطلب",
    "about.customTours.body": "مسارات خاصة حول الثقافة والمذاق والعمارة والطبيعة والراحة.",
    "about.timing.title": "الفخامة تكمن في التوقيت.",
    "about.timing.body": "الرحلة الراقية ليست مجرد فندق جميل أو سيارة أنيقة. إنها الشعور بأن كل استقبال وتوقف ومسار ومشهد ولقاء محلي قد تم التفكير فيه قبل وصولكم.",
    "about.timing.cta": "خططوا معنا",

    "contact.hero.title": "ابدأوا تجربتكم الخاصة في المغرب.",
    "contact.hero.body": "أخبرونا إلى أين ترغبون في الذهاب، وكيف تفضلون السفر، وما الخدمة التي تحتاجونها. سنعد لكم عرضاً راقياً.",
    "contact.reserve.title": "احجزوا رحلتكم.",
    "contact.reserve.body": "شاركوا تفاصيل المسار وتفضيلاتكم. سيؤكد فريقنا التوفر ويعد عرضاً راقياً للجولة أو النقل.",
    "contact.form.title": "طلب حجز",
    "contact.form.body": "سيراجع منسق مخصص طلبكم ويرد عليكم بأفضل مسار وسيارة وتوقيت.",
    "form.section.itinerary": "تفاصيل المسار",
    "form.section.contact": "التواصل والتفضيلات",
    "form.label.serviceDestination": "الخدمة أو الوجهة",
    "form.label.vehicle": "السيارة المفضلة",
    "form.label.pickup": "مكان الاستقبال",
    "form.label.datetime": "التاريخ والوقت",
    "form.label.name": "الاسم الكامل",
    "form.label.phone": "رقم واتساب / الهاتف",
    "form.label.email": "البريد الإلكتروني",
    "form.label.people": "عدد الأشخاص",
    "form.label.requests": "طلبات خاصة",
    "form.placeholder.destination": "اختاروا وجهتكم...",
    "form.placeholder.vehicle": "اختاروا الفئة...",
    "form.placeholder.pickup": "فندق، مطار أو رياض",
    "form.placeholder.name": "اسمكم",
    "form.placeholder.phone": "+...",
    "form.placeholder.email": "your@email.com",
    "form.placeholder.people": "مثال: 2",
    "form.placeholder.requests": "أرقام الرحلات، مقاعد الأطفال، أو أي طلبات خاصة...",
    "form.option.customTour": "جولة مغربية حسب الطلب",
    "form.option.marrakech": "مراكش",
    "form.option.fes": "فاس",
    "form.option.chefchaouen": "شفشاون",
    "form.option.merzouga": "صحراء مرزوكة",
    "form.option.casablanca": "الدار البيضاء والرباط",
    "form.option.essaouira": "الصويرة",
    "form.option.airport": "استقبال المطار",
    "form.option.luxuryTransport": "نقل فاخر",
    "form.option.privateChauffeur": "سائق خاص",
    "form.option.vclass": "Mercedes-Benz V-Class",
    "form.option.eclass": "Mercedes-Benz E-Class",
    "form.option.sclass": "Mercedes-Benz S-Class",
    "form.option.range": "Range Rover",
    "form.option.prado": "Toyota Prado",
    "form.option.h1": "Hyundai H1 VIP Van",
    "form.option.minibus": "Minibus فاخر",
    "form.option.noVehicle": "لا حاجة إلى سيارة",
    "form.submit": "طلب الحجز",
    "form.status.error": "حدث خطأ. يرجى المحاولة مرة أخرى أو التواصل معنا عبر واتساب.",
    "form.status.success": "شكراً لكم، تم إرسال طلبكم بنجاح. سنتواصل معكم قريباً.",
    "form.email.subject": "طلب حجز جديد لجولة / نقل",
    "form.email.heading": "طلب حجز جديد لجولة / نقل",
    "contact.info.whatsapp.body": "أسرع استجابة لطلبات المسارات والنقل.",
    "contact.info.email.body": "للبرامج المفصلة وحجوزات الأعمال ونقل الفعاليات.",
    "contact.info.area.title": "منطقة الخدمة",
    "contact.info.area.body": "المغرب، بما في ذلك مراكش وفاس والدار البيضاء والرباط وشفشاون ومرزوكة والصويرة.",
    "contact.info.availability.title": "التوفر",
    "contact.info.availability.body": "7 أيام في الأسبوع عند الطلب للجولات الخاصة والتحويلات والفعاليات وخدمة السائق.",
    "contact.area.title": "منطقة الخدمة",
    "contact.area.body": "مراكش، الدار البيضاء، الرباط، فاس، طنجة، شفشاون، الصويرة، أكفاي، جبال الأطلس، مرزوكة، والمسارات الطويلة عبر المغرب.",
    "contact.area.cta": "راسلونا على واتساب",
    "contact.coverage.title": "تغطية المغرب",
    "contact.coverage.body": "استقبال المطار، سائق خاص، نقل سياحي، وتحويلات بين المدن من أهم محاور السفر في البلاد.",

    "legal.eyebrow": "قانوني",
    "privacy.title": "سياسة الخصوصية",
    "privacy.updated": "<strong>آخر تحديث:</strong> 19 مايو 2026. توضح سياسة الخصوصية هذه كيف تجمع CityZen Tours المعلومات وتستخدمها عند طلب جولات حسب الطلب أو نقل فاخر أو تحويلات المطار أو خدمات السائق.",
    "privacy.collect.title": "المعلومات التي نجمعها",
    "privacy.collect.body": "قد نجمع الاسم والبريد الإلكتروني ورقم الهاتف وتواريخ السفر وعدد الضيوف والخدمات المفضلة ومواقع الاستقبال وتفاصيل الوجهة والرسائل المرسلة عبر النماذج أو واتساب أو البريد الإلكتروني أو الهاتف.",
    "privacy.use.title": "كيف نستخدم المعلومات",
    "privacy.use.body": "تستخدم معلوماتكم للرد على الاستفسارات، إعداد عروض الجولات أو النقل، تنسيق الحجوزات، إدارة تفاصيل الاستقبال، تقديم دعم العملاء وتحسين خدماتنا.",
    "privacy.share.title": "مشاركة المعلومات",
    "privacy.share.body": "لا نشارك إلا التفاصيل الضرورية مع السائقين أو المرشدين أو الفنادق أو المخيمات أو شركاء الخدمة الموثوقين عندما يكون ذلك مطلوباً لتقديم الخدمة المطلوبة. لا نبيع معلوماتكم الشخصية.",
    "privacy.retention.title": "الاحتفاظ بالبيانات",
    "privacy.retention.body": "نحتفظ بسجلات الحجز والاستفسار لمدة معقولة لإدارة تاريخ الخدمة والمحاسبة والالتزامات القانونية ودعم العملاء.",
    "privacy.choices.title": "خياراتكم",
    "privacy.choices.body": "يمكنكم طلب الوصول إلى معلوماتكم الشخصية أو تصحيحها أو حذفها عبر التواصل معنا على hello@cityzentours.example.",
    "refund.title": "سياسة الاسترداد",
    "refund.updated": "<strong>آخر تحديث:</strong> 19 مايو 2026. تنطبق سياسة الاسترداد هذه على الجولات الخاصة والنقل الفاخر وتحويلات المطار وخدمات السائق والحجوزات ذات الصلة التي تنظمها CityZen Tours.",
    "refund.deposits.title": "العربون والحجوزات",
    "refund.deposits.body": "قد تتطلب بعض الحجوزات عربوناً لحجز السيارات أو السائقين أو المرشدين أو الفنادق أو المخيمات أو خدمات الشركاء. يتم توضيح شروط العربون قبل التأكيد.",
    "refund.cancel.title": "إلغاءات العميل",
    "refund.cancel.body": "قد تكون الإلغاءات التي تتم قبل أكثر من 7 أيام من تاريخ الخدمة مؤهلة لاسترداد جزئي بعد خصم تكاليف الشركاء غير القابلة للاسترداد. قد تكون الإلغاءات خلال 7 أيام غير قابلة للاسترداد حسب الخدمة والموردين المعنيين.",
    "refund.sameDay.title": "النقل في اليوم نفسه",
    "refund.sameDay.body": "قد يتم احتساب رسوم على تحويلات المطار وخدمة السائق وإلغاءات النقل في اليوم نفسه إذا كان السائق أو السيارة قد تم إرسالهما بالفعل.",
    "refund.changes.title": "تغييرات الحجز",
    "refund.changes.body": "سنبذل قصارى جهدنا لتعديل التواريخ وأوقات الاستقبال والمسارات وفئات السيارات عندما تسمح التوفرات بذلك. قد تطبق تغييرات سعرية على الخدمات المعدلة.",
    "refund.weather.title": "الطقس والقوة القاهرة",
    "refund.weather.body": "إذا أثرت حالة الطقس أو إغلاق الطرق أو مخاوف السلامة أو أحداث خارجة عن إرادتنا على رحلتكم، فقد نقدم مساراً بديلاً أو تغيير تاريخ أو رصيداً أو استرداداً جزئياً حسب الظروف.",
    "terms.title": "الشروط والأحكام",
    "terms.updated": "<strong>آخر تحديث:</strong> 19 مايو 2026. بطلب أو حجز خدمة مع CityZen Tours، فإنكم توافقون على هذه الشروط والأحكام.",
    "terms.services.title": "الخدمات",
    "terms.services.body": "نقدم جولات خاصة حسب الطلب، نقل فاخر، تحويلات المطار، خدمة سائق خاص، نقل فعاليات VIP، وتحويلات بين المدن في المغرب. تعتمد تفاصيل الخدمة النهائية على تأكيد مكتوب.",
    "terms.client.title": "مسؤوليات العميل",
    "terms.client.body": "يتحمل العملاء مسؤولية تقديم أسماء وبيانات اتصال وأوقات استقبال ومتطلبات أمتعة ومعلومات رحلات وتفاصيل إقامة وأي احتياجات خاصة بدقة قبل بدء الخدمة.",
    "terms.pricing.title": "الأسعار والدفع",
    "terms.pricing.body": "تعتمد الأسعار على المسار والمدة وفئة السيارة وعدد الضيوف والموسم وتوفر الشركاء والتجارب المشمولة. يتم تقديم شروط الدفع قبل تأكيد الحجز.",
    "terms.adjustments.title": "تعديلات المسار",
    "terms.adjustments.body": "قد يتم تعديل الجولات حسب الطلب لأسباب تتعلق بالسلامة أو الطقس أو المرور أو ساعات العمل أو الظروف المحلية أو تفضيلات العميل. نسعى للحفاظ على جودة التجربة مع إبقاء التوقيت واقعياً.",
    "terms.liability.title": "حدود المسؤولية",
    "terms.liability.body": "لسنا مسؤولين عن التأخيرات أو الخسائر الناتجة عن تغييرات الرحلات الجوية أو المرور أو إغلاق الطرق أو الطقس أو الموردين الخارجيين أو الأغراض الشخصية أو الأحداث الخارجة عن سيطرتنا المعقولة.",
    "terms.contact.title": "اتصل بنا",
    "terms.contact.body": "يمكن إرسال الأسئلة المتعلقة بهذه الشروط إلى hello@cityzentours.example أو عبر صفحة الاتصال.",
  },
};

function iconSvg(name) {
  const icons = {
    menu: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h13m0 0-5-5m5 5-5 5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    compass: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="1.5"/><path d="m15.5 8.5-2.2 5-4.8 2 2.2-5 4.8-2Z" fill="currentColor"/></svg>',
    car: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6.3 10.5 8 6.8c.3-.7 1-1.1 1.8-1.1h4.4c.8 0 1.5.4 1.8 1.1l1.7 3.7M5 15h14M6.5 17.8h.1M17.4 17.8h.1M4.8 10.5h14.4c.8 0 1.5.7 1.5 1.5v4.6c0 .7-.5 1.2-1.2 1.2H4.5c-.7 0-1.2-.5-1.2-1.2V12c0-.8.7-1.5 1.5-1.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    star: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m12 3 2.7 5.6 6.2.9-4.5 4.4 1.1 6.1-5.5-2.9L6.5 20l1.1-6.1-4.5-4.4 6.2-.9L12 3Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7.2 4.5 9.4 9l-2 1.5c1.3 2.6 3.5 4.8 6.1 6.1l1.5-2 4.5 2.2c.5.2.8.8.6 1.3-.4 1.4-1.7 2.4-3.2 2.4C9.5 20.5 3.5 14.5 3.5 7.1c0-1.5 1-2.8 2.4-3.2.5-.2 1.1.1 1.3.6Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>',
  };
  return icons[name] || icons.arrow;
}

function getStoredLanguage() {
  try {
    const stored = localStorage.getItem(languageStorageKey);
    return languages.includes(stored) ? stored : defaultLanguage;
  } catch (error) {
    return defaultLanguage;
  }
}

function translate(key, replacements = {}) {
  const dictionary = translations[currentLanguage] || translations[defaultLanguage];
  const fallback = translations[defaultLanguage] || {};
  let value = dictionary[key] || fallback[key] || key;
  Object.entries(replacements).forEach(([name, replacement]) => {
    value = value.replaceAll(`{${name}}`, replacement);
  });
  return value;
}

function buildHeader() {
  const header = document.createElement("header");
  header.className = "site-header";
  header.innerHTML = `
    <nav class="container-lux relative z-50 flex h-20 items-center justify-between">
      <a href="index.html" class="group flex items-center" data-i18n-label="brand.homeLabel" aria-label="CityZen Tours home">
        <img class="brand-logo" src="assets/images/logo.png" data-i18n-alt="brand.logoAlt" alt="CityZen Tours logo">
      </a>
      <div class="hidden items-center gap-8 lg:flex">
        ${pages.map(([id, labelKey, href]) => `<a class="nav-link ${pageName === id ? "active" : ""}" href="${href}" data-i18n="${labelKey}"></a>`).join("")}
      </div>
      <a href="contact.html" class="btn btn-gold hidden min-h-11 px-5 py-3 lg:inline-flex"><span data-i18n="nav.cta"></span><span class="h-4 w-4">${iconSvg("arrow")}</span></a>
      <button class="menu-toggle grid h-11 w-11 place-items-center rounded-full border border-[rgba(201,164,92,.32)] text-[#F8F4EC] lg:hidden" data-i18n-label="nav.menu.open" aria-label="Open menu" aria-expanded="false">
        <span class="h-6 w-6">${iconSvg("menu")}</span>
      </button>
    </nav>
    <div class="mobile-panel fixed inset-x-0 top-0 z-40 bg-[#07111F]/95 px-6 pb-8 pt-24 shadow-2xl backdrop-blur-xl lg:hidden">
      <div class="grid gap-4">
        ${pages.map(([id, labelKey, href]) => `<a class="rounded-2xl border border-[rgba(201,164,92,.18)] px-5 py-4 text-sm font-bold uppercase tracking-[.16em] text-[#F8F4EC] ${pageName === id ? "bg-[rgba(201,164,92,.12)] text-[#C9A45C]" : ""}" href="${href}" data-i18n="${labelKey}"></a>`).join("")}
      </div>
      <a href="contact.html" class="btn btn-gold mt-6"><span data-i18n="nav.cta"></span><span class="h-4 w-4">${iconSvg("arrow")}</span></a>
    </div>
  `;
  document.body.prepend(header);

  menuToggleButton = header.querySelector(".menu-toggle");
  const panel = header.querySelector(".mobile-panel");
  const setMenuOpen = (open) => {
    menuIsOpen = open;
    panel.classList.toggle("open", open);
    document.body.classList.toggle("menu-open", open);
    menuToggleButton.setAttribute("aria-expanded", String(open));
    menuToggleButton.setAttribute("aria-label", translate(open ? "nav.menu.close" : "nav.menu.open"));
    menuToggleButton.innerHTML = `<span class="h-6 w-6">${iconSvg(open ? "close" : "menu")}</span>`;
  };

  menuToggleButton.addEventListener("click", () => {
    setMenuOpen(!panel.classList.contains("open"));
  });

  panel.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuOpen(false));
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenuOpen(false);
  });

  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 24);
  }, { passive: true });
  header.classList.toggle("scrolled", window.scrollY > 24);
}

function buildFooter() {
  const footer = document.createElement("footer");
  footer.className = "site-footer section-pad";
  footer.innerHTML = `
    <div class="container-lux">
      <div class="grid gap-10 border-b border-[rgba(201,164,92,.18)] pb-12 lg:grid-cols-[1.35fr_.8fr_.8fr_.8fr_1fr]">
        <div>
          <a href="index.html" class="inline-flex items-center" data-i18n-label="brand.homeLabel" aria-label="CityZen Tours home">
            <img class="footer-logo" src="assets/images/logo.png" data-i18n-alt="brand.logoAlt" alt="CityZen Tours logo">
          </a>
          <p class="mt-6 max-w-sm leading-8" data-i18n="footer.description"></p>
          <div class="mt-6 flex gap-3">
            <a class="social-dot" href="#" aria-label="Instagram">IG</a>
            <a class="social-dot" href="#" aria-label="Facebook">FB</a>
            <a class="social-dot" href="#" aria-label="TikTok">TK</a>
          </div>
        </div>
        <div>
          <h3 class="mb-5 text-sm font-bold uppercase tracking-[.2em] text-[#C9A45C]" data-i18n="footer.navigation"></h3>
          ${pages.map(([, labelKey, href]) => `<a class="footer-link" href="${href}" data-i18n="${labelKey}"></a>`).join("")}
        </div>
        <div>
          <h3 class="mb-5 text-sm font-bold uppercase tracking-[.2em] text-[#C9A45C]" data-i18n="footer.services"></h3>
          <a class="footer-link" href="tours.html" data-i18n="footer.service.customTours"></a>
          <a class="footer-link" href="transport.html" data-i18n="footer.service.luxuryTransport"></a>
          <a class="footer-link" href="transport.html#services" data-i18n="footer.service.airportTransfers"></a>
          <a class="footer-link" href="transport.html#services" data-i18n="footer.service.privateChauffeur"></a>
        </div>
        <div>
          <h3 class="mb-5 text-sm font-bold uppercase tracking-[.2em] text-[#C9A45C]" data-i18n="footer.legal.title"></h3>
          ${legalLinks.map(([labelKey, href]) => `<a class="footer-link" href="${href}" data-i18n="${labelKey}"></a>`).join("")}
        </div>
        <div>
          <h3 class="mb-5 text-sm font-bold uppercase tracking-[.2em] text-[#C9A45C]" data-i18n="footer.contact"></h3>
          <p class="leading-8" data-i18n-html="footer.location"></p>
          <a class="footer-link mt-3 text-[#C9A45C]" href="https://wa.me/${whatsappNumber}" target="_blank" rel="noreferrer">WhatsApp: +212 600 000 000</a>
          <a class="footer-link" href="mailto:hello@cityzentours.example">hello@cityzentours.example</a>
        </div>
      </div>
      <div class="flex flex-col gap-3 pt-8 text-sm text-[rgba(248,244,236,.56)] md:flex-row md:items-center md:justify-between">
        <p data-i18n="footer.copyright" data-i18n-year="${new Date().getFullYear()}"></p>
        <p data-i18n="footer.tagline"></p>
      </div>
    </div>
  `;
  document.body.append(footer);
}

function buildLanguageToggle() {
  const switcher = document.createElement("div");
  switcher.className = "language-toggle";
  switcher.setAttribute("role", "group");
  switcher.setAttribute("data-i18n-label", "language.label");
  switcher.setAttribute("aria-label", "Choose language");
  switcher.innerHTML = `
    <button type="button" class="language-option" data-language="en" data-i18n-label="language.english" aria-label="Switch to English">EN</button>
    <button type="button" class="language-option" data-language="fr" data-i18n-label="language.french" aria-label="Switch to French">FR</button>
    <button type="button" class="language-option" data-language="ar" data-i18n-label="language.arabic" aria-label="Switch to Arabic">AR</button>
  `;
  document.body.append(switcher);

  switcher.querySelectorAll("[data-language]").forEach((button) => {
    button.addEventListener("click", () => {
      setLanguage(button.dataset.language, true);
    });
  });
}

function setLanguage(language, shouldPersist = false) {
  currentLanguage = languages.includes(language) ? language : defaultLanguage;
  const isArabic = currentLanguage === "ar";
  document.documentElement.lang = currentLanguage;
  document.documentElement.dir = isArabic ? "rtl" : "ltr";
  document.body.classList.toggle("is-rtl", isArabic);
  document.body.dataset.language = currentLanguage;

  if (shouldPersist) {
    try {
      localStorage.setItem(languageStorageKey, currentLanguage);
    } catch (error) {
      // localStorage can fail in private browsing; translation still applies.
    }
  }

  applyTranslations();
  updatePageMeta();
  updateLanguageToggle();
  if (menuToggleButton) {
    menuToggleButton.setAttribute("aria-label", translate(menuIsOpen ? "nav.menu.close" : "nav.menu.open"));
  }
}

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = translate(element.dataset.i18n, {
      year: element.dataset.i18nYear || "",
    });
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    element.innerHTML = translate(element.dataset.i18nHtml, {
      year: element.dataset.i18nYear || "",
    });
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.setAttribute("placeholder", translate(element.dataset.i18nPlaceholder));
  });

  document.querySelectorAll("[data-i18n-label]").forEach((element) => {
    element.setAttribute("aria-label", translate(element.dataset.i18nLabel));
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    element.setAttribute("alt", translate(element.dataset.i18nAlt));
  });
}

function updatePageMeta() {
  const metaKey = pageMetaKeys[pageName];
  if (!metaKey) return;
  document.title = translate(`${metaKey}.title`);
  const description = document.querySelector('meta[name="description"]');
  if (description) {
    description.setAttribute("content", translate(`${metaKey}.description`));
  }
}

function updateLanguageToggle() {
  document.querySelectorAll("[data-language]").forEach((button) => {
    const isActive = button.dataset.language === currentLanguage;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function initReveal() {
  const items = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });
  items.forEach((item) => observer.observe(item));
}

function initCounters() {
  const counters = document.querySelectorAll("[data-count]");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = Number(el.dataset.count);
      const suffix = el.dataset.suffix || "";
      const duration = 1200;
      const start = performance.now();
      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = `${Math.round(target * eased)}${suffix}`;
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
      observer.unobserve(el);
    });
  }, { threshold: 0.3 });
  counters.forEach((counter) => observer.observe(counter));
}

function initImageFallbacks() {
  document.querySelectorAll("img").forEach((img) => {
    img.addEventListener("error", () => {
      img.closest(".image-card, .split-image, .hero-media")?.classList.add("image-fallback");
    }, { once: true });
  });
}

function initContactForm() {
  const form = document.querySelector("#contactForm");
  if (!form) return;
  const status = document.querySelector("#formStatus");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    const required = ["serviceDestination", "vehicle", "pickup", "datetime", "name", "phone", "email", "people", "requests"];
    const missing = required.filter((key) => !String(data[key] || "").trim());
    if (missing.length || !form.checkValidity()) {
      status.textContent = translate("form.status.error");
      status.className = "form-status error";
      form.reportValidity();
      return;
    }

    const subject = translate("form.email.subject");
    const body = [
      translate("form.email.heading"),
      "",
      translate("form.section.itinerary").toUpperCase(),
      `${translate("form.label.serviceDestination")}: ${data.serviceDestination}`,
      `${translate("form.label.vehicle")}: ${data.vehicle}`,
      `${translate("form.label.pickup")}: ${data.pickup}`,
      `${translate("form.label.datetime")}: ${data.datetime}`,
      "",
      translate("form.section.contact").toUpperCase(),
      `${translate("form.label.name")}: ${data.name}`,
      `${translate("form.label.phone")}: ${data.phone}`,
      `${translate("form.label.email")}: ${data.email}`,
      `${translate("form.label.people")}: ${data.people}`,
      `${translate("form.label.requests")}: ${data.requests}`,
    ].join("\n");

    try {
      const mailto = `mailto:${businessEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailto;
      status.textContent = translate("form.status.success");
      status.className = "form-status success";
      form.reset();
      applyTranslations();
    } catch (error) {
      status.textContent = translate("form.status.error");
      status.className = "form-status error";
    }
  });
}

buildHeader();
buildFooter();
buildLanguageToggle();
setLanguage(getStoredLanguage());
initReveal();
initCounters();
initImageFallbacks();
initContactForm();
