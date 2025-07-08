# Professional Portfolio Web Application

## Overview

This is a full-stack web application built to showcase the professional portfolio of Md. Fazle Rabbi, a nutrition and development professional. The application is built using a modern React frontend with an Express.js backend, featuring a comprehensive portfolio with sections for experience, education, skills, projects, and contact information.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Routing**: Wouter for client-side routing
- **UI Library**: Radix UI components with shadcn/ui styling system
- **Styling**: Tailwind CSS with custom design tokens
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for development and bundling

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM
- **Database**: PostgreSQL (configured via Neon Database)
- **Session Management**: Connect-pg-simple for PostgreSQL session storage
- **Development**: Hot reload with Vite middleware integration

### Database Schema
The application uses a minimal database schema with a users table:
- `users` table with id (serial), username (text), and password (text) fields
- Configured for PostgreSQL with Drizzle ORM migrations

## Key Components

### Frontend Components
- **Navigation**: Fixed navigation bar with smooth scrolling to sections
- **Hero Section**: Professional introduction with contact information
- **About Section**: Professional objective and key statistics
- **Experience Section**: Detailed work history and accomplishments
- **Education Section**: Academic background with GPA information
- **Skills Section**: Categorized technical and professional skills
- **Projects Section**: Research projects and thesis work
- **Awards Section**: Recognition and leadership experience
- **Contact Section**: Contact form with toast notifications
- **Footer**: Additional navigation and contact information

### Backend Services
- **Storage Interface**: Abstracted storage layer with in-memory implementation
- **Route Registration**: Modular route handling system
- **Vite Integration**: Development server with HMR support
- **Error Handling**: Centralized error handling middleware

## Data Flow

1. **Static Content**: Portfolio content is embedded in React components
2. **User Interactions**: Form submissions handled via React state and toast notifications
3. **Database Operations**: User management through Drizzle ORM (currently with in-memory storage)
4. **Asset Serving**: Static assets served through Vite in development, Express in production

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL database connection
- **@tanstack/react-query**: Server state management and caching
- **@radix-ui/react-***: Accessible UI component primitives
- **drizzle-orm**: Type-safe database ORM
- **express**: Web framework for Node.js
- **wouter**: Lightweight React router

### Development Tools
- **Vite**: Build tool and development server
- **TypeScript**: Type safety and developer experience
- **Tailwind CSS**: Utility-first CSS framework
- **ESBuild**: Fast JavaScript bundler for production

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React application to `dist/public`
2. **Backend Build**: ESBuild bundles Express server to `dist/index.js`
3. **Database Setup**: Drizzle migrations applied via `db:push` command

### Environment Configuration
- **Development**: Uses Vite dev server with Express middleware
- **Production**: Serves built frontend through Express static middleware
- **Database**: PostgreSQL connection via `DATABASE_URL` environment variable

### Scripts
- `dev`: Development server with hot reload
- `build`: Production build for both frontend and backend
- `start`: Production server
- `db:push`: Apply database schema changes

## Changelog

```
Changelog:
- July 08, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```