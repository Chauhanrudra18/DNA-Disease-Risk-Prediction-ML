# GeneGuard AI – Frontend

AI-Powered Genetic Disease Risk Prediction and Disease Recommendation System.

## Tech Stack

- React.js + Vite
- React Router DOM
- Tailwind CSS
- Recharts
- Axios
- Lucide React Icons

## Getting Started

```bash
cd geneguard-frontend
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Environment Variables

Create a `.env` file:

```env
VITE_API_URL=http://localhost:5000/api
VITE_USE_MOCK=true
```

Set `VITE_USE_MOCK=false` when connecting to Flask/FastAPI backend.

## Pages

| Route | Description |
|---|---|
| `/` | Landing page with hero, stats, ML pipeline |
| `/dashboard` | Analytics dashboard with charts |
| `/dna-analysis` | Manual form + CSV upload |
| `/predictions` | Risk gauge, genetic score, explainable AI |
| `/disease-recommendations` | Disease cards by risk level |
| `/model-insights` | Confusion matrix, ROC, metrics |
| `/dataset-insights` | Feature distribution charts |
| `/about` | Project documentation |

## API Endpoints (Backend Ready)

- `GET /api/dashboard/stats`
- `GET /api/dashboard/charts`
- `POST /api/predict`
- `POST /api/predict/batch`
- `GET /api/model/insights`
- `GET /api/dataset/insights`

Mock responses are used by default.

## Build

```bash
npm run build
npm run preview
```
