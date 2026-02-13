"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Accessibility, ChevronDown, ClipboardList, MessageCircle, CalendarCheck } from "lucide-react";
import { useWhatsAppForm, MOTIVO_OPTIONS } from "@/hooks/useWhatsAppForm";
import { WaveDividerSubtle } from "@/components/ui/WaveDivider";
import { SITE_CONTENT } from "@/content/site";

const WhatsAppIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
);

const steps = [
    {
        icon: ClipboardList,
        title: "Preencha o formulário",
        description: "Informe seus dados e o motivo da consulta de forma rápida e simples.",
    },
    {
        icon: MessageCircle,
        title: "Envie pelo WhatsApp",
        description: "Sua mensagem será formatada e enviada diretamente ao nosso WhatsApp.",
    },
    {
        icon: CalendarCheck,
        title: "Receba a confirmação",
        description: "Nossa equipe responde rapidamente para confirmar data e horário.",
    },
];

const faqs = [
    {
        question: "Preciso de encaminhamento médico para agendar?",
        answer: "Não é necessário encaminhamento. Você pode agendar diretamente conosco. Se possuir exames ou relatórios recentes, traga-os na consulta para que possamos avaliar de forma mais completa.",
    },
    {
        question: "Qual o tempo de espera para a primeira consulta?",
        answer: "Normalmente conseguimos agendar em até 7 dias úteis. Para casos urgentes, temos disponibilidade prioritária. Entre em contato e informaremos a melhor data disponível.",
    },
    {
        question: "Quais convênios são aceitos?",
        answer: "Trabalhamos com os principais convênios de São Paulo. Entre em contato pelo WhatsApp para confirmar se o seu plano é aceito. Também atendemos de forma particular.",
    },
    {
        question: "A consulta pode ser feita online?",
        answer: "Sim, oferecemos teleconsultas para casos selecionados, especialmente para acompanhamento e orientação familiar. A primeira avaliação geriátrica é presencial para um exame completo.",
    },
    {
        question: "Quanto tempo dura a avaliação geriátrica?",
        answer: "A avaliação geriátrica completa dura entre 60 e 90 minutos. Este tempo é necessário para uma análise aprofundada da saúde física, cognitiva e funcional do paciente.",
    },
];

const contactInfo = [
    {
        icon: Phone,
        label: "Telefone / WhatsApp",
        value: SITE_CONTENT.contact.phone,
        href: `tel:+55${SITE_CONTENT.contact.phone.replace(/\D/g, "")}`,
    },
    {
        icon: Mail,
        label: "Email",
        value: SITE_CONTENT.contact.email,
        href: `mailto:${SITE_CONTENT.contact.email}`,
    },
    {
        icon: MapPin,
        label: "Endereço",
        value: SITE_CONTENT.contact.address,
        href: SITE_CONTENT.contact.mapUrl,
    },
    {
        icon: Clock,
        label: "Horário",
        value: SITE_CONTENT.contact.hours,
    },
];

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
    const [open, setOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="border-b border-black/10 last:border-b-0"
        >
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between py-5 text-left group cursor-pointer"
            >
                <span className="font-medium text-black pr-4">{question}</span>
                <ChevronDown
                    className={`h-5 w-5 text-primary flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                />
            </button>
            <motion.div
                initial={false}
                animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
            >
                <p className="pb-5 text-black/60 leading-relaxed">{answer}</p>
            </motion.div>
        </motion.div>
    );
}

export function ContatoContent() {
    const { form, errors, updateField, submit } = useWhatsAppForm();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        submit();
    };

    return (
        <main>
            {/* Hero Mini */}
            <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-white relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-[20%] -right-[10%] w-[500px] h-[500px] rounded-full bg-primary/[0.04] blur-3xl" />
                    <div className="absolute bottom-[10%] -left-[5%] w-[300px] h-[300px] rounded-full bg-primary/[0.03] blur-2xl" />
                </div>

                <div className="container px-4 md:px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-5 py-2 mb-6"
                    >
                        <CalendarCheck className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium text-primary tracking-wide">Agendamento</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-black mb-6"
                    >
                        Agende sua{" "}
                        <span className="text-primary italic">Consulta</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="max-w-[600px] mx-auto text-black/60 text-lg md:text-xl leading-relaxed font-light"
                    >
                        Marque sua avaliação geriátrica de forma rápida e prática.
                        Preencha o formulário e envie direto para nosso WhatsApp.
                    </motion.p>
                </div>
            </section>

            {/* Como Funciona */}
            <section className="py-16 md:py-20 bg-primary/[0.03] relative">
                <WaveDividerSubtle variant="white" className="absolute top-0 left-0 right-0 -translate-y-[99%]" />

                <div className="container px-4 md:px-6">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-serif font-bold text-center text-black mb-12"
                    >
                        Como <span className="text-primary italic">Funciona</span>
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                                className="text-center"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 relative">
                                    <step.icon className="h-7 w-7 text-primary" />
                                    <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center">
                                        {i + 1}
                                    </span>
                                </div>
                                <h3 className="font-serif font-bold text-lg text-black mb-2">{step.title}</h3>
                                <p className="text-black/50 text-sm leading-relaxed">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Formulário Principal */}
            <section className="py-20 md:py-28 bg-white relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-[30%] -right-[15%] w-[600px] h-[600px] rounded-full bg-primary/[0.03] blur-3xl" />
                    <div className="absolute bottom-[20%] -left-[10%] w-[400px] h-[400px] rounded-full bg-primary/[0.04] blur-2xl" />
                </div>

                <div className="container px-4 md:px-6 relative z-10">
                    <div className="max-w-2xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl shadow-black/[0.08] border border-black/[0.05]"
                        >
                            <h2 className="text-2xl md:text-3xl font-serif font-bold text-black mb-2">
                                Preencha seus dados
                            </h2>
                            <p className="text-black/50 mb-8">
                                Seus dados serão enviados via WhatsApp para nossa equipe
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    {/* Nome */}
                                    <div className="space-y-1.5">
                                        <label htmlFor="contato-nome" className="text-sm font-medium text-black/70">
                                            Nome *
                                        </label>
                                        <input
                                            id="contato-nome"
                                            value={form.nome}
                                            onChange={(e) => updateField("nome", e.target.value)}
                                            placeholder="Seu nome completo"
                                            className="w-full h-12 px-4 bg-black/[0.03] border border-black/10 text-black placeholder:text-black/30 focus:outline-none focus:border-primary focus:bg-primary/[0.03] transition-all rounded-xl"
                                        />
                                        {errors.nome && <p className="text-xs text-red-500">{errors.nome}</p>}
                                    </div>

                                    {/* Telefone */}
                                    <div className="space-y-1.5">
                                        <label htmlFor="contato-telefone" className="text-sm font-medium text-black/70">
                                            Telefone *
                                        </label>
                                        <input
                                            id="contato-telefone"
                                            value={form.telefone}
                                            onChange={(e) => updateField("telefone", e.target.value)}
                                            placeholder="(11) 99999-9999"
                                            className="w-full h-12 px-4 bg-black/[0.03] border border-black/10 text-black placeholder:text-black/30 focus:outline-none focus:border-primary focus:bg-primary/[0.03] transition-all rounded-xl"
                                        />
                                        {errors.telefone && <p className="text-xs text-red-500">{errors.telefone}</p>}
                                    </div>
                                </div>

                                {/* Motivo */}
                                <div className="space-y-1.5">
                                    <label htmlFor="contato-motivo" className="text-sm font-medium text-black/70">
                                        Motivo da Consulta *
                                    </label>
                                    <select
                                        id="contato-motivo"
                                        value={form.motivo}
                                        onChange={(e) => updateField("motivo", e.target.value)}
                                        className="w-full h-12 px-4 bg-black/[0.03] border border-black/10 text-black focus:outline-none focus:border-primary focus:bg-primary/[0.03] transition-all rounded-xl appearance-none cursor-pointer"
                                    >
                                        <option value="">Selecione o motivo...</option>
                                        {MOTIVO_OPTIONS.map((opt) => (
                                            <option key={opt} value={opt}>{opt}</option>
                                        ))}
                                    </select>
                                    {errors.motivo && <p className="text-xs text-red-500">{errors.motivo}</p>}
                                </div>

                                {/* Mensagem */}
                                <div className="space-y-1.5">
                                    <label htmlFor="contato-mensagem" className="text-sm font-medium text-black/70">
                                        Mensagem <span className="text-black/30">(opcional)</span>
                                    </label>
                                    <textarea
                                        id="contato-mensagem"
                                        value={form.mensagem}
                                        onChange={(e) => updateField("mensagem", e.target.value)}
                                        rows={4}
                                        placeholder="Conte-nos como podemos ajudar..."
                                        className="w-full p-4 bg-black/[0.03] border border-black/10 text-black placeholder:text-black/30 focus:outline-none focus:border-primary focus:bg-primary/[0.03] transition-all resize-none rounded-xl"
                                    />
                                </div>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    className="w-full h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-medium text-base flex items-center justify-center gap-3 transition-all duration-300 shadow-lg shadow-[#25D366]/25 cursor-pointer mt-2"
                                >
                                    <WhatsAppIcon />
                                    Enviar pelo WhatsApp
                                </button>

                                <p className="text-center text-xs text-black/40">
                                    Você será redirecionado para o WhatsApp com sua mensagem preenchida
                                </p>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 md:py-28 bg-primary/[0.03] relative">
                <WaveDividerSubtle variant="white" className="absolute top-0 left-0 right-0 -translate-y-[99%]" flip />

                <div className="container px-4 md:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-black mb-4">
                            Perguntas <span className="text-primary italic">Frequentes</span>
                        </h2>
                        <p className="text-black/50 text-lg max-w-[500px] mx-auto">
                            Tudo o que você precisa saber sobre o agendamento
                        </p>
                    </motion.div>

                    <div className="max-w-2xl mx-auto bg-white rounded-3xl p-6 md:p-8 shadow-lg shadow-black/[0.04]">
                        {faqs.map((faq, i) => (
                            <FAQItem key={i} {...faq} index={i} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Informações de Contato */}
            <section className="py-20 md:py-28 bg-white relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute bottom-[20%] -right-[5%] w-[400px] h-[400px] rounded-full bg-primary/[0.03] blur-3xl" />
                </div>

                <div className="container px-4 md:px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-black mb-4">
                            Outras formas de <span className="text-primary italic">Contato</span>
                        </h2>
                        <p className="text-black/50 text-lg max-w-[500px] mx-auto">
                            Estamos disponíveis por diversos canais para atendê-lo
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        {contactInfo.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="text-center p-6 rounded-3xl bg-primary/[0.03] hover:bg-primary/[0.06] transition-colors duration-300 group"
                            >
                                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-105 transition-all duration-300">
                                    <item.icon className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="font-medium text-xs text-black/40 uppercase tracking-wider mb-2">
                                    {item.label}
                                </h3>
                                {item.href ? (
                                    <a
                                        href={item.href}
                                        target={item.href.startsWith("http") ? "_blank" : undefined}
                                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                        className="text-sm text-black hover:text-primary transition-colors font-medium"
                                    >
                                        {item.value}
                                    </a>
                                ) : (
                                    <p className="text-sm text-black font-medium">{item.value}</p>
                                )}
                            </motion.div>
                        ))}
                    </div>

                    {/* Accessibility badge */}
                    <div className="flex items-center justify-center gap-3 mt-10">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <Accessibility className="h-4 w-4 text-primary" />
                        </div>
                        <span className="text-sm text-black/40">
                            Acesso para cadeiras de rodas &bull; Estacionamento disponível
                        </span>
                    </div>
                </div>
            </section>
        </main>
    );
}
