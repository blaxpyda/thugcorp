#!/bin/bash

# ThugCorp Docker Management Script

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Functions
log_info() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

log_warn() {
    echo -e "${YELLOW}[WARN]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Docker is running
check_docker() {
    if ! docker info > /dev/null 2>&1; then
        log_error "Docker is not running. Please start Docker and try again."
        exit 1
    fi
}

# Production build and run
prod() {
    log_info "Building and starting ThugCorp in production mode..."
    check_docker
    docker-compose up --build -d
    log_info "Application is starting. Visit http://localhost:3000"
    docker-compose logs -f thugcorp-app
}

# Development mode
dev() {
    log_info "Starting ThugCorp in development mode..."
    check_docker
    docker-compose --profile dev up --build thugcorp-dev
}

# Stop all services
stop() {
    log_info "Stopping all ThugCorp services..."
    docker-compose down
}

# View logs
logs() {
    if [ -n "$1" ]; then
        docker-compose logs -f "$1"
    else
        docker-compose logs -f
    fi
}

# Clean up everything
clean() {
    log_warn "This will remove all containers, images, and volumes. Are you sure? (y/N)"
    read -r response
    if [[ "$response" =~ ^([yY][eE][sS]|[yY])$ ]]; then
        log_info "Cleaning up..."
        docker-compose down -v --rmi all --remove-orphans
        docker system prune -f
        log_info "Cleanup complete"
    else
        log_info "Cleanup cancelled"
    fi
}

# Status check
status() {
    log_info "ThugCorp services status:"
    docker-compose ps
}

# Show help
help() {
    echo "ThugCorp Docker Management Script"
    echo ""
    echo "Usage: $0 {prod|dev|stop|logs|clean|status|help}"
    echo ""
    echo "Commands:"
    echo "  prod    - Build and run in production mode"
    echo "  dev     - Run in development mode with hot reloading"
    echo "  stop    - Stop all services"
    echo "  logs    - Show logs (optional: specify service name)"
    echo "  clean   - Remove all containers, images, and volumes"
    echo "  status  - Show status of all services"
    echo "  help    - Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 prod                 # Start production"
    echo "  $0 dev                  # Start development"
    echo "  $0 logs thugcorp-app    # Show app logs"
    echo "  $0 clean                # Clean everything"
}

# Main script logic
case "$1" in
    prod)
        prod
        ;;
    dev)
        dev
        ;;
    stop)
        stop
        ;;
    logs)
        logs "$2"
        ;;
    clean)
        clean
        ;;
    status)
        status
        ;;
    help|--help|-h)
        help
        ;;
    *)
        log_error "Unknown command: $1"
        help
        exit 1
        ;;
esac
