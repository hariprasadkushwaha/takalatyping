# Takala Typing - M.P. Online Service Center

Premium bilingual full-stack website for Takala Typing M.P. Online Service Center.

## Terminal Commands

```bash
# Frontend
cd frontend
npm install
npm install react-router-dom react-icons axios framer-motion i18next react-i18next i18next-browser-languagedetector
npm install -D tailwindcss postcss autoprefixer
npm run dev

# Backend
cd ../backend
npm install
npm install express cors dotenv
npm install -D nodemon
npm run dev
```

## Manual Folder Creation Commands

```bash
mkdir frontend backend
mkdir frontend/src frontend/src/assets frontend/src/components frontend/src/pages frontend/src/hooks frontend/src/translations
mkdir backend/routes backend/controllers
```

## Run URLs

- Frontend: `http://localhost:5173`
- Backend: `http://localhost:5000`
- Backend health: `http://localhost:5000/api/health`
