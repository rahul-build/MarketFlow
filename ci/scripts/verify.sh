#!/bin/sh

echo "========== Containers =========="

docker compose ps

echo ""

echo "========== Health =========="

curl http://localhost/api/health

echo ""

echo "========== Completed =========="
