#!/bin/bash

# Install backend (Flask) dependencies
echo "Installing Flask backend dependencies..."
cd backend
source ../venv/bin/activate  # Activate virtual environment (if exists)
pip install -r requirements.txt  # Python dependencies

# Navigate to backend and start Flask
echo "Starting Flask API..."
cd backend
python app.py &  # Run in background
deactivate

# Install frontend (React) dependencies
echo "Installing React frontend dependencies..."
cd ../frontend
npm install  # Install Node.js dependencies

# Navigate to frontend and start React
echo "Starting React app..."
npm start &  # Run in background

# Wait for both processes to keep running
wait
