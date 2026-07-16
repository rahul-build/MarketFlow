# MarketFlow

## Overview

MarketFlow is a production-grade e-commerce platform built to demonstrate modern DevOps engineering practices.

This repository is developed incrementally using production engineering principles rather than tutorial shortcuts.

---

## Technology Stack

### Frontend

- React
- Vite
- Tailwind CSS

### Backend

- Express.js
- PostgreSQL

### Infrastructure

- Docker
- Docker Compose
- Nginx
- Jenkins
- Docker Hub
- Kubernetes
- Helm
- Argo CD
- Prometheus
- Grafana
- Loki
- Promtail
- Alertmanager
- OpenTelemetry
- Trivy
- Cosign
- Terraform
- AWS

---

## Repository Structure

frontend/

React application

backend/

Express API

database/

Database scripts

docker/

Dockerfiles and Compose files

nginx/

Reverse proxy configuration

ci/

CI/CD pipelines

kubernetes/

Kubernetes manifests

helm/

Helm charts

gitops/

GitOps manifests

monitoring/

Observability stack

terraform/

Infrastructure as Code

docs/

Architecture and operational documentation

---

## Development Philosophy

- Small verified changes
- Production-first design
- Infrastructure as Code
- Security by default
- Observability by default
- Troubleshooting before fixing

---

## Engineering Workflow

Application

↓

Docker

↓

Docker Compose

↓

Nginx

↓

CI

↓

Kubernetes

↓

GitOps

↓

AWS

Every layer must be verified before moving to the next.
