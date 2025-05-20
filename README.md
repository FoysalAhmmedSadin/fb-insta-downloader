
# InstaFB Video Downloader

A simple tool to download Facebook and Instagram videos in various qualities using React for frontend and Flask for backend.

## Features
- Download videos in multiple resolutions
- Supports both Facebook & Instagram
- Responsive, dark-themed UI

## Setup

### Frontend (React)
```bash
cd frontend
# Setup React project and integrate `InstaFBDownloader.jsx` component.
```

### Backend (Flask)
```bash
cd backend
pip install -r requirements.txt
python app.py
```

API will run on `http://localhost:5000/download`

## Deployment
- **Frontend**: Deploy `frontend/` on Vercel or Netlify
- **Backend**: Deploy `backend/` on Render.com or Railway
