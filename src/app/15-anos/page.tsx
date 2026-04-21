import type { Metadata } from 'next';
import EventLandingPage from '@/components/EventLandingPage';
import { buildLandingMetadata, getLandingContent } from '@/lib/landing-content';

const content = getLandingContent('15-anos');

export const metadata: Metadata = buildLandingMetadata(content);

export default function FifteenYearsPage() {
  return <EventLandingPage content={content} />;
}
