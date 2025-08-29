export const speakText = (text: string, type: 'warning' | 'success' = 'warning'): void => {
  try {
    if (!('speechSynthesis' in window)) {
      console.warn('Speech synthesis not supported');
      return;
    }

    window.speechSynthesis.cancel();

    const hindiText = text.split('\n\n')[1] || text.split('\n')[1] || text;

    const utterance = new SpeechSynthesisUtterance(hindiText);
    
    utterance.rate = 0.8;
    utterance.pitch = type === 'success' ? 1.1 : 0.9;
    utterance.volume = 0.8;
    
    const voices = window.speechSynthesis.getVoices();
    
    const hindiVoice = voices.find(voice => 
      (voice.lang.startsWith('hi') || voice.lang.includes('Hindi'))
    );
    
    const preferredVoice = hindiVoice || voices.find(voice => 
      voice.lang.startsWith('en')
    );
    
    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }

    utterance.onerror = (event) => {
      console.error('Speech synthesis error:', event);
    };

    window.speechSynthesis.speak(utterance);
    
  } catch (error) {
    console.error('Error in speech synthesis:', error);
  }
};

export const stopSpeech = (): void => {
  try {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  } catch (error) {
    console.error('Error stopping speech:', error);
  }
};

export const isSpeechSupported = (): boolean => {
  return 'speechSynthesis' in window;
};