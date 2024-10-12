# Modal Management System

This project is a full-stack application that implements a global modal management system using React for the frontend and Django for the backend.

## Prerequisites

- Docker
- Docker Compose

## Installation and Setup

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/modal-management-system.git
   cd modal-management-system
   ```

2. Build and run the Docker containers:
   ```
   docker-compose up --build
   ```

3. Once the containers are running, you need to create a superuser for the Django admin:
   ```
   docker-compose exec backend python manage.py createsuperuser
   ```
   Follow the prompts to create a superuser.

4. The application should now be running. You can access:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:8000/api/
   - Django Admin: http://localhost:8000/admin/

## Usage

1. Open the frontend application in your browser (http://localhost:3000).
2. Click the "Open Modal" button to log in and open a sample modal.
3. The sample modal will display a list of products fetched from the backend.

## Development

- Frontend code is located in the `frontend` directory.
- Backend code is located in the `backend` directory.

To make changes:

1. Modify the code as needed.
2. Rebuild and restart the Docker containers:
   ```
   docker-compose down
   docker-compose up --build
   ```

## Running Tests

To run the backend tests:
```
docker-compose exec backend python manage.py test
```

## API Endpoints

- `/api/users/`: CRUD operations for users
- `/api/products/`: CRUD operations for products
- `/api/auth/`: Obtain authentication token

## Technologies Used

- Frontend: React, Context API
- Backend: Django, Django REST framework
- Database: PostgreSQL
- Containerization: Docker

## Contributing

Please read CONTRIBUTING.md for details on our code of conduct, and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.
