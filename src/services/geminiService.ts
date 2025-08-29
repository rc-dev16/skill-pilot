import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

let genAI: GoogleGenerativeAI | null = null;

try {
  if (API_KEY && API_KEY !== '') {
    genAI = new GoogleGenerativeAI(API_KEY);
  }
} catch (error) {
  console.warn('Gemini API not configured:', error);
}

export const generateScamMessage = async (): Promise<string> => {
  if (!genAI) {
    return `URGENT: You have received a cashback of ₹500! To get the money in your account instantly, click here: fake-upi-link.com

आपको ₹500 का कैशबैक मिला है! तुरंत पैसे पाने के लिए, यहां क्लिक करें: fake-upi-link.com`;
  }

  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
    
    const prompt = `Generate a short, convincing SMS scam message in English and Hindi that tricks a user into clicking a link to claim a fake ₹500 UPI cashback. The message should:
    1. Create urgency
    2. Promise money (cashback/reward)
    3. Include a fake link (use 'fake-upi-link.com')
    4. Be realistic like actual scam messages
    5. First line in English, second line in Hindi
    6. Keep it under 200 characters total
    
    Format:
    [English message with fake link]
    
    [Hindi translation with same fake link]`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    return text.trim();
  } catch (error) {
    console.error('Error generating scam message:', error);
    return `URGENT: You have received a cashback of ₹500! To get the money in your account instantly, click here: fake-upi-link.com

आपको ₹500 का कैशबैक मिला है! तुरंत पैसे पाने के लिए, यहां क्लिक करें: fake-upi-link.com`;
  }
};

export const generateFeedback = async (): Promise<string> => {
  if (!genAI) {
    return `Let's pause for a moment. The message promised you would receive money, but this screen is asking you to pay. This is a common scam. Always check the button before entering your PIN.

एक पल रुकें। संदेश में आपको पैसे मिलने का वादा किया गया था, लेकिन यह स्क्रीन आपसे पैसे देने के लिए कह रही है। यह एक आम घोटाला है।`;
  }

  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
    
    const prompt = `A user just fell for a UPI cashback scam. In a friendly and simple tone, write an explanation in English and Hindi that teaches them to check if the app is asking them to 'Pay' versus 'Receive'. The explanation should:
    1. Be encouraging, not accusatory
    2. Point out the key issue: promised to receive but asked to pay
    3. Give practical advice
    4. Be concise and clear
    5. First paragraph in English, second in Hindi
    6. Keep total under 300 characters
    
    Start with something like "Let's pause for a moment..." and explain the mismatch between the promise and the action.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    return text.trim();
  } catch (error) {
    console.error('Error generating feedback:', error);
    return `Let's pause for a moment. The message promised you would receive money, but this screen is asking you to pay. This is a common scam. Always check the button before entering your PIN.

एक पल रुकें। संदेश में आपको पैसे मिलने का वादा किया गया था, लेकिन यह स्क्रीन आपसे पैसे देने के लिए कह रही है। यह एक आम घोटाला है।`;
  }
};