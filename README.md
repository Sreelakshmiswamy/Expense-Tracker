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
User login Page 

<img width="1136" height="639" alt="1" src="https://github.com/user-attachments/assets/71ddd256-3940-4129-894d-503eb4c38fb4" />

User signup Page 

<img width="1133" height="637" alt="2" src="https://github.com/user-attachments/assets/30d54658-089b-45dd-a742-787346878442" />

Dashboard Page 

<img width="940" height="445" alt="image" src="https://github.com/user-attachments/assets/85c89c24-b207-4278-9f9f-44bfde0c7d6e" />

Add Income Page 

<img width="1122" height="630" alt="3" src="https://github.com/user-attachments/assets/356e4d3b-946a-42be-93bf-99f6294e2975" />

Add Expense Page 

<img width="1146" height="644" alt="4" src="https://github.com/user-attachments/assets/44fb4fa4-730b-43fa-a3a9-883941fd7dfe" />

Expense and Income Records Page

<img width="1227" height="690" alt="5" src="https://github.com/user-attachments/assets/217a8ae2-e966-4732-8daa-83667752cd24" />

 Profile Page 

<img width="1153" height="648" alt="6" src="https://github.com/user-attachments/assets/8505b9de-e83e-45ff-82f2-fc7fbd430207" />

Profile Edit Page 

<img width="1121" height="630" alt="7" src="https://github.com/user-attachments/assets/6ae3bf9b-f873-4dd0-b305-5df5204fd43c" />


<img width="1162" height="654" alt="8" src="https://github.com/user-attachments/assets/f5a21804-b7c5-45c3-a89d-6d4e2d9a6db6" />

Monthly Expense Page 

<img width="1184" height="666" alt="9" src="https://github.com/user-attachments/assets/49c16473-826f-4dd0-a3fd-0bb52d2db320" />

Saving Alert Page 

<img width="1183" height="665" alt="10" src="https://github.com/user-attachments/assets/bfafa6a6-e169-459e-a8c4-35d2bdac95e5" />

Savings and Income Alert Page 

<img width="1215" height="684" alt="11" src="https://github.com/user-attachments/assets/89ac3d7a-a110-43ca-a5ab-e125924494e9" />

Yearly Expense Page 

<img width="1162" height="654" alt="12" src="https://github.com/user-attachments/assets/06bc3fba-6227-4c14-a05d-acf86e58f84e" />

History

<img width="1184" height="666" alt="13" src="https://github.com/user-attachments/assets/fd8d82fb-d239-4163-957c-3aa0aac7e3fc" />

 Monthly Savings Page
 
![savings](https://github.com/user-attachments/assets/8e24a875-4311-4225-9390-81c731adfe09)
Alert in Monthly Savings Page 

![savings2](https://github.com/user-attachments/assets/fa9a0ad8-e601-4373-8a9d-f23745447632)














