import type { Metadata } from "next";
import { CinematicHero } from "@/components/sections/CinematicHero";
import { HorizontalMarquee } from "@/components/motion/HorizontalMarquee";
import { EditorialFeature } from "@/components/ui/EditorialFeature";
import { ServiceAccordion } from "@/components/sections/ServiceAccordion";
import { PageTransition } from "@/components/motion/PageTransition";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { MaskReveal } from "@/components/motion/MaskReveal";
import { StructuredData } from "@/components/seo/StructuredData";
import { DOCTORS } from "@/content/doctors";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Instituto Frisoli | Geriatria e Longevidade",
  description: "Medicina de excelência em São Paulo. Especialistas em Geriatria, Cardiologia e Longevidade Saudável.",
};

export default function Home() {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    name: "Instituto Frisoli",
    url: "https://institutofrisoli.com.br",
    logo: "https://institutofrisoli.com.br/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+55-11-3045-1234",
      contactType: "customer service",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua Gomes de Carvalho, 1507",
      addressLocality: "São Paulo",
      addressRegion: "SP",
      postalCode: "04547-005",
      addressCountry: "BR",
    },
    sameAs: [
      "https://www.instagram.com/institutofrisoli",
      "https://www.facebook.com/institutofrisoli",
    ],
  };

  return (
    <PageTransition>
      <StructuredData data={jsonLd} />

      {/* Act I: The Aperture */}
      <CinematicHero
        variant="home"
        imageSrc="/images/hero.jpg"
        imageAlt="Cuidado geracional no Instituto Frisoli"
        headline="A longevidade é uma conquista diária."
        subheadline="Medicina de excelência, olhar integrativo e o tempo que a sua saúde merece."
      />

      {/* Act II: The Whisper */}
      <section className="min-h-[60vh] flex items-center justify-center px-8 md:px-16 py-32">
        <ScrollReveal className="max-w-4xl text-center">
          <p className="font-serif text-3xl md:text-5xl lg:text-6xl italic text-brand-charcoal/80 leading-[1.2] tracking-tight">
            <TextReveal as="span" delay={0.2}>
              "Não tratamos apenas doenças.
            </TextReveal>
            <br />
            <TextReveal as="span" delay={0.4}>
              Cuidamos de biografias."
            </TextReveal>
          </p>
        </ScrollReveal>
      </section>

      {/* Act III: The People */}
      {/* Dr. Roberto */}
      <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
        <MaskReveal direction="right" className="relative min-h-[50vh] lg:min-h-0 order-1 lg:order-2">
          <Image
            src={DOCTORS[0].imageSrc}
            alt={DOCTORS[0].name}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </MaskReveal>
        <div className="flex items-center px-8 md:px-16 py-20 lg:py-0 bg-brand-light order-2 lg:order-1">
          <ScrollReveal delay={0.2}>
            <div className="max-w-xl">
              <p className="whisper text-brand-amber/70 mb-6">{DOCTORS[0].role}</p>
              <h2 className="font-serif text-4xl md:text-5xl text-brand-charcoal mb-8">
                {DOCTORS[0].name}
              </h2>
              <p className="text-brand-gray text-lg leading-relaxed mb-12">
                {DOCTORS[0].bio}
              </p>
              <Link href="/equipe" className="inline-block border-b border-brand-amber text-brand-amber hover:text-brand-charcoal transition-colors duration-300 pb-1 text-sm tracking-widest uppercase">
                Conheça a equipe
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Dr. Ana Paula */}
      <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
        <MaskReveal direction="left" className="relative min-h-[50vh] lg:min-h-0">
          <Image
            src={DOCTORS[1].imageSrc}
            alt={DOCTORS[1].name}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </MaskReveal>
        <div className="flex items-center px-8 md:px-16 py-20 lg:py-0 bg-brand-cream">
          <ScrollReveal delay={0.2}>
            <div className="max-w-xl lg:ml-auto">
              <p className="whisper text-brand-amber/70 mb-6">{DOCTORS[1].role}</p>
              <h2 className="font-serif text-4xl md:text-5xl text-brand-charcoal mb-8">
                {DOCTORS[1].name}
              </h2>
              <p className="text-brand-gray text-lg leading-relaxed mb-12">
                {DOCTORS[1].bio}
              </p>
              <Link href="/equipe" className="inline-block border-b border-brand-amber text-brand-amber hover:text-brand-charcoal transition-colors duration-300 pb-1 text-sm tracking-widest uppercase">
                Agendar Consulta
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>


      <HorizontalMarquee text="Excelência • Longevidade • Cuidado Integral" />

      {/* Act IV: The Craft */}
      <section className="bg-brand-light py-32">
        <div className="px-8 md:px-16 mb-16">
          <ScrollReveal>
            <h2 className="font-serif text-4xl md:text-5xl text-brand-charcoal mb-6">
              Nossa Atuação
            </h2>
            <div className="w-24 h-[1px] bg-brand-amber" />
          </ScrollReveal>
        </div>

        <div className="px-8 md:px-16">
          <ServiceAccordion />
        </div>
      </section>

      {/* Act V: The Invitation */}
      <section className="min-h-[50vh] flex flex-col justify-center items-center text-center px-8 md:px-16 bg-brand-white">
        <ScrollReveal>
          <p className="whisper text-brand-gray-light mb-8">
            Vila Olímpia, São Paulo
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-brand-charcoal mb-12 max-w-2xl leading-tight">
            Sua saúde merece este tempo.
          </h2>
          <Link
            href="/contato"
            className="inline-block bg-brand-charcoal text-white px-10 py-4 text-sm tracking-[0.2em] uppercase hover:bg-brand-amber transition-colors duration-500"
          >
            Entre em contato
          </Link>
        </ScrollReveal>
      </section>

    </PageTransition>
  );
}
