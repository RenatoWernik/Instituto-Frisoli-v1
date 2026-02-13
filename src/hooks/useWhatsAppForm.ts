"use client";

import { useState, useCallback } from "react";

const WHATSAPP_NUMBER = "5511999999999";

export const MOTIVO_OPTIONS = [
    "Avaliação Geriátrica Completa",
    "Saúde Cognitiva & Memória",
    "Gestão de Doenças Crônicas",
    "Prevenção de Quedas & Mobilidade",
    "Gestão de Medicamentos",
    "Nutrição para Longevidade",
    "Cuidados Paliativos",
    "Apoio Familiar & Cuidadores",
    "Outro",
] as const;

export type Motivo = (typeof MOTIVO_OPTIONS)[number];

interface FormData {
    nome: string;
    telefone: string;
    motivo: string;
    mensagem: string;
}

interface FormErrors {
    nome?: string;
    telefone?: string;
    motivo?: string;
}

export function useWhatsAppForm() {
    const [form, setForm] = useState<FormData>({
        nome: "",
        telefone: "",
        motivo: "",
        mensagem: "",
    });

    const [errors, setErrors] = useState<FormErrors>({});

    const updateField = useCallback((field: keyof FormData, value: string) => {
        setForm((prev) => ({ ...prev, [field]: value }));
        setErrors((prev) => ({ ...prev, [field]: undefined }));
    }, []);

    const validate = useCallback((): boolean => {
        const newErrors: FormErrors = {};

        if (!form.nome || form.nome.trim().length < 2) {
            newErrors.nome = "Informe seu nome (mínimo 2 caracteres)";
        }

        const digits = form.telefone.replace(/\D/g, "");
        if (!form.telefone || digits.length < 10) {
            newErrors.telefone = "Informe um telefone válido (mínimo 10 dígitos)";
        }

        if (!form.motivo) {
            newErrors.motivo = "Selecione um motivo";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }, [form]);

    const buildWhatsAppUrl = useCallback((): string => {
        const lines = [
            `🏥 *Agendamento - Instituto Frisoli*`,
            ``,
            `*Nome:* ${form.nome.trim()}`,
            `*Telefone:* ${form.telefone.trim()}`,
            `*Motivo:* ${form.motivo}`,
        ];

        if (form.mensagem.trim()) {
            lines.push(``, `*Mensagem:* ${form.mensagem.trim()}`);
        }

        const text = encodeURIComponent(lines.join("\n"));
        return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
    }, [form]);

    const submit = useCallback((): boolean => {
        if (!validate()) return false;
        const url = buildWhatsAppUrl();
        window.open(url, "_blank");
        return true;
    }, [validate, buildWhatsAppUrl]);

    const reset = useCallback(() => {
        setForm({ nome: "", telefone: "", motivo: "", mensagem: "" });
        setErrors({});
    }, []);

    return { form, errors, updateField, validate, buildWhatsAppUrl, submit, reset };
}
