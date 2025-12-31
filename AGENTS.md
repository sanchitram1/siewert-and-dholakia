# Project Guidelines

## Overview

This project is a **modern React + Vite application** originally scaffolded from Figma Make. We are actively modernizing and fixing the codebase for production deployment.

## Tech Stack

- **Framework**: React 18.3.1
- **Build Tool**: Vite 6.3.5
- **Styling**: Tailwind CSS 4.1.12
- **UI Components**: Shadcn/ui (Radix UI primitives)
- **Animations**: Motion (Framer Motion alternative)
- **Form Handling**: React Hook Form
- **Charts**: Recharts
- **Toast Notifications**: Sonner
- **TypeScript**: Strict mode enabled

## Project Structure

```
src/
├── app/
│   ├── components/     # Reusable React components
│   ├── pages/          # Page-level components
│   └── layout/         # Layout components
├── styles/             # Global styles and Tailwind config
├── utils/              # Utility functions
├── types/              # TypeScript type definitions
└── main.tsx            # Entry point
```

## Coding Standards

### Components

1. **Functional Components Only**: All components are functional React components using hooks
2. **TypeScript**: All components must be properly typed
3. **Props Interface**: Define explicit interfaces for component props
4. **File Naming**: Use PascalCase (e.g., `Hero.tsx`, `Button.tsx`)
5. **Default Exports**: Export components as default exports

Example:

```tsx
import { FC, ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

export const Button: FC<ButtonProps> = ({ children, onClick, variant = 'primary' }) => {
  return (
    <button className={`btn btn-${variant}`} onClick={onClick}>
      {children}
    </button>
  );
};
```

### Styling

1. **Tailwind CSS First**: Use Tailwind utility classes for styling
2. **No Inline Styles**: Avoid inline `style` props
3. **Custom Classes**: Use `@apply` in component-level CSS for complex patterns
4. **Responsive Design**: Use Tailwind breakpoints (`sm:`, `md:`, `lg:`, etc.)

### TypeScript

1. **Strict Mode**: Always enabled - fix all type errors
2. **Implicit Any Prohibited**: Never leave `any` types unresolved
3. **Import React**: Not required with `jsx: "react-jsx"` in tsconfig
4. **Type Definitions**: Add `@types/` packages for third-party libraries

### Naming Conventions

- **Components**: PascalCase (e.g., `Hero.tsx`)
- **Utilities/Helpers**: camelCase (e.g., `useScrollEffect.ts`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `API_BASE_URL`)
- **Types**: PascalCase with `Type` or `Interface` suffix optional (e.g., `ButtonProps`)

## Dependencies

### Adding New Packages

1. Check if types exist: `npm i --save-dev @types/package-name`
2. Run TypeScript check: `npm run build` or use your IDE's TypeScript checker
3. All packages must resolve cleanly in strict TypeScript mode

### Missing Type Definitions

If you encounter "Could not find declaration file" errors:

```bash
npm install --save-dev @types/package-name
```

## Build & Development

```bash
# Development server
npm run dev

# Production build
npm run build

# Type checking
npm run build  # TypeScript is checked during build
```

## Linting & Formatting

This project uses **ESLint** for code quality and **Prettier** for code formatting.

```bash
# Check for linting errors
npm run lint

# Fix linting errors automatically
npm run lint:fix

# Check formatting
npm run format:check

# Format code
npm run format
```

### ESLint Configuration

- TypeScript support enabled
- React and React Hooks rules configured
- Strict type checking (`@typescript-eslint/no-explicit-any` is an error)
- Console warnings allowed only for `warn` and `error`
- Unused variables trigger warnings (use `_` prefix to intentionally ignore)

### Prettier Configuration

- Print width: 100 characters
- 2-space indentation
- Single quotes (except JSX)
- Trailing commas in ES5
- Always use arrow parens

## Common Tasks

### Creating a New Component

1. Create file: `src/app/components/ComponentName.tsx`
2. Define props interface
3. Use TypeScript strict mode
4. Export as default: `export function ComponentName() { ... }`
5. Add proper styling with Tailwind

### Using Animations

Use the `motion` library (installed as "motion" package):

```tsx
import { motion } from 'motion/react';

<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
  Content
</motion.div>;
```

### Accessing @ Alias

The `@` alias points to `./src/`, configured in both `tsconfig.json` and `vite.config.ts`:

```tsx
import { Button } from '@/app/components/ui/button';
```

## Deployment

This project is ready for deployment to standard Node.js hosting or static hosting (after `npm run build`).

## Notes

- **Figma Make Cleanup**: Remove Figma-specific code and comments as you modernize
- **CSS-in-JS**: Emotion is a dependency but prefer Tailwind CSS
- **React Version**: Peer dependency at 18.3.1 - ensure consumers have this installed
