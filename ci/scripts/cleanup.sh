#!/bin/sh

echo "Stopping MarketFlow..."

docker compose -f docker-compose.dev.yml down

echo "Cleanup completed."
