import type { Metadata } from "next";
import { CinematicHero } from "@/components/sections/CinematicHero";
import { PageTransition } from "@/components/motion/PageTransition";
import { EditorialFeature } from "@/components/ui/EditorialFeature";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { ProcessSteps } from "@/components/ui/ProcessSteps";
import { MODALITIES } from "@/content/specialties";

export const metadata: Metadata = {
    title: "Modalidades de Atendimento",
    description: "Atendimento presencial, domiciliar e teleconsulta — cuidado de excelência no formato ideal para você.",
};

export default function AtendimentoPage() {
    return (
        <PageTransition>
            <CinematicHero
                variant="page"
                imageSrc="/images/1.jpeg"
                imageAlt="Modalidades de atendimento"
                headline="Modalidades de Atendimento"
                subheadline="O cuidado vai até onde você está."
                label="Atendimento"
            />

            {/* Each modality — editorial feature */}
            <section className="bg-brand-light">
                {MODALITIES.map((mod, i) => (
                    <EditorialFeature
                        key={mod.title}
                        number={`0${i + 1}`}
                        title={mod.title}
                        description={mod.description}
                        align={i % 2 === 0 ? "left" : "right"}
                    />
                ))}
            </section>

            {/* Patient Journey - Process Steps */}
            <section className="py-32 px-8 md:px-16 bg-white border-t border-brand-charcoal/5">
                <div className="max-w-[1400px] mx-auto">
                    <ScrollReveal>
                        <h2 className="font-serif text-3xl md:text-4xl text-brand-charcoal mb-20 max-w-2xl">
                            Sua Jornada de Cuidado
                        </h2>
                    </ScrollReveal>

                    <ProcessSteps
                        steps={[
                            {
                                title: "Agendamento Inteligente",
                                description: "Nossa equipe de concierge entende sua queixa inicial e direciona para o especialista mais adequado, definindo o tempo necessário para sua consulta."
                            },
                            {
                                title: "Recepção e Acolhimento",
                                description: "Sem filas, sem espera. Você é recebido em um ambiente calmo, pensado para baixar a ansiedade e preparar você para o atendimento."
                            },
                            {
                                title: "A Consulta Médica",
                                description: "Tempo livre para ouvir. Anamnese detalhada, exame físico rigoroso e uma conversa franca sobre seus objetivos de saúde."
                            },
                            {
                                title: "Investigação Diagnóstica",
                                description: "Se necessário, exames complementares são solicitados ou realizados com equipamentos de ponta para precisão diagnóstica."
                            },
                            {
                                title: "Plano de Conduta",
                                description: "Você sai com um plano claro: o que fazer, como fazer e quando retornar. Medicamentos, estilo de vida e terapias integrados."
                            }
                        ]}
                    />
                </div>
            </section>

            {/* Insurance & FAQ - Clinical Trust Signals */}
            <section className="py-32 px-8 md:px-16 bg-brand-cream">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
                    <ScrollReveal>
                        <h3 className="font-serif text-2xl text-brand-charcoal mb-6">Convênios e Reembolso</h3>
                        <p className="text-brand-gray text-lg leading-relaxed mb-8">
                            O Instituto Frisoli atua na modalidade particular para garantir a autonomia médica e o tempo necessário para cada paciente.
                        </p>
                        <p className="text-brand-gray text-lg leading-relaxed">
                            Oferecemos suporte integral para auxílio no processo de reembolso junto à sua operadora de saúde, fornecendo todos os laudos e relatórios exigidos.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2}>
                        <h3 className="font-serif text-2xl text-brand-charcoal mb-6">Dúvidas Frequentes</h3>
                        <ul className="space-y-8">
                            <li className="border-b border-brand-charcoal/10 pb-8">
                                <h4 className="text-brand-charcoal font-medium mb-2">Realizam exames no local?</h4>
                                <p className="text-brand-gray text-base">Sim, contamos com estrutura para exames cardiológicos, ultrassonografia e laboratoriais.</p>
                            </li>
                            <li className="border-b border-brand-charcoal/10 pb-8">
                                <h4 className="text-brand-charcoal font-medium mb-2">Atendem emergências?</h4>
                                <p className="text-brand-gray text-base">Não somos um pronto-socorro. Para emergências com risco de vida, procure um hospital imediatamente.</p>
                            </li>
                        </ul>
                    </ScrollReveal>
                </div>
            </section>

            {/* Closing */}
            <section className="px-8 md:px-16 py-32 bg-white">
                <div className="max-w-[1400px] mx-auto">
                    <ScrollReveal className="max-w-xl lg:ml-auto">
                        <p className="font-serif text-2xl md:text-3xl italic text-brand-charcoal/70 leading-[1.4]">
                            Independente da modalidade, o padrão é o mesmo: excelência e presença genuína.
                        </p>
                        <div className="editorial-line mt-12" />
                    </ScrollReveal>
                </div>
            </section>
        </PageTransition>
    );
}
