# Tennis Backend

A Go-based backend API for a tennis application with PostgreSQL and MongoDB support.

## Features

-   **PostgreSQL**: Primary relational database for structured data
-   **MongoDB**: Document database for flexible data storage
-   **REST API**: Built with Gin framework
-   **Health Checks**: Database connectivity monitoring
-   **Admin Tools**: pgAdmin and Mongo Express for database management

## Quick Start

### Prerequisites

-   Docker and Docker Compose
-   Go 1.23.4 or later

### Database Setup

1. Start the databases:

```bash
docker-compose up -d
```

This will start:

-   PostgreSQL on port 5432
-   MongoDB on port 27017
-   pgAdmin on port 8080 (admin@example.com / admin123)
-   Mongo Express on port 8081 (admin / admin123)

### Application Setup

1. Install dependencies:

```bash
go mod tidy
```

2. Run the application:

```bash
go run main.go
```

The API will be available at `http://localhost:8080`

## API Endpoints

-   `GET /health` - Health check for databases and application
-   `GET /api/v1/` - API information

## Database Connections

### PostgreSQL

-   Host: localhost
-   Port: 5432
-   Database: tennis_db
-   Username: postgres
-   Password: password123

### MongoDB

-   Host: localhost
-   Port: 27017
-   Database: tennis_db
-   Username: admin
-   Password: password123

## Environment Variables

You can override the default configuration using environment variables:

-   `POSTGRES_DSN`: PostgreSQL connection string
-   `MONGO_URI`: MongoDB connection string
-   `PORT`: Application port (default: 8080)

## Development

The application is set up to work with both databases:

-   PostgreSQL for structured data (players, matches, tournaments)
-   MongoDB for document-based data (user sessions, logs, etc.)

## Admin Tools

-   **pgAdmin**: http://localhost:8080 (admin@example.com / admin123)
-   **Mongo Express**: http://localhost:8081 (admin / admin123)
