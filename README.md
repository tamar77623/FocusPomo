# ⏳ FocusPomo - Gamified Productivity Timer

A sleek, lightweight web application built with **Vanilla JavaScript** and **Tailwind CSS**. **FocusPomo** helps users maximize their focus and productivity through a dedicated 50-minute work session, incorporating gamification elements with a built-in coins reward system.

---

## 🌟 Features

* **50-Minute Deep Work Timer:** A single, distraction-free session designed for deep focus.
* **Gamification & Rewards:** Earn **40 Coins** upon successfully completing a full 50-minute session.
* **Full Timer Controls:** Start, pause, and reset the timer dynamically.
* **Real-time DOM Updates:** Continuous status updates for minutes, seconds, and earned coins.
* **Responsive & Minimal UI:** Modern, clean interface styled purely with Tailwind CSS.

---

## 🛠️ Tech Stack

* **HTML5:** Semantic markup structure.
* **Tailwind CSS:** Utility-first CSS framework for custom, responsive UI.
* **Vanilla JavaScript (ES6+):** Pure DOM manipulation, timing logic (`setInterval`), and state management.

---

## 📊 How It Works

1. **Start Session:** Click the **Start** button to begin your 50-minute (3,000 seconds) focus countdown.
2. **Pause/Reset:** Pause or reset the timer at any time if interrupted.
3. **Claim Reward:** Once the countdown reaches `00:00`, the application automatically adds **40 Coins** to your balance and updates your dashboard.

---

## 🧮 Timing Logic & Conversion

$$\text{Total Seconds} = 50 \times 60 = 3000 \text{ seconds}$$

$$\text{Minutes} = \lfloor \frac{\text{Remaining Seconds}}{60} \rfloor$$

$$\text{Seconds} = \text{Remaining Seconds} \bmod 60$$

---

## 🚀 Getting Started

No external dependencies or build tools are required!

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/your-username/FocusPomo.git](https://github.com/your-username/FocusPomo.git)
