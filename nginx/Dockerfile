FROM node:22-alpine AS frontend-build

WORKDIR /app
COPY react/package*.json ./
RUN npm ci
COPY react/ ./
RUN npm run build

FROM nginx:alpine
COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=frontend-build /app/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
