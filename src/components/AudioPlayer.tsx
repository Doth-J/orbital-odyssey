import React from "react";
import { useEffect, useRef } from "react";

export default function AudioPlayer({
  source,
  isOpen,
}: {
  source: string;
  isOpen: boolean;
}) {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isOpen) {
        audioRef.current.play().catch((error) => {
          console.warn("Playback failed or blocked:", error);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isOpen]);

  return (
    <audio
      ref={audioRef}
      className={`h-[20px] w-[450px] transition-all duration-1000 ease-in ${
        isOpen ? "opacity-10" : "opacity-90"
      }`}
    >
      <source src={source} type="audio/mp3" />
      Your browser does not support audio element.
    </audio>
  );
}
