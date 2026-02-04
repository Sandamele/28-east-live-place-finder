# 28East Live Place Finder
Build a full-stack web application that allows a user to find specific types of places (e.g.,
restaurants, cafes) near an address they enter, using live data from Google Maps APIs.

## Tech Stack
### Frontend
- React (Vite)
- JavaScript
- Google Maps JavaScript API

### Backend
- Node.js 22.17+
- Express.js
- Google Geocoding API
- Google Places API

## Prerequisites
- Make sure you have:
- Node.js 22.17
- npm 
- A Google Cloud account

## Project Structure
```bash
east-live-place-finder/
  backend/
  frontend/
  README.md
```

## Clone Project
```bash
git clone project-name
cd east-live-placc-finder
```

## Setup Google Maps API Key
1. Go to [https://console.cloud.google.com](https://console.cloud.google.com)
2. Create a new project (or select one)
3. Enable these APIs:
  - Geocoding API
  - Places API
  - Maps JavaScript API
4. Enable Billing for the project
5. Go to APIs & Services → Credentials → Create Credentials → API Key
6. Copy the key
7. Restrict the key to:
  - Geocoding API
  - Places API
  - Maps JavaScript API


## Backend Local Setup
```bash
cd backend
cp .env.example .env # Open .env and add the values and google api key
```

### Install & run local
```bash
npm install # Install dependencies
npm run dev # Running on http://localhost:1337
```

## Frontend Local Setup
```bash
cd frontend
cp .env.example .env # Open .env and add the values and google api Key
```

### Install & run local
```bash
npm install # Install dependencies
npm run dev # Running on http://localhost:5173
```