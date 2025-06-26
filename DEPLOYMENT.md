# AI Call Center - Deployment Guide

## 🚀 One-Command Deployment

```bash
git clone https://github.com/movefreely22/ai-new-V1.git
cd ai-new-V1
node start-ai-call-center.js
```

That's it! The script will:
1. Install all dependencies
2. Set up database tables
3. Start both frontend and backend
4. Configure PM2 process management

## 📋 What You Need

### Required Services
1. **Supabase Account** (Database)
   - Create project at https://supabase.com
   - Get URL and keys from Settings > API

2. **Twilio Account** (Voice/SMS)
   - Sign up at https://twilio.com
   - Get Account SID, Auth Token, Phone Number
   - Create API Key in Console

3. **Google Gemini API** (AI)
   - Get API key from https://makersuite.google.com/app/apikey

### Optional Services
4. **Stripe Account** (Payments)
   - Get keys from https://dashboard.stripe.com/apikeys

## ⚙️ Configuration

After running the start command, update these files:

### 1. Backend Configuration (.env)
```env
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
GEMINI_API_KEY=your_gemini_api_key_here
TWILIO_ACCOUNT_SID=your_twilio_account_sid_here
TWILIO_AUTH_TOKEN=your_twilio_auth_token_here
TWILIO_PHONE_NUMBER=+1234567890
TWILIO_API_KEY_SID=your_twilio_api_key_sid_here
TWILIO_API_KEY_SECRET=your_twilio_api_key_secret_here
STRIPE_SECRET_KEY=sk_test_... (optional)
STRIPE_PUBLISHABLE_KEY=pk_test_... (optional)
```

### 2. Frontend Configuration (frontend/.env.local)
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
NEXT_PUBLIC_API_BASE_URL=http://localhost:12001
```

## 🔄 Restart After Configuration

```bash
pm2 restart all
```

## 🌐 Production Deployment

For production, update these URLs:
- Frontend: Change `NEXT_PUBLIC_API_BASE_URL` to your domain
- Twilio: Set webhook URL to `https://yourdomain.com/webhook/voice`

## 📊 Verify Deployment

1. **Health Check**: http://localhost:12001/health
2. **Frontend**: http://localhost:3000
3. **API Status**: http://localhost:12001/status

## 🔧 Management

```bash
# Check status
pm2 status

# View logs
pm2 logs

# Restart services
pm2 restart all

# Stop services
pm2 stop all
```

## 🆘 Troubleshooting

### Common Issues

1. **Port conflicts**: Change ports in .env files
2. **Database errors**: Check Supabase credentials
3. **Twilio webhook**: Ensure public URL for production
4. **Permission errors**: Run with appropriate user permissions

### Debug Commands

```bash
# Check if services are running
pm2 status

# View detailed logs
pm2 logs ai-call-backend
pm2 logs ai-call-frontend

# Test API directly
curl http://localhost:12001/health

# Check database connection
node -e "import('./create-all-tables.js')"
```

## 📞 Support

The system includes comprehensive logging and error handling. Check PM2 logs for detailed troubleshooting information.