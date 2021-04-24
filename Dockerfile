FROM node:12.21.0-slim

ENV TESTS_DIR /tests/
WORKDIR ${TESTS_DIR}

COPY package.json package-lock.json ${TESTS_DIR}
RUN npm ci
COPY . ${TESTS_DIR}