# 💸 Expense Tracker

A simple and beginner-friendly Django web application to track daily expenses. This project allows users to record, manage, and analyze their spending habits through a lightweight web interface.

## 📌 Project Highlights

- 📊 Track daily expenses
- 💾 SQLite database integration
- ⚙️ Built with Django framework
- 🧱 Modular structure for future expansion

---

## 🛠 Tech Stack

| Layer       | Technology     |
|-------------|----------------|
| Backend     | Django (Python)|
| Database    | SQLite         |
| Frontend    | HTML (Django Templates) |
| Environment | Virtualenv     |

---

## 📁 Folder Structure
ExpenseTracker/
├── ExpenseTracker/ # Django project with settings, URLs, WSGI/ASGI
│ ├── settings.py
│ ├── urls.py
│ └── ...
├── db.sqlite3 # SQLite database
├── expense.py # Equivalent to manage.py
manage.py used to run the project

yaml
Copy
Edit

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
git clone https://github.com/yourusername/ExpenseTracker.git
cd ExpenseTracker
2️⃣ Create a Virtual Environment
bash
Copy
Edit
python -m venv env
# Activate it:
# On Windows:
env\Scripts\activate
# On macOS/Linux:
source env/bin/activate
3️⃣ Install Dependencies
bash
Copy
Edit
pip install django
4️⃣ Run Database Migrations
bash
Copy
Edit
python expense.py migrate
5️⃣ Start the Development Server
bash
Copy
Edit
python expense.py runserver
Visit http://127.0.0.1:8000 in your browser.

or py expense.py runserver

🔧 Customization Ideas
You can extend the project with:

Expense categories (e.g., Food, Transport, Bills)

Monthly summaries and analytics

Export to Excel/CSV

Authentication (User login/signup)

Responsive frontend with Bootstrap

Expense Tracker
<img width="1136" height="639" alt="1" src="https://github.com/user-attachments/assets/71ddd256-3940-4129-894d-503eb4c38fb4" />
