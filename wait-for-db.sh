#!/bin/sh
set -e

host="$1"
port="$2"
shift 2
cmd="$@"

echo "Waiting for database at $host:$port..."

until pg_isready -h "$host" -p "$port" -U "root"; do
  echo "Database is not ready, waiting..."
  sleep 2
done

echo "Database is ready!"
exec $cmd