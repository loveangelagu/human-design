// Future ChatGPT API integration service
class ChatService {
  constructor() {
    this.baseURL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';
  }

  async sendMessage(message) {
    try {
      // Use real ChatGPT API
      return await this.sendToChatGPT(message);
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

  // ChatGPT API integration
  async sendToChatGPT(message) {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'You are a warm, supportive Human Design AI guide. You help people understand their Human Design chart and navigate life challenges through the lens of Human Design principles. Always respond with empathy, wisdom, and gentle guidance. Keep responses conversational and encouraging, similar to talking with a wise friend who understands Human Design.'
          },
          {
            role: 'user',
            content: message
          }
        ],
        max_tokens: 300,
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