// Common PII patterns
const PII_PATTERNS = {
  EMAIL: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g,
  PHONE: /(\+\d{1,3}[-.]?)?\(?\d{3}\)?[-.]?\d{3}[-.]?\d{4}/g,
  SSN: /\d{3}[-]?\d{2}[-]?\d{4}/g,
  CREDIT_CARD: /\d{4}[- ]?\d{4}[- ]?\d{4}[- ]?\d{4}/g,
};

export interface PIIDetection {
  type: string;
  value: string;
}

export class PIIDetector {
  async detectPII(textContent: string): Promise<PIIDetection[]> {
    try {
      if (typeof textContent !== 'string') {
        throw new Error('Text content must be a string');
      }

      console.log('Detecting PII in text content');
      const detections: PIIDetection[] = [];

      // Check for each PII type
      for (const [type, pattern] of Object.entries(PII_PATTERNS)) {
        const matches = textContent.match(pattern);
        if (matches) {
          matches.forEach((match: string) => {
            detections.push({
              type,
              value: match
            });
          });
        }
      }

      return detections;
    } catch (error) {
      console.error('Error detecting PII:', error);
      throw new Error('Failed to detect PII in text content');
    }
  }

  maskPII(text: string, detections: PIIDetection[]): string {
    if (typeof text !== 'string') {
      throw new Error('Text must be a string');
    }

    let maskedText = text;
    // Sort results by startIndex in descending order to avoid index shifting issues
    const sortedDetections = [...detections].sort((a, b) => {
      const aIndex = text.indexOf(a.value);
      const bIndex = text.indexOf(b.value);
      return bIndex - aIndex;
    });

    for (const detection of sortedDetections) {
      const mask = '*'.repeat(detection.value.length);
      const index = text.indexOf(detection.value);
      if (index !== -1) {
        maskedText = maskedText.slice(0, index) + mask + maskedText.slice(index + detection.value.length);
      }
    }

    return maskedText;
  }
} 