# Monkey Pox Spread Tracker (WIP)

A work-in-progress project aimed at tracking the newest spread of Monkey Pox using a real-time visualization system. This project helps monitor and visualize Monkey Pox cases across different regions using up-to-date data.

## Table of Contents
- [Requirements](#requirements)
- [Setup](#setup)
- [Running the Application](#running-the-application)
- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)

## Requirements

- Python 3.10
- PostgreSQL 15
- psycopg2-binary 2.9.9
- Node.js & npm (for frontend)

## Setup

1. Clone the repository
2. Set up Python virtual environment:   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate   ```
3. Install backend dependencies:   ```bash
   pip install -r requirements.txt   ```
4. Install frontend dependencies:   ```bash
   cd frontend
   npm install   ```

## Running the Application

1. Start the backend server:   ```bash
   cd backend
   python app.py   ```

2. Start the frontend development server:   ```bash
   cd frontend
   npm start   ```

## Project Overview

This project provides a comprehensive tool for tracking the spread of Monkey Pox. Key features include:
- Real-time visualization of case data
- Geographic distribution of cases
- Trend analysis and statistics
- Interactive maps and charts

## Tech Stack

- **Backend**:
  - Python with Flask
  - PostgreSQL database
  - psycopg2 for database connectivity
  
- **Frontend**:
  - React.js
  - GeoJSON for map visualization
  
- **APIs & Tools**:
  - Postman for API testing
  - OpenAI integration
  
- **Development Tools**:
  - Git for version control
  - Virtual environment for Python dependency management

