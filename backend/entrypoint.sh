#!/bin/sh

# Wait for PostgreSQL to be ready using wait-for-it.sh
/app/wait-for-it.sh $DB_HOST:5432 -- echo "PostgreSQL is up and running!"

# Apply database migrations
echo "Applying database migrations..."
python manage.py migrate

# Start the Django development server
echo "Starting the Django development server..."
python manage.py runserver 0.0.0.0:8000
