# Cashierly

A modern web application built with SolidStart framework.

## Requirements

- Node.js v22.x or higher
- npm v11.x or higher

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/riskiapl/cashierly.git
cd cashierly
npm install
```

## Development

Start the development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

The application will be available at `http://localhost:3000`

## Building

Build the application for production:

```bash
npm run build
```

This will generate optimized files ready for deployment.

## Deployment

After building, you can start the production server:

```bash
npm run start
```

### Deployment Options

SolidStart supports various deployment environments:

- **Node.js Server**: Default output (no additional configuration needed)
- **Static Site**: Add `@solidjs/start-static` to your dependencies
- **Vercel**: Add `@solidjs/start-vercel` to your dependencies
- **Netlify**: Add `@solidjs/start-netlify` to your dependencies

Configure your preferred deployment option in `app.config.js`.

## Project Structure

```
cashierly/
├── public/          # Static assets
├── src/
│   ├── components/  # Reusable UI components
│   ├── routes/      # Application routes
│   └── app.tsx      # App root component
└── package.json     # Dependencies and scripts
```

## Technologies

- [SolidJS](https://solidjs.com) - A declarative, efficient, and flexible JavaScript library for building user interfaces
- [SolidStart](https://start.solidjs.com) - A framework for building SolidJS applications
- [Vite](https://vitejs.dev) - Next Generation Frontend Tooling

## License

MIT
