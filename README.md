# Professor Do Little
Professor do little is an express app allowing users to enter the university where they took the professors class, their name, their review, and rating out of 5 stars. They can also update the review and the rating for the professor. 

### 📸 Preview
[Live](https://professordolittle.onrender.com/)

![App Screenshot](/landing.png)

### ✨ Features

- **Create:** Add the professors rating card. 
- **Read:** Displays all ratings
- **Update "Edit":** Update the review and the rating.
- **Delete "X"** Remove whole review
- **Persistent Storage:** Store quotes in MongoDB.


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
Professordolittle/
├── public/
│   ├── style.css
│   └── main.js
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
