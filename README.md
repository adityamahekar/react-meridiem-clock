
# 🕐 React Clock App

A real-time digital clock built with React using `useState` and `useEffect` hooks.

---

## 🖼️ Screenshot

| 🕐 Clock using React Hook |
|:---:|
| ![Clock](./img/p53.png) |

---

## 🚀 Features

- 🕐 Displays live time updated every second
- 🔄 Auto-starts on mount, cleans up on unmount
- 🕛 12-hour format with AM / PM
- 🔢 Zero-padded hours, minutes & seconds
- ♻️ Uses `useEffect` cleanup to prevent memory leaks

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|:---:|:---:|:---|
| ⚛️ **React** | 18+ | UI library & functional components |
| 🪝 **useState** | Hook | Stores current time as `Date` object |
| ⏱️ **useEffect** | Hook | Runs `setInterval` every 1000ms |
| ⚡ **Vite** | 5+ | Fast dev server & build tool |
| 📦 **npm** | 9+ | Package manager |
| 🎨 **CSS** | `.clock-container` | Clock layout & styling |
| 🟨 **JavaScript** | ES6+ | Time formatting & logic |

---

## ⚙️ How It Works

| Step | Hook | Description |
|:---:|:---:|:---|
| 1 | `useState` | Initializes `time` with `new Date()` |
| 2 | `useEffect` | Starts `setInterval` every **1000ms** on mount |
| 3 | `setTime` | Updates state with fresh `new Date()` each tick |
| 4 | Cleanup | `clearInterval` runs on component unmount |
| 5 | `formatTime()` | Converts to 12-hr format with AM/PM |
| 6 | `padZero()` | Adds leading `0` for single-digit values |

---

## 📦 Getting Started

```bash

# Install dependencies
npm install

# Start the development server
npm run dev
```

------------------------
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
