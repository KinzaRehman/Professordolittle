# Professor Do Little

## 📸 Preview

![CRUD App Screenshot](/screenshot.png)

## ✨ Features

- **Create:** Add new quotes with an author's name.
- **Read:** Display quotes stored in MongoDB.
- **Update:** Update an existing quote using the application interface.
- **Delete:** Remove quotes from the database.
- **Persistent Storage:** Store quotes in MongoDB.
- **Dynamic Rendering:** Display database content using EJS templates.

## 🛠️ Tech Stack

- **Frontend:** HTML, CSS, JavaScript, EJS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas
- **Other Tools:** dotenv, Git, GitHub

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
cd YOUR-REPOSITORY
```

### 2. Install Dependencies

Make sure Node.js and npm are installed.

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory:

```env
MONGODB_URI=your_mongodb_connection_string
PORT=3000
```

Replace `your_mongodb_connection_string` with your own MongoDB Atlas connection string.

**Security:** Never commit your `.env` file or share your MongoDB credentials publicly.

### 4. Start the Application

```bash
node server.js
```

Open your browser and visit:
http://localhost:3000

## 📁 Project Structure

```text
CRUD/
├── public/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── main.js
├── views/
│   └── index.ejs
├── server.js
├── package.json
├── package-lock.json
├── .env.example
├── .gitignore
└── README.md
```


## 🔐 Security

This project uses environment variables to keep sensitive database credentials separate from the source code.

- MongoDB credentials are stored in a local `.env` file.
- `.env` is excluded from Git using `.gitignore`.
- `.env.example` provides a safe configuration template.
- Database credentials are never intentionally exposed to frontend JavaScript.
- Each developer must provide their own MongoDB connection string.

## 📚 What I Learned



## 📄 License

