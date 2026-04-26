import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Política de Privacidade | DJ Japa',
  description:
    'Saiba como o DJ Japa coleta, usa e protege os dados informados no formulário de orçamento.',
  alternates: {
    canonical: '/privacidade',
  },
};

const updated = '26 de abril de 2025';

export default function PrivacyPage() {
  const wa = `https://wa.me/${siteConfig.whatsappNumber}`;

  return (
    <main className="min-h-screen bg-wedding-sand px-6 py-16 text-wedding-navy lg:px-12">
      <div className="mx-auto max-w-3xl rounded-sm bg-wedding-white p-8 shadow-lg lg:p-12">

        {/* Header */}
        <div className="mb-10 space-y-3 border-b border-wedding-navy/10 pb-10">
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-wedding-gold">
            Transparência
          </span>
          <h1 className="font-serif text-4xl font-medium leading-tight lg:text-5xl">
            Política de Privacidade
          </h1>
          <p className="text-sm text-wedding-navy/50">Atualizado em {updated}</p>
          <p className="text-base leading-8 text-wedding-navy/70">
            Esta política explica de forma direta como o {siteConfig.name} trata as informações
            que você compartilha ao solicitar um orçamento. Não temos interesse em coletar
            mais dados do que o estritamente necessário para responder ao seu pedido.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-10 text-base leading-8 text-wedding-navy/70">

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-medium text-wedding-navy">1. O que coletamos</h2>
            <p>
              Ao preencher o formulário de orçamento, você nos informa voluntariamente:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Nome</li>
              <li>Data do evento</li>
              <li>Número de WhatsApp (quando informado)</li>
            </ul>
            <p>
              Nenhum dado é coletado sem interação direta sua. Não utilizamos cookies de
              rastreamento próprios além dos estritamente necessários para o funcionamento do site.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-medium text-wedding-navy">2. Para que usamos</h2>
            <p>
              Os dados servem exclusivamente para:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Entrar em contato via WhatsApp para apresentar uma proposta comercial</li>
              <li>Organizar internamente o calendário de atendimentos</li>
              <li>Acompanhar o status do pedido até o fechamento ou descarte</li>
            </ul>
            <p>
              Seus dados <strong>não são vendidos, repassados ou compartilhados</strong> com
              terceiros para fins de marketing.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-medium text-wedding-navy">3. Ferramentas externas</h2>
            <p>
              O site pode utilizar ferramentas de mensuração de desempenho (como Google Analytics
              ou Meta Pixel) para entender como os visitantes chegam às páginas. Essas ferramentas
              operam de acordo com as próprias políticas de privacidade do Google e da Meta e
              podem registrar dados de navegação de forma anonimizada.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-medium text-wedding-navy">4. Por quanto tempo guardamos</h2>
            <p>
              As informações de contato são mantidas apenas pelo tempo necessário para concluir
              o atendimento. Pedidos que não evoluem para contratação são descartados em até
              90 dias após o último contato.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-medium text-wedding-navy">5. Seus direitos</h2>
            <p>
              Em conformidade com a LGPD (Lei nº 13.709/2018), você pode a qualquer momento:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Solicitar a exclusão dos seus dados</li>
              <li>Pedir confirmação sobre quais informações temos sobre você</li>
              <li>Revogar consentimento e encerrar o atendimento</li>
            </ul>
            <p>
              Para exercer qualquer um desses direitos, basta nos chamar diretamente no{' '}
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="text-wedding-navy underline underline-offset-4 hover:text-wedding-gold transition-colors"
              >
                WhatsApp
              </a>
              .
            </p>
          </section>

        </div>

        {/* Footer */}
        <div className="mt-12 flex flex-col gap-4 border-t border-wedding-navy/10 pt-8 text-sm text-wedding-navy/50 sm:flex-row sm:items-center sm:justify-between">
          <p>{siteConfig.name} — todos os direitos reservados</p>
          <Link className="text-wedding-navy underline underline-offset-4 hover:text-wedding-gold transition-colors" href="/">
            Voltar ao início
          </Link>
        </div>

      </div>
    </main>
  );
}
