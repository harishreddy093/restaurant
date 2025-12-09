# LuxeMenu - Premium Digital Menu

A premium, dark-themed digital restaurant menu with direct WhatsApp ordering integration.

## 🚀 Features

- **Table System**: Supports both URL-based table detection (e.g., `/t/1`) and manual table number entry.
- **Premium UI**: "Apple-style" dark aesthetics with gold accents.
- **WhatsApp Ordering**: Orders are formatted and sent directly to the kitchen.
- **Cart System**: Local storage persistence and sticky bottom cart.

## 🛠 Tech Stack

- **Frontend**: React (Vite/Next.js compatible), TailwindCSS, Framer Motion (via CSS animations)
- **Icons**: Lucide React
- **Database**: PostgreSQL (Supabase)
- **ORM**: Prisma

## 📦 Setup Instructions

### 1. Environment Variables
Create a `.env` file in your root:

```env
DATABASE_URL="postgresql://user:password@host:port/db?schema=public"
NEXT_PUBLIC_KITCHEN_WHATSAPP="919876543210" # Your kitchen WhatsApp number
```

### 2. Database Setup (Prisma)
Initialize your database:

```bash
# Install dependencies
npm install prisma --save-dev
npm install @prisma/client

# Initialize Prisma
npx prisma init

# Push schema to DB
npx prisma db push

# (Optional) Seed the database
node prisma/seed.js
```

### 3. Running Locally
```bash
npm run dev
```

### 4. Deployment (Vercel)
1. Push code to GitHub.
2. Import project into Vercel.
3. Add `DATABASE_URL` and `NEXT_PUBLIC_KITCHEN_WHATSAPP` to Vercel Environment Variables.
4. Deploy.

## 📱 Usage

1. **Landing Page**: Guests enter their table number manually or scan a specific QR code.
2. **Menu**: Guests browse items and add to cart.
3. **Order**: Guests send the order via WhatsApp, pre-filled with their table number and items.
