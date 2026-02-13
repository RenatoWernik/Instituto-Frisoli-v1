"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useWhatsAppForm, MOTIVO_OPTIONS } from "@/hooks/useWhatsAppForm";

interface AgendamentoModalProps {
    open: boolean;
    onClose: () => void;
}

const WhatsAppIcon = () => (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
);

export function AgendamentoModal({ open, onClose }: AgendamentoModalProps) {
    const { form, errors, updateField, submit, reset } = useWhatsAppForm();

    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [open]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (submit()) {
            reset();
            onClose();
        }
    };

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="fixed inset-0 z-[60] flex items-center justify-center px-4 py-6"
                    onClick={onClose}
                >
                    {/* Backdrop */}
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, y: 40, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 40, scale: 0.97 }}
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                        className="relative bg-white rounded-3xl p-8 max-w-lg w-full shadow-2xl max-h-[90vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Decorative blobs */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
                        <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-primary/5 blur-2xl pointer-events-none" />

                        {/* Close button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 rounded-full hover:bg-black/5 transition-colors text-black/40 hover:text-black/70"
                            aria-label="Fechar"
                        >
                            <X className="h-5 w-5" />
                        </button>

                        {/* Header */}
                        <div className="mb-6 relative z-10">
                            <h2 className="text-2xl font-serif font-bold text-black">
                                Agende sua{" "}
                                <span className="text-primary italic">Consulta</span>
                            </h2>
                            <p className="text-black/50 text-sm mt-1">
                                Preencha abaixo e enviaremos direto para nosso WhatsApp
                            </p>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                            {/* Nome */}
                            <div className="space-y-1.5">
                                <label htmlFor="modal-nome" className="text-sm font-medium text-black/70">
                                    Nome *
                                </label>
                                <input
                                    id="modal-nome"
                                    value={form.nome}
                                    onChange={(e) => updateField("nome", e.target.value)}
                                    placeholder="Seu nome completo"
                                    className="w-full h-12 px-4 bg-black/[0.03] border border-black/10 text-black placeholder:text-black/30 focus:outline-none focus:border-primary focus:bg-primary/[0.03] transition-all rounded-xl"
                                />
                                {errors.nome && (
                                    <p className="text-xs text-red-500">{errors.nome}</p>
                                )}
                            </div>

                            {/* Telefone */}
                            <div className="space-y-1.5">
                                <label htmlFor="modal-telefone" className="text-sm font-medium text-black/70">
                                    Telefone *
                                </label>
                                <input
                                    id="modal-telefone"
                                    value={form.telefone}
                                    onChange={(e) => updateField("telefone", e.target.value)}
                                    placeholder="(11) 99999-9999"
                                    className="w-full h-12 px-4 bg-black/[0.03] border border-black/10 text-black placeholder:text-black/30 focus:outline-none focus:border-primary focus:bg-primary/[0.03] transition-all rounded-xl"
                                />
                                {errors.telefone && (
                                    <p className="text-xs text-red-500">{errors.telefone}</p>
                                )}
                            </div>

                            {/* Motivo */}
                            <div className="space-y-1.5">
                                <label htmlFor="modal-motivo" className="text-sm font-medium text-black/70">
                                    Motivo da Consulta *
                                </label>
                                <select
                                    id="modal-motivo"
                                    value={form.motivo}
                                    onChange={(e) => updateField("motivo", e.target.value)}
                                    className="w-full h-12 px-4 bg-black/[0.03] border border-black/10 text-black focus:outline-none focus:border-primary focus:bg-primary/[0.03] transition-all rounded-xl appearance-none cursor-pointer"
                                >
                                    <option value="">Selecione o motivo...</option>
                                    {MOTIVO_OPTIONS.map((opt) => (
                                        <option key={opt} value={opt}>{opt}</option>
                                    ))}
                                </select>
                                {errors.motivo && (
                                    <p className="text-xs text-red-500">{errors.motivo}</p>
                                )}
                            </div>

                            {/* Mensagem */}
                            <div className="space-y-1.5">
                                <label htmlFor="modal-mensagem" className="text-sm font-medium text-black/70">
                                    Mensagem <span className="text-black/30">(opcional)</span>
                                </label>
                                <textarea
                                    id="modal-mensagem"
                                    value={form.mensagem}
                                    onChange={(e) => updateField("mensagem", e.target.value)}
                                    rows={3}
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
                                Você será redirecionado para o WhatsApp
                            </p>
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
