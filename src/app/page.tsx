import { HeroGeriatric } from "@/components/sections/HeroGeriatric";
import { ExpertiseRedesign } from "@/components/sections/ExpertiseRedesign";
import { AboutGeriatric } from "@/components/sections/AboutGeriatric";
import { DifferentiatorsGeriatric } from "@/components/sections/DifferentiatorsGeriatric";
import { TestimonialsGeriatric } from "@/components/sections/TestimonialsGeriatric";
import { ContactGeriatric } from "@/components/sections/ContactGeriatric";
import { SiteFooter } from "@/components/layout/SiteFooter";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-background text-foreground">
      <HeroGeriatric />
      <ExpertiseRedesign />
      <AboutGeriatric />
      <DifferentiatorsGeriatric />
      <TestimonialsGeriatric />
      <ContactGeriatric />
      <SiteFooter />

      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalClinic",
            name: "Instituto Frisoli",
            description: "Clínica geriátrica de referência em São Paulo. Equipe especializada, cuidado personalizado e abordagem multidisciplinar para longevidade com qualidade.",
            url: "https://institutofrisoli.com.br",
            telephone: "+551130451234",
            email: "contato@institutofrisoli.com.br",
            medicalSpecialty: "Geriatrics",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Rua Gomes de Carvalho, 1356",
              addressLocality: "São Paulo",
              addressRegion: "SP",
              addressCountry: "BR",
              postalCode: "04547-005",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: -23.5957,
              longitude: -46.6857,
            },
            openingHours: "Mo-Fr 08:00-18:00",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "127",
            },
            sameAs: [
              "https://www.instagram.com/institutofrisoli",
              "https://www.facebook.com/institutofrisoli",
            ],
          }),
        }}
      />
    </main>
  );
}
