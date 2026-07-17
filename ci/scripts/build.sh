#!/bin/sh

echo "Building Docker Images..."

docker compose -f docker-compose.dev.yml build

echo "Build Completed."
