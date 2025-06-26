# TW2GEM AI Call Center - Complete Monorepo

A complete TW2GEM-based AI call center solution built on the proven tw2gem-server architecture. This monorepo contains all packages for integrating Twilio with Google's Gemini AI for real-time audio processing, plus a comprehensive management UI and API.

## 🏗️ TW2GEM Architecture

Built on the core TW2GEM principles:
- **Modular Package Structure** - Each component is a separate, reusable package
- **Real-time Audio Processing** - Direct Twilio ↔ Gemini integration
- **WebSocket-based Communication** - Low-latency voice streaming
- **TypeScript-first Development** - Type-safe, scalable codebase

## 📦 Monorepo Structure

```
packages/
├── audio-converter/     # Audio format conversion (μ-law ↔ PCM)
├── twilio-server/       # Twilio WebSocket server
├── gemini-live-client/  # Gemini Live API client
├── tw2gem-server/       # Core bridge server (Twilio ↔ Gemini)
├── server/             # Management API server (built on tw2gem)
├── ui/                 # Management dashboard (React/Next.js)
└── examples/           # Example implementations
```

## 🚀 Quick Start

**One command to start everything:**

```bash
node start-ai-call-center.js
```

This will:
- Install all workspace dependencies
- Build all TW2GEM packages (audio-converter, twilio-server, gemini-live-client, tw2gem-server)
- Set up database tables
- Start management API server (port 12001) 
- Start UI dashboard (port 3000)
- Configure PM2 process management

## 🔧 Development

### Individual Package Development
```bash
# Start just the core server
npm run dev

# Start UI development server
npm run ui:dev

# Start API server development
npm run server:dev

# Build all packages
npm run build

# Build just the UI
npm run ui:build
```

## 📋 Prerequisites

- Node.js 18+ 
- PM2 (installed automatically)

## 🔑 Environment Setup

The start script will create `.env` files with placeholders. Update these with your credentials:

### Backend (.env)
```env
GEMINI_API_KEY=your_gemini_api_key
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_PHONE_NUMBER=your_twilio_phone_number
TWILIO_API_KEY_SID=your_twilio_api_key_sid
TWILIO_API_KEY_SECRET=your_twilio_api_key_secret
```

### UI (.env.local)
```env
VITE_API_URL=http://localhost:12001
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 🌐 Access Points

After starting:
- **Management UI**: http://localhost:3000
- **API Server**: http://localhost:12001
- **Health Check**: http://localhost:12001/health
- **API Documentation**: http://localhost:12001/status

## 📦 Core TW2GEM Packages

### Real-time Audio Processing
- **`@tw2gem/audio-converter`** - Audio format conversion (μ-law ↔ PCM, resampling)
- **`@tw2gem/twilio-server`** - WebSocket server for Twilio voice streams
- **`@tw2gem/gemini-live-client`** - Real-time Gemini Live API client
- **`@tw2gem/tw2gem-server`** - Core bridge server with function handling

### Application Layer
- **`@tw2gem/server-api`** - Management API server (built on tw2gem-server)
- **`@tw2gem/ui`** - Management dashboard and call center interface

## 🎯 Features

### Core TW2GEM Functionality
- ✅ Real-time Twilio ↔ Gemini audio streaming
- ✅ WebSocket-based voice communication
- ✅ Audio format conversion (μ-law, PCM, resampling)
- ✅ Function calling and AI interactions
- ✅ Low-latency voice processing

### Management & API Features
- ✅ 73+ REST API endpoints
- ✅ Campaign management
- ✅ Lead tracking and CRM
- ✅ Call analytics and reporting
- ✅ Payment processing (Stripe)
- ✅ User management and authentication
- ✅ Real-time call monitoring

### UI Dashboard Features
- ✅ Modern React/Next.js interface
- ✅ Real-time call monitoring
- ✅ Campaign management
- ✅ Lead management
- ✅ Analytics and reporting
- ✅ User administration

## 🔄 Process Management

### PM2 Commands
```bash
pm2 status              # View all processes
pm2 logs ai-call-backend # View backend logs
pm2 logs ai-call-ui     # View UI logs
pm2 restart all         # Restart all processes
pm2 stop all           # Stop all processes
pm2 delete all         # Delete all processes
```

## 🏗️ Architecture Overview

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Twilio Call   │◄──►│  TW2GEM Server   │◄──►│  Gemini Live    │
│   (WebSocket)   │    │   (Core Bridge)  │    │      API        │
└─────────────────┘    └──────────────────┘    └─────────────────┘
                                │
                                ▼
                       ┌──────────────────┐
                       │  Management API  │
                       │    (Express)     │
                       └──────────────────┘
                                │
                                ▼
                       ┌──────────────────┐
                       │   UI Dashboard   │
                       │  (React/Next.js) │
                       └──────────────────┘
```

## 🚀 Deployment

### Production Deployment
1. Clone the repository
2. Run `node start-ai-call-center.js`
3. Update environment variables
4. Configure your domain/reverse proxy
5. Set up SSL certificates

### Docker Support
```bash
# Build and run with Docker
docker build -t tw2gem-ai-call-center .
docker run -p 3000:3000 -p 12001:12001 tw2gem-ai-call-center
```

## 🤝 Contributing

This project follows TW2GEM monorepo conventions:

1. Each package is independent and reusable
2. TypeScript-first development
3. Consistent API patterns
4. Comprehensive testing
5. Clear documentation

## 📄 License

MIT License - see LICENSE file for details.

## 🔗 Related Projects

- [TW2GEM Core](https://github.com/TianMaster93/tw2gem) - Original TW2GEM monorepo
- [Twilio Voice SDK](https://www.twilio.com/docs/voice)
- [Google Gemini Live API](https://ai.google.dev/gemini-api/docs/live)