'use client';

import { AudioProvider } from '@/context/AudioContext';
import type { ReactNode } from 'react';

export default function AudioWrapper({ children }: { children: ReactNode }) {
  return <AudioProvider>{children}</AudioProvider>;
}
