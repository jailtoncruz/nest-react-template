# Stage 1: Build
FROM node:22-alpine AS builder

WORKDIR /app

# Install pnpm and build dependencies
RUN npm install -g pnpm @nestjs/cli && \
    apk add --no-cache --virtual .build-deps python3 make g++

# Copy only the required files for dependency resolution
COPY pnpm-lock.yaml pnpm-workspace.yaml package.json turbo.json ./
COPY apps/api/package.json ./apps/api/
COPY apps/client/package.json ./apps/client/

# Install all dependencies
RUN pnpm install --frozen-lockfile

# Copy remaining files
COPY . .

# Build and cleanup
RUN pnpm build --filter api --filter client && \
    apk del .build-deps && \
    rm -rf /root/.npm /root/.pnpm-store /usr/local/share/.cache && \
    find /app \( -name "*.ts" -o -name "*.spec.*" -o -name "test" \) -delete

# Stage 2: Production Dependencies
FROM node:22-alpine AS deps

WORKDIR /app

# Copy only files needed for production dependencies
COPY --from=builder /app/package.json .
COPY --from=builder /app/pnpm-lock.yaml .
COPY --from=builder /app/pnpm-workspace.yaml .
COPY --from=builder /app/apps/api/package.json ./apps/api/

# Install production dependencies and clean up
RUN npm install -g pnpm && \
    pnpm install --frozen-lockfile  

# Stage 3: Final Runtime
FROM node:22-alpine

WORKDIR /app

# Install runtime dependencies only
RUN apk add --no-cache ffmpeg curl && \
    adduser -D app && \
    chown -R app:app /app

USER app

ENV NODE_ENV=production

# Copy production node_modules from deps stage
COPY --from=deps --chown=app:app /app/node_modules ./node_modules
COPY --from=deps --chown=app:app /app/apps/api/node_modules ./apps/api/node_modules

# Copy built assets from builder
COPY --from=builder --chown=app:app /app/apps/api/dist ./apps/api/dist
COPY --from=builder --chown=app:app /app/apps/client/dist ./apps/client/dist

EXPOSE 3000
# HEALTHCHECK --interval=30s --timeout=3s --retries=3 CMD curl -f http://localhost:3000/api/health || exit 1

CMD node apps/api/dist/main