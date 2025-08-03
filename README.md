# Expert Listing Web

A beautiful web interface for the Expert Listing built with Next.js, Chakra UI v2, TypeScript, and
TanStack React Query.

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **UI Library**: Chakra UI v2
- **Language**: TypeScript
- **State Management**: TanStack React Query
- **Package Manager**: yarn
- **Styling**: Chakra UI's built-in styling system

## Features

- 🎨 Modern UI with Chakra UI components
- 🔄 Server state management with React Query
- 📱 Responsive design
- ⚡ Fast development with Next.js
- 🔧 TypeScript for better developer experience
- 🛠️ React Query DevTools for debugging

## Getting Started

### Prerequisites

- Node.js 18+
- yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd expert-listing-web
```

2. Install dependencies:

```bash
yarn install
```

3. Run the development server:

```bash
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
expert-listing-web/
├── app/
│   ├── api/                # Web api containr for requests
│   ├── layout.tsx          # Root layout with providers
│   ├── page.tsx            # Home page with expert listings
│   └── providers.tsx       # Chakra UI and React Query providers
├── components/             # Container for all site component driven architecture
├── public/                 # Static assets
├── themes/                 # Theme, color and components configuratioon
├── package.json            # Dependencies and scripts
└── tsconfig.json           # TypeScript configuration
```

## Key Components

### Providers (`app/providers.tsx`)

- Sets up Chakra UI theme and provider
- Configures React Query client
- Includes React Query DevTools

### Home Page (`app/page.tsx`)

- Demonstrates Chakra UI components
- Shows React Query usage with mock data
- Responsive grid layout for expert cards

## Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn start` - Start production server
- `yarn lint` - Run ESLint

## Customization

### Theme

The Chakra UI theme is configured in `themes`. You can customize:

- Colors (including brand colors)
- Fonts
- Component styles

### React Query Configuration

Query client settings are in `app/providers.tsx`:

- Stale time: 1 minute
- Refetch on window focus: disabled

## Development

The project uses:

- **Next.js App Router** for routing
- **Chakra UI v2** for components and styling
- **TanStack React Query** for server state management
- **TypeScript** for type safety

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.
