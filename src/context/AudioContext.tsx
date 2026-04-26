'use client';

import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

// 'hero' = hero video has audio; number = that story index has audio; null = all muted
type AudioSource = 'hero' | number | null;

const AudioContext = createContext<{
  activeSource: AudioSource;
  setActiveSource: (s: AudioSource) => void;
}>({
  activeSource: 'hero',
  setActiveSource: () => {},
});

export function AudioProvider({ children }: { children: ReactNode }) {
  const [activeSource, setActiveSource] = useState<AudioSource>('hero');
  return (
    <AudioContext.Provider value={{ activeSource, setActiveSource }}>
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  return useContext(AudioContext);
}
