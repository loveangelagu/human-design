// Future ChatGPT API integration service
class ChatService {
  constructor() {
    this.baseURL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';
  }

  async sendMessage(message) {
    try {
      // TODO: Replace with actual ChatGPT API call
      // For now, return a mock response
      return this.getMockResponse(message);
    } catch (error) {
      console.error('Error sending message:', error);
      throw new Error('Failed to send message');
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

  // Future method for ChatGPT API integration
  async sendToChatGPT(message) {
    // TODO: Implement actual ChatGPT API call
    // const response = await fetch(`${this.baseURL}/chat`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`
    //   },
    //   body: JSON.stringify({ message })
    // });
    // return response.json();
  }
}

export default new ChatService(); 