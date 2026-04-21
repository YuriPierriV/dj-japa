import Link from 'next/link';
import { siteConfig } from '@/lib/site';
import JLogo from '@/components/JLogo';

type SiteFooterProps = {
  description: string;
};

export default function SiteFooter({ description }: SiteFooterProps) {
  return (
    <footer className="bg-[#0a0a0a] text-wedding-white/60">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 border-b border-white/5 pb-20">

          {/* Brand Column */}
          <div className="col-span-1 lg:col-span-2">
            <div className="mb-6 h-12 w-12 opacity-90 sm:h-16 sm:w-16">
              <JLogo className="w-full h-full" />
            </div>
            <p className="font-serif text-3xl text-wedding-white mb-4 sm:text-4xl">
              {siteConfig.name}
            </p>
            <p className="max-w-sm text-sm font-light leading-relaxed text-wedding-white/50">
              {description}
            </p>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="mb-6 text-[10px] font-bold uppercase tracking-[0.2em] text-wedding-gold/80">
              Navegação
            </h4>
            <nav className="flex flex-col gap-4 text-sm font-light">
              <a href="#como-funciona" className="hover:text-wedding-gold transition-colors">O Processo</a>
              <a href="#sobre" className="hover:text-wedding-gold transition-colors">A Entrega</a>
              <a href="#depoimentos" className="hover:text-wedding-gold transition-colors">Histórias</a>
              <a href="#contato" className="hover:text-wedding-gold transition-colors">Orçamento VIP</a>
            </nav>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="mb-6 text-[10px] font-bold uppercase tracking-[0.2em] text-wedding-gold/80">
              Rotas & Contato
            </h4>
            <nav className="flex flex-col gap-4 text-sm font-light">
              <Link href="/casamento" className="hover:text-wedding-gold transition-colors">Casamentos</Link>
              <Link href="/15-anos" className="hover:text-wedding-gold transition-colors">15 Anos</Link>
              <a href={`https://wa.me/${siteConfig.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="hover:text-wedding-gold transition-colors">WhatsApp Direto</a>
              <Link href="/privacidade" className="hover:text-wedding-gold transition-colors">Política de Privacidade</Link>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-xs font-light text-wedding-white/30 sm:flex-row">
          <p>© {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.</p>
          <div className="flex gap-6 uppercase tracking-widest text-[9px]">
            <span>Desenvolvido para criar pistas memoráveis</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
