import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TireSection } from "@/components/Commercial";
import { Marquee } from "@/components/Marquee";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Agricultural } from "@/components/Agricultural";
import { WhyUs } from "@/components/WhyUs";
import { Testimonials } from "@/components/Testimonials";
import { Gallery } from "@/components/Gallery";
import { Contact } from "@/components/Contact";
import { FAQ } from "@/components/FAQ";
import { OtherStores } from "@/components/OtherStores";
import { Footer } from "@/components/Footer";
import { Schema } from "@/components/Schema";
import { CustomCursor } from "@/components/CustomCursor";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useSmoothScroll } from "@/lib/smooth-scroll";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Vilhenorte Pneus | Pneus e Serviços Automotivos em Cacoal - RO" },
      { name: "description", content: "Pneus, alinhamento 3D, balanceamento, troca de óleo, manutenção e pneus agrícolas em Cacoal - RO. Faça seu orçamento pelo WhatsApp." },
      { property: "og:title", content: "Vilhenorte Pneus | Pneus e Serviços Automotivos em Cacoal - RO" },
      { property: "og:description", content: "Pneus, alinhamento 3D, balanceamento, troca de óleo, manutenção e pneus agrícolas em Cacoal - RO." },
      { property: "og:image", content: "https://kind-quirky-creator.lovable.app/og-image.jpg" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://kind-quirky-creator.lovable.app/og-image.jpg" }
    ],
    script: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
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
            "postalCode": "76962-070",
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
          }
        })
      }
    ]
  })
});

function Index() {
  useSmoothScroll();
  
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-quad",
      offset: 50,
      delay: 50,
    });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative selection:bg-primary selection:text-white font-inter overflow-x-hidden transition-all duration-500">
      {/* Texture removed per design guidelines to avoid pixelation */}
      <CustomCursor />
      <Navbar />
      <Hero />
      <Marquee />
      
      <TireSection />
      <Services />
      <About />
      <Agricultural />
      <WhyUs />
      
      <Testimonials />
      <Gallery />
      <Contact />
      <FAQ />
      <OtherStores />
      <Footer />
      <Schema />
    </div>
  );
}
