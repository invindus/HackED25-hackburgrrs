#!/bin/bash

# Navigate to backend and start Flask
cd backend
source ../venv/bin/activate  # Activate virtual environment
echo "Starting Flask API..."
python app.py &  # Run in background
deactivate  # Deactivate virtual environment

# Navigate to frontend and start React
cd ../frontend
echo "Starting React app..."
npm start &  # Run in background

# Wait for both processes to keep running
wait
