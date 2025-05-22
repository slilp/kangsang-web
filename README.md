# Kangsang Web

A comprehensive collection of web development resources, tools, and best practices that I've discovered and implemented throughout my journey in web development. This repository serves as both a knowledge base and a practical implementation of modern web development concepts, patterns, and solutions.

## 📚 What You'll Find Here

- **Code Examples**: Practical examples of complex web development concepts (\*\* Admin Dashboard project)
- **Development Patterns**: Proven architectural patterns and coding practices
- **Tool Configurations**: Optimized setups for various development tools

# 1) Kangsang Admin Dashboard

A modern, developer-friendly admin dashboard boilerplate built with React, TypeScript, and Turborepo. This project provides a solid foundation for building scalable admin applications with best practices and modern tooling.

## 📝 Project Description

Kangsang Admin Dashboard is a comprehensive admin panel template designed to accelerate the development of modern web applications. Built with a focus on developer experience and maintainability, it offers:

- **Monorepo Architecture**: Using Turborepo for efficient code sharing and management across multiple applications
- **Modern Tech Stack**: Leveraging React, TypeScript, and Material-UI for a robust and type-safe development experience
- **Developer-First Approach**: Clean code structure and comprehensive documentation for easy onboarding
- **Production-Ready Features**: Built-in authentication, state management, and CRUD operations
- **Customizable Design**: Flexible theming system with Material-UI integration

This boilerplate is perfect for:

- Building new admin panels from scratch
- Learning modern React development practices
- Creating scalable enterprise applications
- Teams looking for a standardized admin dashboard solution

## 🚀 Features

### Completed Features ✅

- Junior-friendly code structure
- Authentication system
- Unit testing setup
- Query state management
- Global state management
- CRUD operations integration
- Turborepo monorepo setup
- Theme customization
- Responsive layout design

### In Progress Features 🚧

- Social login integration
- Multi-language support
- Statistics and graphs
- Animations
- Storybook documentation

## 🛠️ Tech Stack

- Next.js (App Router)
- TypeScript
- Turborepo
- Material-UI (Customized as Kangsang-MUI)
- NextAuth.js
- TanStak Query
- Redux
- Vitest (unit test)

## 📦 Prerequisites

- Node.js (v16 or higher)
- pnpm (v8 or higher)
- Git

## 🚀 Getting Started

1. Clone the repository:

```bash
git clone https://github.com/slilp/kangsang-web.git
cd kangsang-web
```

2. Install dependencies:

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm dev
```

4. Open your browser and navigate to `http://localhost:3000`

## 📁 Project Structure

```
kangsang-web/
├── apps/
│   ├── kangsang-admin/     # Admin dashboard
├── packages/    # Shared packages
│   ├── kangsang-mui/  # Share components
└── package.json
```

## 🔧 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm test` - Run tests
- `pnpm lint` - Run linting

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.
