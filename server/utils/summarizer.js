const summarizeText = (text) => {
    // Mock summary for demonstration
    const sentences = text.split('.').map((sentence) => sentence.trim()).filter(Boolean);
    const summary = sentences.slice(0, 5).map((sentence, index) => `• ${sentence}`).join('\n');

    return summary;
};

module.exports = summarizeText;
