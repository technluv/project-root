FROM python:3.10

ENV PYTHONUNBUFFERED 1

WORKDIR /app

# Copy the entrypoint.sh script into the container
COPY entrypoint.sh /app/entrypoint.sh

# Copy wait-for-it.sh script into the container
COPY wait-for-it.sh /app/wait-for-it.sh

# Make the scripts executable
RUN chmod +x /app/entrypoint.sh /app/wait-for-it.sh

# Copy requirements and install dependencies
COPY requirements.txt ./
RUN pip install --upgrade pip && pip install -r requirements.txt

# Copy the rest of the application code
COPY . .

EXPOSE 8000

# Use the entrypoint script as the entry point
ENTRYPOINT ["/app/entrypoint.sh"]
