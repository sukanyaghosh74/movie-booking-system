# Movie Ticket Booking System

## 📌 Overview
This is a **backend system** for a movie ticket booking application. Users can:
- View movies and showtimes.
- Book tickets with **dynamic pricing** based on demand and time.
- Make payments securely.
- Theater owners can manage shows and pricing.

The backend is built using **Node.js, Express, MongoDB, and Redis**, with authentication handled via **JWT**.

---

## 🚀 Features
### ✅ Level 0: Basic Authentication
- User registration and login system using JWT.
- Password hashing with bcrypt.

### ✅ Level 1: Basic Backend (Movies, Shows & Bookings)
- Users can view movies and available shows.
- Theater owners can add and manage shows.
- Users can book seats for a show and view past bookings.

### ✅ Level 2: Dynamic Pricing & Role-Based Access
- **Dynamic Pricing Rules**:
  - If **70%+ seats** are booked, price **increases by 30%**.
  - If **booked within 3 hours** of the show, price **increases by 20%**.
  - Low demand applies a **discount**.
  - Peak hours (7 PM - 10 PM) have **higher base prices**.
- **Role-Based Access**:
  - **Theater Owners** can add/update shows and set base prices.
  - **Users** can only view and book shows.

### ✅ Level 3: Payments & Advanced Features
- **Seat Reservation**:
  - Seats are held for **10 minutes** after a booking starts.
  - If payment is not completed within **10 minutes**, seats are released.
- **End-to-End Payment Flow**:
  - Payments are handled via a dummy payment API.
  - Webhooks handle payment success & failure.
- **Dockerized Setup**:
  - `Dockerfile` and `docker-compose.yml` included for easy deployment.

---

## 🏗 Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT
- **Caching & Seat Locking**: Redis
- **Payments**: Dummy Payment Gateway
- **Containerization**: Docker, Docker Compose

---

## ⚙️ Installation & Setup
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/sukanyaghosh74/movie-booking-system.git
cd movie-booking-system
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Configure Environment Variables
Create a `.env` file:
```sh
PORT=5000
MONGO_URI=mongodb://localhost:27017/movie_booking
JWT_SECRET=your_secret_key
REDIS_HOST=localhost
REDIS_PORT=6379
PAYMENT_GATEWAY_URL=https://dummy-payment-gateway.com
```

### 4️⃣ Start the Server
```sh
npm start
```

---

## 🐳 Docker Setup
### 1️⃣ Build and Run Docker Containers
```sh
docker-compose up --build
```

This will start:
- The **Node.js backend**
- The **MongoDB database**
- The **Redis caching system**

---

## 📌 API Endpoints
### **Authentication**
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login and get JWT token |

### **Movies & Shows**
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/movies` | Get all movies |
| POST | `/api/movies` | Add a new movie (Owner Only) |
| GET | `/api/shows` | Get all shows |
| POST | `/api/shows` | Add a new show (Owner Only) |

### **Bookings**
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/bookings` | Book a ticket |
| GET | `/api/bookings` | View user bookings |

### **Dynamic Pricing & Simulation**
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/pricing/simulate` | Calculate dynamic pricing based on parameters |

### **Payments**
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/payments/initiate` | Initiate a payment |
| POST | `/api/payments/webhook` | Handle payment success/failure |

---

## ✅ Deployment (Optional)
### 1️⃣ Deploy to Heroku
```sh
heroku login
heroku create movie-booking-system
heroku config:set MONGO_URI=your_mongo_url JWT_SECRET=your_secret_key REDIS_HOST=your_redis_url
```
```sh
git push heroku main
```

### 2️⃣ Deploy to AWS
- Use **EC2** with **Docker**:
```sh
sudo docker-compose up --build -d
```

---

## 🛠 Future Enhancements
- Add **Seat Selection** feature.
- Implement **Email & SMS Notifications**.
- Integrate **Multiple Payment Gateways**.

---

## 📜 License
This project is licensed under the **MIT License**.

---

## 👨‍💻 Author
[Sukanya Ghosh](https://github.com/sukanyaghosh74) 🚀

