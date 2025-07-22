#!/bin/bash

# Quick deployment script for ThugCorp
# This script helps with common deployment tasks

set -e

# Configuration
IMAGE_NAME="thugcorp"
CONTAINER_NAME="thugcorp-app"
REGISTRY="" # Set this if you want to push to a registry

# Functions
log() {
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $1"
}

# Build production image
build() {
    log "Building production Docker image..."
    docker build -t $IMAGE_NAME:latest .
    docker build -t $IMAGE_NAME:$(date +%Y%m%d-%H%M%S) .
    log "Build complete"
}

# Run production container
run() {
    log "Starting production container..."
    docker stop $CONTAINER_NAME 2>/dev/null || true
    docker rm $CONTAINER_NAME 2>/dev/null || true
    docker run -d \
        --name $CONTAINER_NAME \
        -p 3000:3000 \
        --restart unless-stopped \
        $IMAGE_NAME:latest
    log "Container started on port 3000"
}

# Push to registry
push() {
    if [ -z "$REGISTRY" ]; then
        log "ERROR: REGISTRY not set in script configuration"
        exit 1
    fi
    
    log "Tagging and pushing to registry..."
    docker tag $IMAGE_NAME:latest $REGISTRY/$IMAGE_NAME:latest
    docker tag $IMAGE_NAME:latest $REGISTRY/$IMAGE_NAME:$(date +%Y%m%d-%H%M%S)
    docker push $REGISTRY/$IMAGE_NAME:latest
    docker push $REGISTRY/$IMAGE_NAME:$(date +%Y%m%d-%H%M%S)
    log "Push complete"
}

# Full deployment (build + run)
deploy() {
    build
    run
}

# Show logs
logs() {
    docker logs -f $CONTAINER_NAME
}

# Show container status
status() {
    if docker ps --filter "name=$CONTAINER_NAME" --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}" | grep -q $CONTAINER_NAME; then
        log "Container is running:"
        docker ps --filter "name=$CONTAINER_NAME" --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"
    else
        log "Container is not running"
    fi
}

# Show help
help() {
    cat << EOF
ThugCorp Deployment Script

Usage: $0 [COMMAND]

Commands:
    build    - Build production Docker image
    run      - Run production container
    deploy   - Build and run (full deployment)
    push     - Push to registry (configure REGISTRY variable)
    logs     - Show container logs
    status   - Show container status
    help     - Show this help

Examples:
    $0 deploy    # Full deployment
    $0 logs      # Watch logs
    $0 status    # Check if running

EOF
}

# Main script
case "${1:-help}" in
    build)
        build
        ;;
    run)
        run
        ;;
    deploy)
        deploy
        ;;
    push)
        push
        ;;
    logs)
        logs
        ;;
    status)
        status
        ;;
    help|--help|-h)
        help
        ;;
    *)
        log "Unknown command: $1"
        help
        exit 1
        ;;
esac
