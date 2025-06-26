# AI Call Center - Complete Backend & Frontend

A complete AI-powered call center solution with comprehensive API endpoints, campaign management, lead tracking, payment processing, and full Twilio-Gemini integration.

## 🎯 Complete Solution Includes:

- **Full Backend API** (73+ endpoints)
- **Twilio WebSocket Server** (tw2gem-server)
- **Gemini Live Client** (AI voice processing)
- **Audio Converter** (μ-law ↔ PCM conversion)
- **Frontend Dashboard** (React/Next.js)
- **Database Management** (Supabase integration)

## 🚀 Quick Start

**One command to start everything:**

```bash
node start-ai-call-center.js
```

This will:
- Install all dependencies (backend & frontend)
- Build all packages (twilio-server, gemini-live-client, tw2gem-server, audio-converter)
- Set up database tables
- Start backend API server (port 12001)
- Start frontend dashboard (port 3000)
- Configure PM2 process management

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account
- Twilio account
- Google Gemini API key
- Stripe account (optional, for payments)

## ⚙️ Configuration

After running the start command, update these files with your credentials:

### Backend (.env)
```env
SUPABASE_URL=your_supabase_url_here
SUPABASE_ANON_KEY=your_supabase_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key_here
GEMINI_API_KEY=your_gemini_api_key_here
TWILIO_ACCOUNT_SID=your_twilio_account_sid_here
TWILIO_AUTH_TOKEN=your_twilio_auth_token_here
TWILIO_PHONE_NUMBER=your_twilio_phone_number_here
TWILIO_API_KEY_SID=your_twilio_api_key_sid_here
TWILIO_API_KEY_SECRET=your_twilio_api_key_secret_here
STRIPE_SECRET_KEY=your_stripe_secret_key_here
STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key_here
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret_here
```

### Frontend (frontend/.env.local)
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
NEXT_PUBLIC_API_BASE_URL=http://localhost:12001
```

## 🔧 Management Commands

```bash
# Check service status
pm2 status

# View logs
pm2 logs
pm2 logs ai-call-backend
pm2 logs ai-call-frontend

# Restart services
pm2 restart all
pm2 restart ai-call-backend
pm2 restart ai-call-frontend

# Stop services
pm2 stop all
pm2 delete all
```

## 📊 Access Points

- **Frontend Dashboard**: http://localhost:3000
- **Backend API**: http://localhost:12001
- **Health Check**: http://localhost:12001/health
- **API Documentation**: http://localhost:12001/status

## 📦 Core Packages

### Twilio-Gemini Integration
- **`@tw2gem/twilio-server`** - WebSocket server for Twilio voice streams
- **`@tw2gem/gemini-live-client`** - Real-time Gemini Live API client
- **`@tw2gem/tw2gem-server`** - Bridge between Twilio and Gemini with function handling
- **`@tw2gem/audio-converter`** - Audio format conversion (μ-law ↔ PCM, resampling)

## 🎯 Features

### Core Functionality
- ✅ AI-powered voice calls with Gemini
- ✅ Inbound & outbound call handling
- ✅ Real-time call transcription
- ✅ Interactive Voice Response (IVR)
- ✅ Campaign management
- ✅ Lead tracking & management
- ✅ Agent configuration

### API Endpoints (73+ endpoints)
- ✅ Call management (CRUD operations)
- ✅ Campaign control (start/pause/stop)
- ✅ Lead management & import
- ✅ Agent configuration
- ✅ IVR menu management
- ✅ Notification system
- ✅ Data export (CSV/JSON)
- ✅ Payment processing (Stripe)
- ✅ Integration management (Zapier, GoHighLevel)
- ✅ Email notifications
- ✅ Usage tracking & analytics

### Integrations
- ✅ Twilio (Voice & SMS)
- ✅ Google Gemini AI
- ✅ Supabase (Database)
- ✅ Stripe (Payments)
- ✅ Zapier (Automation)
- ✅ GoHighLevel (CRM)

## 🗄️ Database Tables

The system automatically creates these tables:
- `profiles` - User profiles
- `ai_agents` - AI agent configurations
- `call_logs` - Call history and recordings
- `campaigns` - Outbound campaigns
- `campaign_leads` - Lead management
- `ivr_menus` & `ivr_options` - IVR system
- `notifications` - System notifications
- `webhook_endpoints` - Webhook management
- `zapier_integrations` - Zapier connections
- `subscriptions` & `usage_records` - Billing
- And more...

## 🔐 Security Features

- JWT authentication with Supabase
- Row-level security (RLS)
- API key management
- Webhook signature verification
- CORS protection
- Rate limiting

## 📈 Monitoring

- Health check endpoints
- System status monitoring
- Real-time call tracking
- Usage analytics
- Error logging
- Performance metrics

## 🆘 Troubleshooting

1. **Services won't start**: Check if ports 3000 and 12001 are available
2. **Database errors**: Verify Supabase credentials and connection
3. **Call issues**: Check Twilio webhook configuration
4. **Frontend errors**: Ensure API_BASE_URL points to backend

## 📞 Support

For issues or questions, check the logs:
```bash
pm2 logs
```

The system includes comprehensive error handling and logging for troubleshooting.