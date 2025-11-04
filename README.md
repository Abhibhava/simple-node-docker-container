# Simple Node.js App in Docker 🐳

This is a minimal **DevOps beginner project** that demonstrates how to containerize a simple Node.js application using **Docker**.  
The goal is to understand the basic workflow of building, packaging, and running an application inside a container.

---

## 📦 Project Overview

- **Language:** Node.js (Express)
- **Containerization Tool:** Docker
- **Purpose:** Build a small Node.js server, then containerize and run it inside a Docker container.

---

## 🚀 Features

- Simple Node.js web server running on port **3000**  
- Lightweight Docker image using `node:18-alpine`  
- Can be deployed anywhere with a single command  
- Teaches the fundamentals of Docker build and run flow  

---

## 🧩 Project Structure

simple-node-docker/
│
├── server.js
├── package.json
├── package-lock.json
├── Dockerfile
└── .dockerignore



---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

git clone https://github.com/<your-username>/simple-node-docker.git
cd simple-node-docker

2️⃣ Install Dependencies
npm install

3️⃣ Run Locally (without Docker)

node server.js
Visit: http://localhost:3000

🐳 Docker Setup
1️⃣ Build the Docker Image
docker build -t simple-node-app .

2️⃣ Run the Container
docker run -p 3000:3000 simple-node-app
Visit: http://localhost:3000

🧱 Dockerfile Explanation
Step	Instruction	Purpose
1	FROM node:18-alpine	Use a lightweight Node.js base image
2	WORKDIR /app	Set the working directory inside the container
3	COPY package*.json ./	Copy dependency files
4	RUN npm install	Install dependencies
5	COPY . .	Copy application files
6	EXPOSE 3000	Document that the app runs on port 3000
7	CMD ["node", "server.js"]	Run the app when the container starts


