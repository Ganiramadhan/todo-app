# Stage 1: Build
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy only necessary files first (for caching)
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install

# Copy the rest of the app
COPY . .

# Build the Next.js app
RUN pnpm build

# Stage 2: Production
FROM node:20-alpine AS runner

# Set NODE_ENV to production
ENV NODE_ENV=production

# Set working directory
WORKDIR /app

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Install only production dependencies
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --prod

# Copy .next build output and public assets
COPY --from=builder /app/.next .next
COPY --from=builder /app/public public
COPY --from=builder /app/next.config.ts .
COPY --from=builder /app/package.json .

# Expose port
EXPOSE 3000

# Start the app
CMD ["pnpm", "start"]
