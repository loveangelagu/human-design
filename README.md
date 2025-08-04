# Human Design AI Guide

A beautiful, interactive AI chatbot designed to help users explore Human Design principles and their personal journey. Built with React and designed to integrate with ChatGPT API.

## Features

- **Beautiful UI**: Stunning gradient design with animated bot avatar
- **Interactive Chat**: Real-time messaging with typing indicators
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Accessible**: Built with accessibility best practices
- **Scalable Architecture**: Clean component structure for easy expansion

## Project Structure

```
src/
├── components/
│   └── ChatBot/
│       ├── ChatBot.js          # Main chat interface component
│       ├── ChatBot.css         # Main chat styling
│       ├── BotAvatar.js        # Animated bot avatar component
│       ├── BotAvatar.css       # Bot avatar styling
│       ├── ChatInput.js        # Input field and send button
│       └── ChatInput.css       # Input styling
├── services/
│   └── chatService.js          # API service layer for ChatGPT integration
├── App.js                      # Main app component
├── App.css                     # App-level styling
└── index.css                   # Global styles
```

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm start
   ```

3. **Open your browser** and navigate to `http://localhost:3000`

## Future Development

### Phase 1: ChatGPT API Integration
- [ ] Set up environment variables for API keys
- [ ] Implement actual ChatGPT API calls
- [ ] Add conversation context management
- [ ] Implement message history persistence

### Phase 2: Enhanced Features
- [ ] User authentication system
- [ ] Personal Human Design chart integration
- [ ] Conversation history and favorites
- [ ] Export chat transcripts

### Phase 3: Advanced AI Features
- [ ] Personalized responses based on user's Human Design type
- [ ] Voice input/output capabilities
- [ ] Image generation for visual explanations
- [ ] Multi-language support

## Technical Stack

- **Frontend**: React 19.1.1
- **Styling**: CSS3 with custom animations
- **Fonts**: Google Fonts (Poppins)
- **Future Backend**: Node.js/Express (for API routes)
- **Future AI**: OpenAI ChatGPT API

## Design Principles

This project follows several key software design principles:

1. **Separation of Concerns**: UI components, business logic, and API calls are separated
2. **Component Reusability**: Each component is designed to be reusable and maintainable
3. **Service Layer Pattern**: API calls are abstracted through a service layer
4. **Responsive Design**: Mobile-first approach with progressive enhancement
5. **Accessibility**: Built with ARIA labels, keyboard navigation, and focus management

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
