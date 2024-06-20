# Coding_Challenge_Roxiler
# TransactionDashboard

TransactionDashboard is a comprehensive web application that provides detailed insights into financial transactions. The app includes various features like viewing all transactions, monthly dashboards, pie charts, bar charts, and combined charts. It supports CRUD operations and pagination for better data management and visualization.

## Table of Contents

- [Features](#features)
- [Frontend](#frontend)
- [Backend](#backend)
- [API Endpoints](#api-endpoints)
- [Getting Started](#getting-started)
- [Dependencies](#dependencies)
- [License](#license)

## Features

- View all transactions with pagination.
- Monthly transaction dashboard.
- Visualize data using pie charts, bar charts, and combined charts.
- User-friendly interface.

## Frontend

The client-side application is served on `localhost:5173`.

### Links

- **Home:** `/`
- **All Transactions:** `/all-transactions`
- **Monthly Dashboard:** `/dashboard/:month`
- **Pie Chart:** `/piechart/:month`
- **Bar Chart:** `/barchart/:month`
- **Combined Chart:** `/combined/:month`

## Backend

The server-side application is served on `localhost:3000`.

## API Endpoints

### /api/

1. **GET `/api/transactions`**
   - Fetch all transactions.

2. **GET `/api/transactions/:month`**
   - Fetch transactions for a specific month.

3. **GET `/api/statistics/:month`**
   - Fetch statistics for a specific month.

4. **GET `/api/barchart/:month`**
   - Fetch bar chart data for a specific month.

5. **GET `/api/piechart/:month`**
   - Fetch pie chart data for a specific month.

6. **GET `/api/combined/:month`**
   - Fetch combined chart data for a specific month.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js
- npm (Node Package Manager)
- MongoDB

### Installation

1. **Clone the repository:**

    ```bash
    git clone <repository-url>
    ```

2. **Navigate to the project directory:**

    ```bash
    cd TransactionDashboard
    ```

3. **Install dependencies for both frontend and backend:**

    ```bash
    cd frontend
    npm install
    cd ../backend
    npm install
    ```

4. **Set up environment variables:**

    Create a `.env` file in the backend directory and add your environment variables. Example:

    ```env
    PORT=3000
    MONGODB_URI=<your-mongodb-uri>
    ```

5. **Start the development servers:**

    ```bash
    cd frontend
    npm start
    cd ../backend
    npm run dev
    ```

## Dependencies

### Frontend

- `axios`: ^1.7.2
- `chart.js`: ^4.4.3
- `react`: ^18.2.0
- `react-chartjs-2`: ^5.2.0
- `react-dom`: ^18.2.0
- `react-router-dom`: ^6.23.1
- `postcss`: ^8.4.38
- `tailwindcss`: ^3.4.4
- `vite`: ^5.2.0

### Backend

- `axios`: ^1.7.2
- `cors`: ^2.8.5
- `dotenv`: ^16.4.5
- `express`: ^4.19.2
- `mongoose`: ^8.4.3
- `nodemon`: ^3.1.3

