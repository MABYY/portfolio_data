#!/bin/sh
echo "Verifying database connection..."
npm run knex -- raw 'SELECT 1'
echo "Running migrations..."
npm run migrate
echo "Running seeds..."
npm run seed
echo "Starting application..."
npm run start