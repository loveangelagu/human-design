// Future ChatGPT API integration service
class ChatService {
  constructor() {
    this.baseURL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';
  }

  async sendMessage(message, userType = '') {
    try {
      // Use real ChatGPT API with type-specific guidance
      return await this.sendToChatGPT(message, userType);
    } catch (error) {
      console.error('Error sending message:', error);
      // Fallback to mock response if API fails
      return this.getMockResponse(message);
    }
  }

  getMockResponse(message) {
    const responses = [
      "I hear you, sweet soul. Let's explore that together. Human Design shows us that every challenge is actually pointing us toward our authentic path.",
      "That's such a beautiful question to bring forward. In Human Design, we learn that what feels like stumbling is often just our conditioning trying to override our true nature.",
      "Thank you for sharing that with me. Your Human Design chart holds so many keys to understanding why certain areas feel challenging. Let's unlock some of that wisdom together.",
      "I feel the sincerity in your question. Human Design teaches us that our 'stumbling blocks' are actually our greatest teachers, showing us where we're not honoring our authentic design."
    ];
    
    return {
      text: responses[Math.floor(Math.random() * responses.length)],
      timestamp: new Date(),
      type: 'bot'
    };
  }

  // ChatGPT API integration with Human Design type-specific guidance
  async sendToChatGPT(message, userType = '') {
    const prompt = userType 
      ? `You are an expert Human Design analyst 
         with deep knowledge of the Human Design System 
         created by Ra Uru Hu. You specialize in providing 
         practical, specific guidance based on Human Design 
         principles.

         When responding to struggles or questions:

         Provide specific guidance that includes:
          - How their Type's strategy applies to their 
            specific situation
          - Specific deconditioning suggestions 
            based on their Type
          - Practical experiments they can try this week
          - What to notice/observe about their energy 
            and responses

         Structure your response with:
          - Immediate insight based on their Type
          - Specific action steps aligned with their Strategy and Authority
          - What conditioning patterns might be at play
          - A simple experiment to try

         Keep responses practical and actionable rather 
         than overly theoretical. Focus on how Human Design 
         mechanics directly apply to their struggle. 
         Avoid generic advice that could apply to anyone.

         Always write your responses in multiple short 
         paragraphs with spacing between them, 
         instead of one long block of text.

         User's type: ${userType}
         User's struggle: ${message}`
      : `You are a warm, supportive Human Design AI guide. 
         You help people understand their Human Design chart 
         and navigate life challenges through the lens of 
         Human Design principles. Always respond with empathy, 
         wisdom, and gentle guidance. Keep responses conversational 
         and encouraging, similar to talking with a wise friend 
         who understands Human Design.`;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: prompt
          }
        ],
        max_tokens: 400,
        temperature: 0.7
      })
    });
    
    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }
    
    const data = await response.json();
    const botResponse = data.choices[0].message.content;
    
    return {
      text: botResponse,
      timestamp: new Date(),
      type: 'bot'
    };
  }
}

export default new ChatService(); 