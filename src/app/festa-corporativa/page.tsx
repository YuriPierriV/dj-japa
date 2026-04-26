import type { Metadata } from 'next';
import EventLandingPage from '@/components/EventLandingPage';
import { buildLandingMetadata, getLandingContent } from '@/lib/landing-content';

const content = getLandingContent('festa-corporativa');

export const metadata: Metadata = buildLandingMetadata(content);

export default function FestaCorporativaPage() {
  return <EventLandingPage content={content} />;
}
