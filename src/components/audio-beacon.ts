// Screenless Audio Beacon Player (Voice cues in your pocket)
let synth: SpeechSynthesis | null = null;
let isPlaying = false;

if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  synth = window.speechSynthesis;
}

export function playAudioCue(text: string, onEnd = () => {}) {
  if (!synth) {
    onEnd();
    return;
  }
  synth.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.95;
  utterance.pitch = 1.0;

  utterance.onstart = () => {
    isPlaying = true;
  };
  utterance.onend = () => {
    isPlaying = false;
    onEnd();
  };
  utterance.onerror = () => {
    isPlaying = false;
    onEnd();
  };

  synth.speak(utterance);
}

export function stopAudioCues() {
  if (synth) synth.cancel();
  isPlaying = false;
}

export function isAudioPlaying() {
  return isPlaying;
}
