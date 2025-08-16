# 🎓 College E-Resource Platform (MERN)

A full-stack web application built with the **MERN stack (MongoDB, Express, React, Node.js)** that helps students easily access academic resources such as **notes, PYQs, syllabus, and video tutorials**.  

Admins can upload and manage resources, while students can log in to explore them in a clean, modern **glassy UI**.

---

## ✨ Features

### 👩‍🎓 For Students
- 🔑 Login/Signup authentication
- 📂 Browse resources department-wise, semester-wise, and subject-wise
- 🎥 Access drive links, video links, syllabus, and preparation tips
- 🌐 Skill section (web dev, DSA, etc.)
- 📢 View feedbacks & FAQs
- 📱 Mobile-responsive with bottom navigation
- 🌙 Dark mode support
- ❤️ Add resources to favorites

### 🛠 For Admins
- 📌 Admin login with protected dashboard
- 📤 Upload/manage resources (add/edit/delete)
- 📊 Manage skills section
- 💬 Upload feedbacks (from students via email)
- ❓ Upload/manage FAQs
- 👀 Visitor tracking dashboard

---

## ⚙️ Tech Stack

- **Frontend:** React.js, TailwindCSS, React Router
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose)
- **Auth:** JWT Authentication
- **Styling:** Tailwind + custom glassy UI
- **Deployment:** (Netlify / Vercel for frontend, Render / Railway for backend)

---

## 🚀 Getting Started

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/College-EResource.git
cd College-EResource
````

### 2️⃣ Install dependencies

Frontend:

```bash
cd client
npm install
```

Backend:

```bash
cd server
npm install
```

### 3️⃣ Environment Variables

Create a `.env` file in both `client` and `server`.

**For client (`client/.env`):**

```env
REACT_APP_API_BASE=http://localhost:5000
```

**For server (`server/.env`):**

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
PORT=5000
```

### 4️⃣ Run the project

Backend:

```bash
cd server
npm run dev
```

Frontend:

```bash
cd client
npm start
```

The app should now be running at:

* Frontend → `http://localhost:3000`
* Backend → `http://localhost:5001

---

## 📂 Project Structure

```
college-e-resource/
│── client/          # React frontend
│   ├── src/
│   │   ├── Components/
│   │   ├── Pages/
│   │   ├── assets/
│   │   └── utils/
│
│── server/          # Express backend
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── seeders/
│   └── config/
│
│── README.md
```

---

## 👨‍💻 Contribution

1. Fork the repo
2. Create a new branch (`feature/xyz`)
3. Commit changes
4. Push and create a PR

---

## 📜 License

This project is licensed under the **MIT License** – free to use and modify.

---

## 🙌 Acknowledgments

* Inspired by the need to guide juniors in college.
* Built with 💙 using MERN stack.
