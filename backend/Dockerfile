FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev && \
    npm cache clean --force

COPY . .

RUN addgroup -S nodejs && \
    adduser -S marketflow -G nodejs

RUN chown -R marketflow:nodejs /app

USER marketflow

EXPOSE 5000

HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
CMD wget --no-verbose --tries=1 --spider http://localhost:5000/api/health || exit 1

CMD ["npm","start"]
