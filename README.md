/project-root
│── /src
│ │── /config
│ │ ├── index.ts # Loads environment variables & database config
│ │ ├── db.ts # MongoDB connection
│ │ ├── env.ts # Environment variable validation
│ │
│ │── /controllers
│ │ ├── index.ts # Aggregates all controllers
│ │ ├── user.controller.ts # User-related logic
│ │ ├── auth.controller.ts # Authentication logic
│ │
│ │── /middlewares
│ │ ├── index.ts # Aggregates middlewares
│ │ ├── auth.middleware.ts # JWT authentication middleware
│ │ ├── error.middleware.ts # Global error handling
│ │
│ │── /models
│ │ ├── index.ts # Exports all Mongoose models
│ │ ├── user.model.ts # User schema
│ │ ├── order.model.ts # Order schema
│ │
│ │── /routes
│ │ ├── index.ts # Aggregates all routes
│ │ ├── user.routes.ts # Routes for user operations
│ │ ├── auth.routes.ts # Routes for authentication
│ │
│ │── /services
│ │ ├── index.ts # Aggregates services
│ │ ├── user.service.ts # User business logic
│ │ ├── auth.service.ts # Authentication logic
│ │
│ │── /utils
│ │ ├── index.ts # Aggregates all utilities
│ │ ├── logger.ts # Logger configuration
│ │ ├── responseHandler.ts # Standard API response format
│ │
│ ├── server.ts # Main Express server entry point
│
│── /dist # Compiled TypeScript output
│── package.json
│── tsconfig.json
│── .env
│── .gitignore
