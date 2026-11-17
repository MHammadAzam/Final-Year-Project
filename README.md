# ScamShield — Simple & Clean Scam Protection for Pakistan

ScamShield is an AI-powered scam message detection system created specifically for **ordinary Pakistani mobile users** (including citizens with little or no technical background). It helps people quickly paste any SMS, WhatsApp alert, or direct message in **Roman Urdu**, **Urdu**, or **English** to understand whether it might be a scam and what safety steps to take.

---

## 🚀 Quick Start & Run Commands

Ensure Node.js (v18+) is installed.

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev

# 3. Build for production (TypeScript check + Vite bundler)
npm run build

# 4. Preview production build locally
npm run preview
```

---

## 🎯 Revised Design Direction

1. **Clean, Minimal SaaS Design**:
   - Default **Light Mode** with clean white surfaces (`#FFFFFF`), soft grey backgrounds (`#F8FAFC`), crisp borders (`#E2E8F0`), and friendly Teal accents (`#0D9488`).
   - Dark mode remains available as an optional toggle in the top navigation bar.
2. **Simplified Navigation**:
   - **Home (`/`)**: Welcoming experience with the large message input area front and center, community summary, and common Pakistani scam guides.
   - **Check Message (`/check`)**: Dedicated scam message check area with instant sample presets, loading spinner, and plain-language safety breakdown.
   - **History (`/history`)**: Clean, searchable archive of recent message checks with category filters and safety details.
   - **About (`/about`)**: Plain-language explanation of why ScamShield exists, Roman Urdu support, privacy policies, and official emergency helplines.
   - **Dashboard (`/dashboard` or `/app`)**: Minimal dashboard featuring a welcome message, large Check Message action, numbers checked, and simple threat summary.
3. **No Technical Jargon**:
   - Technical terms like vector embeddings, transformer inference, and heuristic tokens are excluded from everyday user interfaces.
   - Clear, plain-language risk labels: **Safe**, **Suspicious**, or **High Risk**.
   - Clear indicators showing why words like *"25,000 wazeefa"* or *"http://bit.ly"* are dangerous.
   - Official Pakistani emergency helplines: **PTA Anti-Fraud SMS 9999**, **FIA Cybercrime 1991**, and **State Bank of Pakistan**.

---

## 📁 Scalable Folder Structure

```
src/
├── components/
│   ├── checker/     # MessageChecker (Large input, presets, loading state, plain results)
│   ├── dashboard/   # Stat cards, minimal threat summary, table
│   ├── navigation/  # Clean minimal Navbar & Footer
│   └── ui/          # Reusable Button, RiskBadge, ThemeToggle
├── context/         # ThemeProvider (Defaulting to clean light mode)
├── data/            # Mock dataset (BISP scam, JazzCash phishing, prize scams, real bank OTPs)
├── hooks/           # useTheme hook
├── layouts/         # RootLayout (Navbar + max-w-6xl container + Footer)
├── lib/             # cn utility
├── pages/           # HomePage, CheckMessagePage, HistoryPage, AboutPage, DashboardOverview, NotFoundPage
└── types/           # Clear TypeScript interfaces
```
