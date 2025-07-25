# ThugCorp

A modern Next.js application built with TypeScript, Tailwind CSS, and Radix UI components.

## 🚀 Quick Start with Docker

### Prerequisites

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

### Running the Application

#### Production Mode (Recommended)
```bash
# Using the management script
./docker.sh prod

# Or directly with docker-compose
docker-compose up --build -d
```

The application will be available at [http://localhost:3000](http://localhost:3000)

#### Development Mode
```bash
# Using the management script
./docker.sh dev

# Or directly with docker-compose
docker-compose --profile dev up --build thugcorp-dev
```

The development server will be available at [http://localhost:3001](http://localhost:3001) with hot reloading enabled.

### Management Commands

The included `docker.sh` script provides convenient commands:

```bash
./docker.sh prod      # Start production mode
./docker.sh dev       # Start development mode
./docker.sh stop      # Stop all services
./docker.sh logs      # View logs
./docker.sh status    # Check service status
./docker.sh clean     # Clean up everything
./docker.sh help      # Show help
```

## 🛠️ Local Development (without Docker)

### Prerequisites

- Node.js 20+
- pnpm

### Setup

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── projects/          # Projects page
│   └── services/          # Services page
├── components/            # React components
│   ├── ui/               # Radix UI components
│   ├── footer.tsx        # Footer component
│   ├── navigation.tsx    # Navigation component
│   └── theme-provider.tsx # Theme provider
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/               # Static assets
└── styles/               # Additional styles
```

## 🐳 Docker Configuration

### Services

- **thugcorp-app**: Main production application
- **thugcorp-dev**: Development server with hot reloading
- **nginx**: Optional reverse proxy for production scaling

### Profiles

- **default**: Production services
- **dev**: Development services
- **nginx**: Nginx reverse proxy

### Environment Variables

Copy `.env.example` to `.env.local` and configure as needed:

```bash
cp .env.example .env.local
```

## 🔧 Production Deployment

### With Nginx (Recommended for production)

```bash
docker-compose --profile nginx up -d
```

This will start:
- Next.js application on port 3000 (internal)
- Nginx reverse proxy on ports 80/443 (external)

### Scaling

```bash
docker-compose up --scale thugcorp-app=3 -d
```

## 📊 Monitoring

### Health Checks

The application includes built-in health checks:
- Application: `http://localhost:3000/`
- Nginx: `http://localhost:80/health`

### Logs

```bash
# View all logs
docker-compose logs -f

# View specific service logs
docker-compose logs -f thugcorp-app

# Using the management script
./docker.sh logs thugcorp-app
```

## 🧹 Cleanup

```bash
# Stop services
./docker.sh stop

# Complete cleanup (removes all containers, images, volumes)
./docker.sh clean
```

## 🛡️ Security Features

- Multi-stage Docker builds for minimal image size
- Non-root user in production containers
- Security headers via Nginx
- Gzip compression enabled
- Static asset caching

## 🔧 Technical Stack

- **Framework**: Next.js 15.2.4
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Package Manager**: pnpm
- **Containerization**: Docker & Docker Compose

## 📝 Notes

- The application is configured to ignore TypeScript and ESLint errors during builds for faster development
- Images are set to unoptimized mode for better compatibility
- Standalone output is enabled for optimal Docker performance
