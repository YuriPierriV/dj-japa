import type { Metadata } from 'next';
import Link from 'next/link';
import { absoluteUrl, siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description:
    'Politica de privacidade do site do DJ Japa para captacao de pedidos de orcamento e contato via WhatsApp.',
  alternates: {
    canonical: '/privacidade',
  },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-wedding-sand px-6 py-16 text-wedding-navy lg:px-12">
      <div className="mx-auto max-w-4xl rounded-sm bg-wedding-white p-8 shadow-lg lg:p-12">
        <div className="mb-10 space-y-4">
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-wedding-gold">
            Transparência
          </span>
          <h1 className="font-serif text-4xl font-medium leading-tight lg:text-5xl">
            Política de Privacidade
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-wedding-muted">
            Esta página explica como os dados enviados no formulário de orçamento são tratados no
            site {siteConfig.name}. O objetivo principal é responder pedidos comerciais e organizar
            o atendimento de casamentos e festas de 15 anos.
          </p>
        </div>

        <div className="space-y-8 text-base leading-8 text-wedding-muted">
          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-wedding-navy">Dados coletados</h2>
            <p>
              Quando você preenche o formulário, o site pode registrar nome, telefone, e-mail e
              data do evento para retorno comercial e elaboracao de proposta.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-wedding-navy">Como os dados são usados</h2>
            <p>
              Os dados são usados para contato via WhatsApp, organização do atendimento, registro
              de leads e acompanhamento de solicitacoes enviadas pelo site.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-wedding-navy">Ferramentas de terceiros</h2>
            <p>
              A página utiliza infraestrutura externa para armazenar leads e pode operar tags de
              mensuração de Google e Meta quando essas integrações estiverem habilitadas no
              ambiente de produção.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-wedding-navy">Contato</h2>
            <p>
              Para assuntos relacionados a privacidade, atualização de dados ou exclusão de
              informacoes, o canal principal de contato e o WhatsApp comercial exibido na pagina.
            </p>
          </section>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-wedding-navy/10 pt-8 text-sm text-wedding-muted sm:flex-row sm:items-center sm:justify-between">
          <p>{absoluteUrl('/privacidade')}</p>
          <Link className="text-wedding-navy underline underline-offset-4" href="/">
            Voltar para a página inicial
          </Link>
        </div>
      </div>
    </main>
  );
}
