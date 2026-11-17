# BlogWorld – MERN Blog Website

A simple and responsive full-stack blog application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). Users can register, log in, create blog posts, view published blogs, and manage their own posts.

## 🚀 Features

### Authentication
- User registration and login.
- Password hashing using bcryptjs.
- JWT-based authentication.
- Protected routes for authenticated users.

### Blog Management
- Create new blog posts.
- View all published blogs.
- View individual blog details.
- Edit existing blog posts.
- Delete blog posts.
- View your own published posts.
- Display author details using Mongoose populate.

### Frontend
- Responsive React interface.
- Reusable components.
- Separate Layout component.
- Navbar and Sidebar navigation.
- React Router for page navigation.
- Context API for authentication state.
- Axios for API integration.

### Backend
- RESTful API using Express.js.
- MongoDB database with Mongoose.
- Separate models, controllers, routes and middleware.
- User and Post schema relationship.
- JWT authentication middleware.

---

## 🛠️ Technologies Used

| Frontend | Backend | Database |
|---|---|---|
| React.js | Node.js | MongoDB |
| React Router DOM | Express.js | Mongoose |
| Axios | JWT | |
| React Icons | bcryptjs | |
| CSS | dotenv | |

---

## 📁 Project Structure

```text
blog-website/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── models/
│   │   ├── userModel.js
│   │   └── postModel.js
│   ├── controllers/
│   │   ├── authController.js
│   │   └── postController.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── postRoutes.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── .env
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── layouts/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── context/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation and Setup

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL

cd blog-website
```

### 2. Backend Setup

Navigate to the backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file in the backend folder:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/blogWebsite
JWT_SECRET=xxxxxx
```

For MongoDB Atlas, replace the local MongoDB URI with your Atlas connection string.

Start the backend:

```bash
npm run dev
```

Backend runs at:

```text
http://localhost:5000
```

### 3. Frontend Setup

Open another terminal and navigate to the frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the React application:

```bash
npm run dev
```

Frontend runs at:

```text
http://localhost:5173
```

---

## 🔗 API Endpoints

### Authentication APIs

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login user |

### Blog APIs

| Method | Endpoint | Description | Authentication |
|---|---|---|---|
| GET | `/api/posts` | Get all blog posts | No |
| GET | `/api/posts/:id` | Get a single blog | No |
| GET | `/api/posts/my-posts` | Get logged-in user's blogs | Yes |
| POST | `/api/posts` | Create a blog | Yes |
| PUT | `/api/posts/:id` | Update a blog | Yes |
| DELETE | `/api/posts/:id` | Delete a blog | Yes |

For protected APIs, pass the JWT token in the request header:

```text
Authorization: Bearer YOUR_JWT_TOKEN
```

---

## 🗄️ Database Schema Relationship

The application uses two MongoDB collections:

### User Schema

- name
- email
- password
- posts (Array of Post ObjectIds)

### Post Schema

- title
- content
- author (User ObjectId reference)
- createdAt
- updatedAt

### Relationship

One user can create multiple blog posts, and each post belongs to one user.

```text
User
  |
  | One-to-Many
  |
  ├── Post 1
  ├── Post 2
  └── Post 3
```

Mongoose `populate()` is used to retrieve author details along with blog posts.

---

## 🖥️ Application Pages

1. **Home Page** – Displays all published blogs.
2. **Register Page** – Allows new users to create an account.
3. **Login Page** – Authenticates existing users.
4. **Create Blog Page** – Allows users to publish new posts.
5. **My Posts Page** – Displays blogs created by the logged-in user.
6. **Post Details Page** – Displays complete blog content.
7. **Edit Blog Page** – Allows users to update their posts.

---

## 🔐 Authentication Flow

1. User registers with name, email and password.
2. Password is hashed before saving to MongoDB.
3. User logs in using email and password.
4. Backend verifies the credentials.
5. JWT token is generated after successful login.
6. Frontend stores the token and user information.
7. Protected routes use JWT authentication middleware.
---

## 👩‍💻 Author


**Ankita Mahaseth**

**Full Stack MERN Developer**

Built with ❤️ using React, Node.js, Express.js and MongoDB.

---

## 📄 License

This project is created for learning and portfolio purposes.