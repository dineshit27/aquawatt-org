# Aquawatt - Water & Electricity Usage Tracker (on process) 

<div align="center">
  
[![React](https://img.shields.io/badge/React-18.2-blue?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-4.0-orange?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)

</div>

## 🌟 Features

### 📊 Real-time Monitoring
- Live consumption tracking per room
- Instant anomaly detection
- Device status indicators

### 📈 Data Visualization
- Interactive Recharts dashboards
- Usage comparison tools
- Exportable reports

### 🔐 User Management
- Admin/User role system
- Usage history tracking
- Profile customization

### ⚡ IoT Integration
- MQTT protocol support
- Multi-device compatibility
- Secure sensor authentication

## 🛠️ Tech Stack

**Frontend:**  
![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/-Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white)
![Redux](https://img.shields.io/badge/-Redux-764ABC?logo=redux&logoColor=white)
![Vite](https://img.shields.io/badge/-Vite-646CFF?logo=vite&logoColor=white)

**Backend:**  
![Node.js](https://img.shields.io/badge/-Node.js-339933?logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/-Express-000000?logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/-MongoDB-47A248?logo=mongodb&logoColor=white)

# File Tree: Aquawatt : A water and electricity tracking application

```
├── 📁 waterlight-harmony-07-main/
│   ├── 📁 node_modules/ 🚫 (auto-hidden)
│   ├── 📁 public/
│   │   ├── 🖼️ favicon.ico
│   │   ├── 🖼️ og-image.png
│   │   └── 🖼️ placeholder.svg
│   ├── 📁 src/
│   │   ├── 📁 components/
│   │   │   ├── 📁 home/
│   │   │   │   ├── 📄 AchievementsSection.tsx
│   │   │   │   ├── 📄 AdvancedChatbot.tsx
│   │   │   │   ├── 📄 ChatbotWidget.tsx
│   │   │   │   ├── 📄 FactsSection.tsx
│   │   │   │   ├── 📄 FeaturesSection.tsx
│   │   │   │   ├── 📄 HeroSection.tsx
│   │   │   │   ├── 📄 NotesSection.tsx
│   │   │   │   └── 📄 ToolsSection.tsx
│   │   │   ├── 📁 ui/
│   │   │   │   ├── 📄 accordion.tsx
│   │   │   │   ├── 📄 alert-dialog.tsx
│   │   │   │   ├── 📄 alert.tsx
│   │   │   │   ├── 📄 aspect-ratio.tsx
│   │   │   │   ├── 📄 avatar.tsx
│   │   │   │   ├── 📄 badge.tsx
│   │   │   │   ├── 📄 breadcrumb.tsx
│   │   │   │   ├── 📄 button.tsx
│   │   │   │   ├── 📄 calendar.tsx
│   │   │   │   ├── 📄 card.tsx
│   │   │   │   ├── 📄 carousel.tsx
│   │   │   │   ├── 📄 chart.tsx
│   │   │   │   ├── 📄 checkbox.tsx
│   │   │   │   ├── 📄 collapsible.tsx
│   │   │   │   ├── 📄 command.tsx
│   │   │   │   ├── 📄 context-menu.tsx
│   │   │   │   ├── 📄 dialog.tsx
│   │   │   │   ├── 📄 drawer.tsx
│   │   │   │   ├── 📄 dropdown-menu.tsx
│   │   │   │   ├── 📄 form.tsx
│   │   │   │   ├── 📄 header.tsx
│   │   │   │   ├── 📄 hover-card.tsx
│   │   │   │   ├── 📄 input-otp.tsx
│   │   │   │   ├── 📄 input.tsx
│   │   │   │   ├── 📄 label.tsx
│   │   │   │   ├── 📄 menubar.tsx
│   │   │   │   ├── 📄 navigation-menu.tsx
│   │   │   │   ├── 📄 pagination.tsx
│   │   │   │   ├── 📄 popover.tsx
│   │   │   │   ├── 📄 progress.tsx
│   │   │   │   ├── 📄 radio-group.tsx
│   │   │   │   ├── 📄 resizable.tsx
│   │   │   │   ├── 📄 scroll-area.tsx
│   │   │   │   ├── 📄 select.tsx
│   │   │   │   ├── 📄 separator.tsx
│   │   │   │   ├── 📄 sheet.tsx
│   │   │   │   ├── 📄 sidebar.tsx
│   │   │   │   ├── 📄 skeleton.tsx
│   │   │   │   ├── 📄 slider.tsx
│   │   │   │   ├── 📄 sonner.tsx
│   │   │   │   ├── 📄 switch.tsx
│   │   │   │   ├── 📄 table.tsx
│   │   │   │   ├── 📄 tabs.tsx
│   │   │   │   ├── 📄 textarea.tsx
│   │   │   │   ├── 📄 toast.tsx
│   │   │   │   ├── 📄 toaster.tsx
│   │   │   │   ├── 📄 toggle-group.tsx
│   │   │   │   ├── 📄 toggle.tsx
│   │   │   │   ├── 📄 tooltip.tsx
│   │   │   │   └── 📄 use-toast.ts
│   │   │   ├── 📄 AnalyticsMap.tsx
│   │   │   ├── 📄 AnalyticsSearch.tsx
│   │   │   ├── 📄 AuthButton.tsx
│   │   │   ├── 📄 DashboardHeader.tsx
│   │   │   ├── 📄 HomeCalculator.tsx
│   │   │   ├── 📄 HomeCalendar.tsx
│   │   │   ├── 📄 NotesFeature.tsx
│   │   │   ├── 📄 RandomFact.tsx
│   │   │   ├── 📄 Sidebar.tsx
│   │   │   ├── 📄 ThemeToggle.tsx
│   │   │   ├── 📄 UsageCard.tsx
│   │   │   └── 📄 UserAchievements.tsx
│   │   ├── 📁 contexts/
│   │   │   └── 📄 LanguageContext.tsx
│   │   ├── 📁 hooks/
│   │   │   ├── 📄 use-mobile.tsx
│   │   │   └── 📄 use-toast.ts
│   │   ├── 📁 integrations/
│   │   │   └── 📁 supabase/
│   │   │       ├── 📄 client.ts
│   │   │       └── 📄 types.ts
│   │   ├── 📁 lib/
│   │   │   └── 📄 utils.ts
│   │   ├── 📁 pages/
│   │   │   ├── 📄 About.tsx
│   │   │   ├── 📄 Analytics.tsx
│   │   │   ├── 📄 Billing.tsx
│   │   │   ├── 📄 Dashboard.tsx
│   │   │   ├── 📄 Devices.tsx
│   │   │   ├── 📄 Index.tsx
│   │   │   ├── 📄 NotFound.tsx
│   │   │   └── 📄 Profile.tsx
│   │   ├── 🎨 App.css
│   │   ├── 📄 App.tsx
│   │   ├── 🎨 index.css
│   │   ├── 📄 main.tsx
│   │   └── 📄 vite-env.d.ts
│   ├── 📁 supabase/
│   │   └── ⚙️ config.toml
│   ├── 🚫 .gitignore
│   ├── 📖 README.md
│   ├── 📄 bun.lockb
│   ├── 📄 components.json
│   ├── 📄 eslint.config.js
│   ├── 🌐 index.html
│   ├── 📄 package-lock.json
│   ├── 📄 package.json
│   ├── 📄 postcss.config.js
│   ├── 📄 tailwind.config.ts
│   ├── 📄 tsconfig.app.json
│   ├── 📄 tsconfig.json
│   ├── 📄 tsconfig.node.json
│   └── 📄 vite.config.ts
└── 📄 package-lock.json
```
