# GrowUp Craft — Full Stack Web Development Agency Website

A conversion-focused, human-designed website for GrowUp Craft, a web development agency serving local businesses in Palwal, Haryana.

## 🚀 Quick Start

### Frontend (React + Vite)

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Backend (Node.js + Express + MongoDB)

```bash
cd backend

# Install dependencies
npm install

# Copy env file and fill in your values
cp .env.example .env

# Start development server
npm run dev

# Start production server
npm start
```

## 📁 Project Structure

```
growupcraft/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Fixed navbar with mobile menu
│   │   ├── Hero.jsx            # Hero with typing animation + UI preview
│   │   ├── TrustBar.jsx        # Marquee tech stack strip
│   │   ├── Services.jsx        # 5 services with problem/solution format
│   │   ├── Projects.jsx        # 3 case studies (gym, coaching, property)
│   │   ├── HowWeWork.jsx       # 4-step process section
│   │   ├── Testimonials.jsx    # 4 realistic testimonials
│   │   ├── DemoDashboard.jsx   # Interactive gym management demo
│   │   ├── Contact.jsx         # Contact form + WhatsApp CTA
│   │   ├── Footer.jsx          # Footer with SEO keywords
│   │   └── WhatsAppFloat.jsx   # Floating WhatsApp button
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── backend/
│   ├── server.js               # Express + MongoDB API
│   ├── package.json
│   └── .env.example
├── index.html                  # SEO meta tags
├── vite.config.js              # With API proxy
├── tailwind.config.js
└── package.json
```

## 🎨 Design Tokens

- **Font Display:** Syne (headings)
- **Font Body:** DM Sans
- **Font Mono:** JetBrains Mono
- **Ink:** `#0D0D0D`
- **Paper:** `#F5F2EC`
- **Moss:** `#2D5016`
- **Lime:** `#8BC34A`

## 🛠 Tech Stack

- **Frontend:** React 18, Vite, Tailwind CSS, Framer Motion
- **Backend:** Node.js, Express
- **Database:** MongoDB + Mongoose

## 📲 WhatsApp Integration

Update the phone number in these files:
- `src/components/Navbar.jsx`
- `src/components/Hero.jsx`
- `src/components/Services.jsx`
- `src/components/HowWeWork.jsx`
- `src/components/Contact.jsx`
- `src/components/WhatsAppFloat.jsx`
- `src/components/Footer.jsx`

Replace `919999999999` with your actual WhatsApp number (with country code, no +).

## 🔍 SEO

Local SEO keywords included:
- "full stack developer Palwal"
- "web application developer Haryana"
- "website development local business Palwal"
- Custom meta tags in `index.html`

## 🚢 Deployment

**Frontend:** Vercel, Netlify, or any static host
```bash
npm run build
# Upload /dist folder
```

**Backend:** Railway, Render, or VPS
```bash
cd backend
# Set environment variables
npm start
```
