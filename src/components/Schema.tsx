import { useEffect } from "react";

export const Schema = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "AutomotiveBusiness",
      "name": "Vilhenorte Pneus",
      "image": "https://kind-quirky-creator.lovable.app/og-image.jpg",
      "@id": "https://kind-quirky-creator.lovable.app",
      "url": "https://kind-quirky-creator.lovable.app",
      "telephone": "+556921013213",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Av. Castelo Branco, 20116 - Novo Horizonte",
        "addressLocality": "Cacoal",
        "addressRegion": "RO",
        "postalCode": "76963-764",
        "addressCountry": "BR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -11.4395066,
        "longitude": -61.4379848
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "07:30",
        "closes": "18:00"
      },
      "sameAs": [
        "https://www.instagram.com/vilhenorte.cacoal"
      ]
    });
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
};