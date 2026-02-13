import type { Metadata } from "next";
import { ContatoContent } from "./ContatoContent";

export const metadata: Metadata = {
    title: "Agende sua Consulta | Instituto Frisoli",
    description:
        "Agende sua consulta geriátrica no Instituto Frisoli. Atendimento humanizado via WhatsApp, telefone ou presencial na Vila Olímpia, São Paulo.",
};

export default function ContatoPage() {
    return <ContatoContent />;
}
