# SKILL PILOT - AI-Powered Digital Literacy Platform

## Overview

SKILL PILOT is a revolutionary digital literacy platform that provides a safe environment for users to practice digital skills, learn to identify scams, and build confidence in the digital world. The platform features realistic simulations powered by AI to create authentic learning experiences.

## Features

### Landing Page
- **CSS Masterpiece Design**: Elegant, minimalist interface with black, white, and grayscale palette
- **Smooth Animations**: Scroll-triggered animations, fade-ins, and subtle parallax effects
- **Premium Typography**: Clean Inter font family with strong visual hierarchy
- **Responsive Design**: Optimized for all devices with strategic breakpoints

### Core Functionality
- **Practice Safe UPI**: Interactive simulation teaching users to identify UPI payment scams
- **AI-Powered Content**: Dynamic scenario generation using Google Gemini API
- **Voice Feedback**: Automatic speech synthesis for enhanced learning
- **Realistic UI Replicas**: High-fidelity mockups of messaging and UPI apps

### Technical Architecture
- **React.js**: Modern functional components with hooks
- **TypeScript**: Type-safe development
- **Modular Design**: Clean file organization with separation of concerns
- **100% Frontend**: No backend dependencies for easy deployment

## Getting Started

### Prerequisites
- Node.js 16+ and npm
- Google Gemini API key (optional - fallback content provided)

### Installation

1. Clone and install dependencies:
```bash
npm install
```

2. Configure Gemini API (Optional):
   - Get your API key from [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Copy `env.example` to `.env` and replace `your_gemini_api_key_here` with your actual key

3. Start development server:
```bash
npm run dev
```

### Project Structure

```
src/
├── components/
│   ├── LandingPage.tsx      # Hero section with elegant design
│   ├── MainMenu.tsx         # Module selection interface
│   ├── UPISimulation.tsx    # Interactive UPI safety training
│   └── *.css                # Component-specific styles
├── services/
│   ├── geminiService.ts     # AI content generation
│   └── speechService.ts     # Text-to-speech functionality
├── App.tsx                  # Main application logic
└── App.css                  # Global styles and animations
```

## Key Features Breakdown

### 1. Landing Page Experience
- **Hero Section**: Powerful opening with call-to-action
- **Problem Definition**: Visual explanation of digital literacy challenges
- **Solution Showcase**: Animated demo of the platform capabilities
- **Final CTA**: Compelling invitation to start learning

### 2. UPI Safety Simulation
- **Realistic Messages App**: Authentic SMS interface with scam message
- **Deceptive UPI Interface**: High-fidelity payment screen that tricks users
- **AI-Generated Content**: Dynamic scam scenarios for varied learning
- **Intelligent Intervention**: Context-aware feedback with voice guidance
- **Success Tracking**: Clear completion indicators and learning reinforcement

### 3. AI Integration
- **Dynamic Scenarios**: Gemini API generates realistic scam messages
- **Smart Feedback**: Contextual explanations tailored to user actions
- **Bilingual Support**: Content in both English and Hindi
- **Fallback Content**: Ensures functionality without API configuration

### 4. Accessibility Features
- **Voice Feedback**: Automatic text-to-speech for key interactions
- **Clear Visual Hierarchy**: High contrast and readable typography
- **Mobile-First Design**: Optimized touch interfaces
- **Progressive Enhancement**: Works with or without advanced features

## Development Guidelines

### Code Organization
- **Single Responsibility**: Each file focuses on one component/feature
- **Modular Architecture**: Clear separation between UI, services, and logic
- **Type Safety**: Full TypeScript coverage for reliability
- **Performance**: Optimized animations and efficient rendering

### Styling Approach
- **CSS Modules**: Component-scoped styles prevent conflicts
- **Design System**: Consistent spacing, colors, and typography
- **Responsive Design**: Mobile-first with strategic breakpoints
- **Animation Strategy**: Subtle, purposeful motion design

### API Integration
- **Error Handling**: Graceful fallbacks for service failures
- **Security**: No sensitive data exposed in frontend
- **Performance**: Efficient API calls with caching where appropriate

## Future Roadmap

### Planned Modules
- **Fill Aadhaar Form**: Government form completion training
- **Spot Fake News**: Media literacy and fact-checking skills
- **Online Banking Safety**: Secure banking practices
- **Social Media Privacy**: Privacy settings and security awareness

### Technical Enhancements
- **User Progress Tracking**: Save completion status locally
- **Multiple Difficulty Levels**: Beginner to advanced scenarios
- **Offline Capability**: Service worker for offline access
- **Analytics Integration**: Learning effectiveness metrics

## Security Notes

- **API Key Safety**: Never commit your actual Gemini API key to version control
- **Environment Variables**: Use `.env` file for sensitive configuration (already in `.gitignore`)
- **Fallback Content**: The app works without API configuration using built-in fallback content

## Contributing

This project serves as an MVP demonstration of AI-powered educational technology. The codebase is designed to be easily extensible for additional modules and features.

## License

This project is created as an educational demonstration of modern web development practices and AI integration in EdTech applications.