<img src="images/Untitled design (20).png" alt="Project Banner" width="100%">

<div align="center">
<h2>🚀 Aquawatt - Water & Electricity Usage Tracker App</h2>

[![Live Demo](https://img.shields.io/badge/Live-Demo-orange?style=flat&logo=vercel&logoColor=white)](https://aquawatt-hub.web.app/)
[![Version](https://img.shields.io/badge/Version-v2.0.0-7C3AED?style=flat&logo=semanticrelease&logoColor=white)](#)
[![Status](https://img.shields.io/badge/Status-Live-10B981?style=flat&logo=statuspage&logoColor=white)](#)
[![License](https://img.shields.io/badge/License-MIT-2563EB?style=flat&logo=opensourceinitiative&logoColor=white)](#)
[![React](https://img.shields.io/badge/Built%20With-React-cyan?style=flat&logo=react&logoColor=61DAFB)](https://react.dev)
[![Supabase](https://img.shields.io/badge/Backend%20By-Supabase-green?style=flat&logo=supabase&logoColor=3ECF8E)](https://supabase.com)
[![Powered By](https://img.shields.io/badge/Powered%20By-MQTT-660066?style=flat&logo=eclipsemosquitto&logoColor=white)](https://mqtt.org)

</div>

---

## 🚀 Introduction  
**Aquawatt** is an **IoT-powered water and electricity monitoring system** designed to help households track and manage **per-room resource consumption**. It tackles challenges like **rising utility bills**, **resource wastage**, and **lack of awareness** about daily usage patterns in different areas of the home (kitchen, bedroom, etc.).  

Using **low-cost IoT sensors** (water flow meters & smart energy monitors), Aquawatt captures real-time data and transmits it via **Wi-Fi** to a **centralized backend platform**. The data is then processed, stored, and displayed through a **full-stack web dashboard**, where users can explore **real-time and historical usage insights** with interactive charts and summaries.  

Aquawatt empowers users with **actionable insights**, enabling them to **detect anomalies**, **optimize daily routines**, and ultimately **reduce utility bills**—inspired by smart home solutions proven to cut electricity usage by up to **15%**.  

---

## ✨ Features  

| Feature | Description |
|---------|-------------|
| 🚰 **Water Usage Monitoring** | Tracks real-time water consumption in each room using flow sensors. |
| ⚡ **Electricity Usage Monitoring** | Measures energy usage with CT sensors for per-room insights. |
| 📡 **IoT Connectivity** | ESP32/NodeMCU sends data securely via Wi-Fi using MQTT/HTTP. |
| ☁️ **Cloud Storage & Processing** | Stores usage data in a time-series database for analysis. |
| 📊 **Analytics & Visualization** | Provides detailed charts, comparisons, and anomaly detection. |
| 🔔 **Smart Alerts** | Sends notifications for overuse, leaks, or abnormal power consumption. |
| 🌍 **Scalability** | Supports multi-room, multi-building, and future smart home integration. |
| 💻 **User Dashboard** | Web-based interface (React + Tailwind) for real-time monitoring. |

---

## 🛠️ Tech Stack

**Frontend:**  
![HTML](https://img.shields.io/badge/-HTML5-E34F26?logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/-CSS3-1572B6?logo=css3&logoColor=white)
![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/-Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white)
![Redux](https://img.shields.io/badge/-Redux-764ABC?logo=redux&logoColor=white)
![Vite](https://img.shields.io/badge/-Vite-646CFF?logo=vite&logoColor=white)

**Backend:**  
![Node.js](https://img.shields.io/badge/-Node.js-339933?logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/-Express-000000?logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/-MongoDB-47A248?logo=mongodb&logoColor=white)
![OpenAI](https://img.shields.io/badge/-OpenAI-00A67E?logo=openai&logoColor=white)

**Hardware Components**  
![ESP32](https://img.shields.io/badge/-ESP32-black?logo=espressif&logoColor=white)  ![NodeMCU](https://img.shields.io/badge/-NodeMCU-blue?logo=arduino&logoColor=white)  ![YF-S201](https://img.shields.io/badge/-YF--S201-0a9396)  ![ACS712](https://img.shields.io/badge/-ACS712-ff9f1c)  ![ZMPT101B](https://img.shields.io/badge/-ZMPT101B-9b5de5)  ![Relay Module](https://img.shields.io/badge/-Relay_Module-e63946)  


---

## 🔧 Aquawatt — Block Diagram

```mermaid
graph TD
    A[Water Flow Sensor 🚰] --> C[ESP32 / NodeMCU]
    B[Energy Meter ⚡] --> C[ESP32 / NodeMCU]
    C --> D[Wi-Fi Router 🌐]
    D --> E[Cloud Backend / API ☁️]
    E --> F[Database 🗄️]
    E --> G[Analytics Engine 📊]
    G --> H[Notification Service 🔔]
    E --> I[Web Dashboard 💻]
    I --> J[Users 👨‍👩‍👦]
    H --> J
```

---

## 📸 Screenshots  

<p align="center">
  <!-- Replace these image paths with your actual project screenshots -->
  <img src="images/Website frontend.png" alt="Home Page" width="45%"/>
  <img src="images/aquawatt gpt prototype.png" alt="Prototype Model" width="45%"/>
</p>

<p align="center">
  <!-- Replace these image paths with your actual project screenshots -->
  <img src="images/circuit and flow diagram.png" alt="Block & Wiring Diagram" width="45%"/>
  <img src="images/water prototype.jpeg" alt="Water" width="45%"/>
</p>

---

## 📂 Resources  

<p align="center">
  <!-- Project Abstract -->
  <a href="Documents/AQUAWATT_PROJECT.pdf" target="blank">
    <img src="https://img.shields.io/badge/📑%20Project%20Abstract-Download-blue?style=for-the-badge"/>
  </a>

  <!-- Project PPT -->
  <a href="Documents/Solvathon 4.0 PPT.pdf" target="blank">
    <img src="https://img.shields.io/badge/📑%20Project%20PPT-Download-green?style=for-the-badge"/>
  </a>

  <!-- Project Video -->
  <a href="Prototype video/Aquawatt video (1).mp4" target="blank">
    <img src="https://img.shields.io/badge/🎬%20Project%20Video-Watch-red?style=for-the-badge"/>
  </a>
</p>

---

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

---

## Contributing 🤝

Contributions are welcome! If you’d like to improve this project or add features, feel free to:

1. Fork the repo.
2. Create a new branch.
3. Submit a pull request.

I appreciate all suggestions for enhancement! 🙏

---

## Contact Me 📬

Let’s connect:

[![m.dinesh.it27@gmail.com](https://img.shields.io/badge/Contact%20me-m.dinesh.it27@gmail.com-red)](mailto:m.dinesh.it27@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Dinesh.M-blue)](https://www.linkedin.com/in/m-dinesh-d30/)
[![Instagram](https://img.shields.io/badge/Instagram-dinx_pvt_430-darkpink)](https://www.instagram.com/_dinx_pvt_430)
[![GitHub](https://img.shields.io/badge/GitHub-dineshit27-yellow)](https://github.com/dineshit27)

Thanks for stopping by! 👋

---

### Made with ❤️ by **Dinesh M**
