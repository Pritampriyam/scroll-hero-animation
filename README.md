# 🚗 Scroll-Driven Hero Section Animation

**Live Demo:** *Add your deployed URL here*

**Portfolio:** *Add your portfolio URL here*

---

## 📌 Project Overview

This project is a premium scroll-driven hero section inspired by a car animation reference website. The page creates an interactive storytelling experience where the user controls the motion of the car and UI elements through mouse wheel scrolling.

Instead of traditional page scrolling, the animation stays on a single screen (`100vh`) while the car moves horizontally across the road. Supporting metric cards appear progressively, a custom scrollbar shows progress, and the road fill expands with the car movement.

---

## ✨ Features

* 🎯 Single-screen immersive hero section
* 🚗 Car moves left to right based on scroll input
* 🟩 Green progress fill grows with car movement
* 📊 Statistic cards appear one by one at custom trigger points
* 🎚️ Custom vertical progress scrollbar
* ⚡ Smooth motion using GSAP + interpolation
* 🎨 Styled with Tailwind CSS
* ⚛️ Built with React + Vite
* 📱 Easy to extend for responsive layouts

---

## 🛠️ Tech Stack

* **React.js**
* **Vite**
* **Tailwind CSS**
* **GSAP (GreenSock Animation Platform)**
* **JavaScript (ES6+)**

---

## 📂 Project Structure

```bash
src/
├── components/
│   ├── Hero.jsx
│   ├── Stats.jsx
│   └── Navbar.jsx
│
├── hooks/
│   └── useAnimations.js
│
├── App.jsx
└── main.jsx
```

---

## ⚙️ How It Works

### 1. Scroll Input

Mouse wheel movement is converted into a progress value between `0 → 1`.

### 2. Smooth Interpolation

The current animation state smoothly follows the target progress value for premium motion.

### 3. Car Animation

The car translates horizontally based on scroll progress.

### 4. UI Sync

The following elements update together:

* Green fill width
  n- Custom scrollbar thumb
* Stats card reveals

---

## 🚀 Installation & Setup

```bash
# Clone repository
git clone <your-repo-url>

# Enter project folder
cd scroll-hero

# Install dependencies
npm install

# Start development server
npm run dev
```

---

## 🧪 Build for Production

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

---

## 🎛️ Customization Guide

### Change Car Speed

Edit in `src/hooks/useAnimations.js`

```js
progress += event.deltaY * 0.0005;
```

### Change Smoothness

```js
current += (progress - current) * 0.3;
```

### Change Card Trigger Timing

```js
const cardTriggers = [0.12, 0.32, 0.55, 0.78];
```

### Change Card Positions / Colors / Size

Edit in:

```bash
src/components/Stats.jsx
```

---

## 📸 Suggested Improvements

* Responsive mobile version
* Sound effects
* Real wheel rotation
* Touch swipe support
* Multiple scenes / sections
* Better accessibility support

---

## 🙌 Credits

Inspired by the provided scroll animation reference for assignment purposes.

---

## 👤 Author

**Your Name**

* Portfolio: Add your portfolio URL
* GitHub: Add your GitHub URL
* LinkedIn: Add your LinkedIn URL
