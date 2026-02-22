# Amanah Islamic Academy 🕌

A full-stack website for **Amanah Islamic Academy** — an online platform offering Islamic courses for children and young adults. Built with the MERN stack (MongoDB, Express, React, Node.js).

## ✨ Features

- **Course Catalog** — Browse courses for children and young adults
- **Online Enrollment** — Submit enrollment forms directly through the website
- **Contact Form** — Reach out via an integrated contact form
- **Blog** — Read articles and updates
- **Testimonials** — See what students and parents are saying
- **Responsive Design** — Optimized for all screen sizes with Bootstrap 5
- **Smooth Animations** — AOS (Animate On Scroll) for engaging UX
- **WhatsApp Integration** — Quick-connect WhatsApp button

## 🛠️ Tech Stack

| Layer      | Technology                                  |
|------------|---------------------------------------------|
| Frontend   | React 18, Vite, Bootstrap 5, AOS, Axios     |
| Backend    | Node.js, Express 5, Mongoose                |
| Database   | MongoDB (local or Atlas)                     |
| Fonts      | Google Fonts (Cinzel, Scheherazade New)      |

## 📁 Project Structure

```
Amanah Website/
├── frontend/               # React + Vite app
│   ├── assets/             # Images (about, blog, slider)
│   ├── src/
│   │   ├── components/     # Navbar, Footer, Slider, WhatsAppButton, courses/
│   │   ├── pages/          # Home, About, Courses, Contact, Blog, Testimonials
│   │   ├── App.jsx         # Root component with React Router
│   │   ├── main.jsx        # Entry point
│   │   └── index.css       # Global styles
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
├── backend/                # Express API server
│   ├── db/config.js        # MongoDB connection
│   ├── models/             # Mongoose schemas (Enrollment, Contact)
│   ├── routes/             # API routes (enroll, contact)
│   ├── app.js              # Express entry point
│   └── package.json
├── .gitignore
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- [MongoDB](https://www.mongodb.com/) (local install or Atlas account)

### 1. Clone the repository

```bash
git clone https://github.com/<your-username>/amanah-islamic-academy.git
cd amanah-islamic-academy
```

### 2. Backend setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` folder:

```env
PORT=1000
DB_URL_LOCAL=mongodb://localhost:27017/amanah
DB_URL=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/
```

Start the backend:

```bash
node app.js
```

### 3. Frontend setup

```bash
cd frontend
npm install
npm run dev
```

The frontend dev server will start at `http://localhost:5173`.

### 4. Root dependencies (optional)

If you need Tailwind or other root-level tooling:

```bash
# From the project root
npm install
```

## 📜 Available Scripts

| Location   | Script            | Description              |
|------------|-------------------|--------------------------|
| `frontend` | `npm run dev`     | Start Vite dev server    |
| `frontend` | `npm run build`   | Build for production     |
| `frontend` | `npm run preview` | Preview production build |
| `backend`  | `node app.js`     | Start Express server     |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is for educational and community purposes.
