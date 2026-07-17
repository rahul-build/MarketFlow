#!/bin/sh

echo "Deploying MarketFlow..."

docker compose -f docker-compose.dev.yml up -d

echo "Deployment Completed."
