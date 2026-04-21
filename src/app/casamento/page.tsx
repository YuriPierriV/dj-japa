import type { Metadata } from 'next';
import EventLandingPage from '@/components/EventLandingPage';
import { buildLandingMetadata, getLandingContent } from '@/lib/landing-content';

const content = getLandingContent('casamento');

export const metadata: Metadata = buildLandingMetadata(content);

export default function CasamentosPage() {
  return <EventLandingPage content={content} />;
}
